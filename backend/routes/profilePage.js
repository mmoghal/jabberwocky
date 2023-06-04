const router = require("express").Router();
const { ReadingList, Book, User } = require('../models');

// /profile/:id
router.get('/:id', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/');
    }

    try {
       
        const books = await Book.findAll({
            attributes: ['title', 'review', 'rating'],
        });
        
        const user = await User.findByPk(req.params.id, {
            attributes: ['username'],
        })
          
        const serialized = books.map(book => book.get({ plain: true }));
        const userSerialized = user.get({ plain: true });
        res.status(200).render(
            'profilePage', 
            {
                serialized, 
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
