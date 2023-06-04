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

        // Needs authentication

        // const userId = req.query.userId;

        // const user = await User.findByPk(userId, {
        //     attributes: ['id', 'username'],
        // })

        const serialized = books.map(book => book.get({ plain: true }));
        // const userSerialized = user.get({ plain: true });
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
    
        // Needs authentication
        const bookData = await Book.create({
            title: req.body.title,
            review: req.body.review,
            rating: req.body.rating,
        })
        res.status(200).json({bookData});
    } 
    
    catch (err) {
      res.status(400).json(err);
    }
        
});


module.exports = router;
