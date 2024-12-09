// routes/connectRoutes.js
const express = require("express");
const router = express.Router();
const ConnectionRequest = require("../models/ConnectionRequest.js");

// Route to send a connection request
router.post("/send", async (req, res) => {
  try {
    const { senderId, receiverId, skill, message } = req.body;

    const connectionRequest = new ConnectionRequest({
      senderId,
      receiverId,
      skill,
      message,
    });

    await connectionRequest.save();

    res.status(201).json({ message: "Connection request sent successfully" });
  } catch (error) {
    console.error("Error sending connection request:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to fetch all connection requests for a user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const requests = await ConnectionRequest.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    }).populate("senderId receiverId", "name email"); // Populate user details

    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching connection requests:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to update the status of a connection request
router.patch("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Accepted, Rejected

    const updatedRequest = await ConnectionRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ error: "Connection request not found" });
    }

    res.status(200).json(updatedRequest);
  } catch (error) {
    console.error("Error updating connection request status:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
