const router = require("express").Router();
const { ReadingList, Book, User, Review } = require('../models');

// /createreview/:id

// GET - Create Review Site

router.get('/', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/');
    }

    try {
        const reviews = await Review.findAll({
            attributes: ['review', 'rating'],
            include: [
                {
                    model: User,
                    required: true,
                },
                {
                    model: Book,
                    required: true,
                }
            ]
        });
        const readingListData = await ReadingList.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: User,
                    required: true,
                },
                {
                    model: Book,
                    required: true,
                }
            ],
        });


        const serialized = reviews.map(review => review.get({ plain: true }));
        const readingList = readingListData.map(item => item.get({ plain: true}));
        // const userSerialized = user.get({ plain: true });
        res.render('reviewPage', 
        {
            serialized,
             layout: 'review',
              logged_in: req.session.logged_in,
               user_id: req.session.user_id,
               readingList,
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
