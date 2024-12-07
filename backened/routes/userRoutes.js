// routes/userRoutes.js
const express = require("express");
const admin = require("../firebase");
const User = require("../models/User");
const router = express.Router();

// Middleware to authenticate Firebase token
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).send("Unauthorized");

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).send("Unauthorized");
  }
};

// Register a new user
router.post("/register", authenticate, async (req, res) => {
  const { name, email } = req.body;
  const firebaseId = req.user.uid;

  try {
    let user = await User.findOne({ firebaseId });
    if (!user) {
      user = new User({ firebaseId, name, email });
      await user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put("/profile", authenticate, async (req, res) => {
  const { name, email, skills } = req.body;
  const firebaseId = req.user.uid;

  try {
    const user = await User.findOneAndUpdate(
      { firebaseId },
      { name, email, skills, updatedAt: Date.now() },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
