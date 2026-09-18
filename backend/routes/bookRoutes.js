const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch books",
      error: error.message
    });
  }
});

// Add new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.status(201).json({
      message: "Book added successfully",
      book: book
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to add book",
      error: error.message
    });
  }
});

module.exports = router;