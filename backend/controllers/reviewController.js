const { Review } = require('../models');

const reviewController = {
    getAllReviews: async (req, res) => {
        try {
            const reviewss = await Reviews.findAll();
            const serializedBooks = books.map(book => book.get({plain:true}));
            res.status(200).json(books).render('profile', serializedBooks);
        } catch (err) {
            res.status(500).json(err);
        }
    },



    createReview: async (req, res) => {
        try {
            const newReview = await Review.create(req.body);
            res.status(200).json(newReview);
        } catch (err) {
            res.status(400).json(err);
        }
    },
};

module.exports = reviewController;
