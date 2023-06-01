const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');

// Import Auth0 middleware
const { requiresAuth } = require('express-openid-connect');

// Routes for /api/books

// GET route for all books
router.get('/', async (req, res) => bookController.getAllBooks(req, res));

// GET route for a single book by its 'id'
router.get('/:id', async (req, res) => bookController.getBookById(req, res));

// POST route for a new book
router.post('/', async (req, res) => bookController.createBook(req, res));

// PUT route to update a book by its 'id'
router.put('/:id', async (req, res) => bookController.updateBook(req, res));

// DELETE route to delete a book by its 'id'
router.delete('/:id', async (req, res) => bookController.deleteBook(req, res));

module.exports = router;
