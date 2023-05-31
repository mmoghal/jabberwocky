const router = require("express").Router();
const { ReadingList, Book, User } = require('../models');

// /createreview/:id

// GET - Create Review Site

router.get('/', async (req, res) => {
    res.render('reviewPage', {layout: 'review'});
})

// POST - Create New Review
router.post('/', async (req, res) => {

    try {
    
        // if (user) 
        // const user = await Book.findByPk(req.params.id)
        const bookData = await Book.create({
            title: req.body.title,
            review: req.body.review,
            rating: req.body.rating,
        })
        res.status(200).json(bookData)
    } 
    
    catch (err) {
      res.status(400).json(err);
    }
        
});


module.exports = router;
