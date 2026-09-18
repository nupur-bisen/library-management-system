const express = require("express");
const router = express.Router();

const Student = require("../models/student");

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch students",
      error: error.message
    });
  }
});

// Add new student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.status(201).json({
      message: "Student added successfully",
      student: student
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to add student",
      error: error.message
    });
  }
});

module.exports = router;