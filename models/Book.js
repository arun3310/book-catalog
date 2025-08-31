// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => /^\d{13}$/.test(v),
      message: props => `${props.value} is not a valid 13-digit ISBN!`,
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0.0,
  },
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema);

