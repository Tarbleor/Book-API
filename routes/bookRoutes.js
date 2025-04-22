const express = require('express');
const Book = require('../models/book');

const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// POST new book
router.post('/', async (req, res) => {
  try {
    const { title, author, isbn, publication_year, genre } = req.body;
    if (!title || !author || !isbn) {
      return res.status(400).json({ error: 'Title, Author, and ISBN are required' });
    }
    const newBook = await Book.create({ title, author, isbn, publication_year, genre });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book', details: error.message });
  }
});

module.exports = router;
