const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/reviewController');


router.get('/', async (req, res) => reviewController.getAllReviews(req, res));

router.post('/', async (req, res) => reviewController.createReview(req, res));

module.exports = router;
