const express = require('express');
const router = express.Router();
const readingListController = require('../../controllers/readinglistController');

// Routes for /api/readinglists

// GET route for all reading lists
router.get('/', async (req, res) => readingListController.getAllReadingLists(req, res));

// GET route for a single reading list by its 'id'
router.get('/:id', async (req, res) => readingListController.getReadingListById(req, res));

// POST route for a new reading list
router.post('/', async (req, res) => readingListController.createReadingList(req, res));

// PUT route to update a reading list by its 'id'
router.put('/:id', async (req, res) => readingListController.updateReadingList(req, res));

// DELETE route to delete a reading list by its 'id'
router.delete('/:id', async (req, res) => readingListController.deleteReadingList(req, res));

module.exports = router;
