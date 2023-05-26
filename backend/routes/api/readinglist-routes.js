const express = require('express');
const router = express.Router();
const readinglistController = require('../../controllers/readinglistController');

// Routes for /api/readinglists

// GET route for all reading lists
router.get('/', readingListController.getAllReadingLists);

// GET route for a single reading list by its 'id'
router.get('/:id', readingListController.getReadingListById);

// POST route for a new reading list
router.post('/', readingListController.createReadingList);

// PUT route to update a reading list by its 'id'
router.put('/:id', readingListController.updateReadingList);

// DELETE route to delete a reading list by its 'id'
router.delete('/:id', readingListController.deleteReadingList);

module.exports = router;
