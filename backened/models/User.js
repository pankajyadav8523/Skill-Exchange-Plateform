// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [
    {
      name: { type: String, required: true },
      ratings: { type: Number, default: 0 },
    },
  ],
  connections: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      skill: { type: String },
      status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
