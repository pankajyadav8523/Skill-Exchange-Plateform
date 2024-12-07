// routes/skillRoutes.js
const express = require("express");
const Skill = require("../models/Skill");
const router = express.Router();

// Get all skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find().populate("userId", "name email");
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new skill
router.post("/", async (req, res) => {
  const { name, userId, description } = req.body;
  const newSkill = new Skill({ name, userId, description });

  try {
    const skill = await newSkill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
