// routes/connectRoutes.js
const express = require("express");
const ConnectionRequest = require("../models/ConnectionRequest.js");
const router = express.Router();

// Create a new connection request
router.post("/", async (req, res) => {
  const { senderId, receiverId, skill, message } = req.body;
  const newRequest = new ConnectionRequest({
    senderId,
    receiverId,
    skill,
    message,
  });

  try {
    const connectionRequest = await newRequest.save();
    res.status(201).json(connectionRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get connection requests for a user
router.get("/:userId", async (req, res) => {
  try {
    const requests = await ConnectionRequest.find({
      receiverId: req.params.userId,
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
