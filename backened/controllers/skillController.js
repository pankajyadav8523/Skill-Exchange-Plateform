const Skill = require("../models/Skill.js");

// Controller function to handle adding a skill
const addSkill = async (req, res) => {
  try {
    const { name, description, userId } = req.body;

    // Create a new skill entry
    const newSkill = new Skill({
      name,
      description,
      userId,
    });

    // Save the skill to the database
    const savedSkill = await newSkill.save();

    // Return the saved skill data
    res.status(201).json(savedSkill);
  } catch (error) {
    console.error("Error adding skill:", error);
    res
      .status(500)
      .json({ message: "Error adding skill", error: error.message });
  }
};

module.exports = { addSkill };
