const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');

// Routes for /api/books

// GET route for all books
router.get('/', bookController.getAllBooks);

// GET route for a single book by its 'id'
router.get('/:id', bookController.getBookById);

// POST route for a new book
router.post('/', bookController.createBook);

// PUT route to update a book by its 'id'
router.put('/:id', bookController.updateBook);

// DELETE route to delete a book by its 'id'
router.delete('/:id', bookController.deleteBook);

module.exports = router;
