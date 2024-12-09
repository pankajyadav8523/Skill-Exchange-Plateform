const express = require("express");
const { addSkill } = require("../controllers/skillController.js");
const router = express.Router();

// Route to add a skill
router.post("/add", addSkill);

module.exports = router;
