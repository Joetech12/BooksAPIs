const mongoose = require('mongoose');
// const Author = require('./author');

// Book schema
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  authorName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  authorAge: {
    type: Number,
    min: 10,
    max: 100,
  },
  genre: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
