const router = require("express").Router();
const { ReadingList, Book, User, Review } = require('../models');

// /profile/:id
router.get('/:id', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/');
    }

    try {
       
        const reviews = await Review.findAll({
            where: {
                user_id: req.session.user_id,
            },
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
        
        const user = await User.findByPk(req.params.id, {
            attributes: ['username'],
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
        const userSerialized = user.get({ plain: true });
        const readingList = readingListData.map(item => item.get({ plain: true}));
        res.status(200).render(
            'profilePage', 
            {
                serialized, 
                userSerialized, 
                layout: 'profile', 
                logged_in: req.session.logged_in, 
                user_id: req.session.user_id,
                readingList,
            }
        );
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    
});


module.exports = router;
