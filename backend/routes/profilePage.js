const router = require("express").Router();
const { ReadingList, Book, User } = require('../models');

// /profile/:id
router.get('/:id', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/');
    }
    if (req.session.user_id != req.params.id) {
        res.redirect('/home');
    }

    try {
       
        const books = await Book.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: ['title', 'review', 'rating'],
        });

        const readingListData = await ReadingList.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });
        
        const user = await User.findByPk(req.params.id, {
            attributes: ['username'],
        })
          
        const serialized = books.map(book => book.get({ plain: true }));
        const readingList = readingListData.map(item => item.get({plain: true }));
        const userSerialized = user.get({ plain: true });
        res.status(200).render(
            'profilePage', 
            {
                serialized,
                readingList, 
                userSerialized, 
                layout: 'profile', 
                logged_in: req.session.logged_in, 
                user_id: req.session.user_id 
            }
        );
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    
});


module.exports = router;
