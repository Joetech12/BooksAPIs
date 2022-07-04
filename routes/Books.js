const express = require("express");
const {
  createBook,
  getBook,
  getBooks,
  deleteBook,
  updateBook,
} = require("../controllers/BookController");

const router = express.Router();

// Get all workouts
router.get("/", getBooks);

// Get a single workouts
router.get("/:id", getBook);

// POST a new workout
router.post("/", createBook);

// DELETE a new workout
router.delete("/:id", deleteBook);

// UPDATE a new workout
router.patch("/:id", updateBook);

module.exports = router;
