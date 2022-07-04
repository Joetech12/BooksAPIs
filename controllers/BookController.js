const Book = require('../models/books');
const mongoose = require('mongoose');

// Get all books
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });

  res.status(200).json(books);
};
//////

// Get a single book
const getBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: 'No such book' });
  }

  res.status(200).json(book);
};
////////

// Create new book
const createBook = async (req, res) => {
  const { title, authorName, authorAge, genre } = req.body;

  //Add doc to db
  try {
    const book = await Book.create({ title, authorName, authorAge, genre });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
/////////

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return res.status(404).json({ error: 'No such book' });
  }

  res.status(200).json(book);
};
/////

// Update a book
const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such book' });
  }

  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!book) {
    return res.status(404).json({ error: 'No such book' });
  }

  res.status(200).json(book);
};

module.exports = {
  createBook,
  getBook,
  getBooks,
  deleteBook,
  updateBook,
};
