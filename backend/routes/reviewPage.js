const router = require("express").Router();
const { ReadingList, Book, User } = require('../models');

// /createreview/:id

// GET - Create Review Site

router.get('/', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/');
    }

    try {
        const books = await Book.findAll({
            attributes: ['title', 'review', 'rating'],
        });


        const serialized = books.map(book => book.get({ plain: true }));
        res.render('reviewPage', 
        {
            serialized,
             layout: 'review',
              logged_in: req.session.logged_in,
               user_id: req.session.user_id
            }
        );
    }

    catch (err) {
        res.status(400).json(err);
    }
    
    
})

// POST - Create New Review
router.post('/', async (req, res) => {

    try {
        const bookData = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            year_published: req.body.year_published,
            review: req.body.review,
            rating: req.body.rating,
            user_id: req.session.user_id,
        })
        res.status(200).json({bookData});
    }   
    catch (err) {
      res.status(400).json(err);
    }
        
});


module.exports = router;
