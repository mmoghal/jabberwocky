const router = require("express").Router();
const { ReadingList, Book, User } = require('../models');

// /profile/:id
router.get('/:id', async (req, res) => {

    try {
       
        const books = await Book.findAll({
            attributes: ['title', 'review', 'rating'],
        });
        console.log(req.params.id);
        const user = await User.findByPk(req.params.id, {
            attributes: ['username'],
        })
          
        const serialized = books.map(book => book.get({ plain: true }));
        const userSerialized = user.get({ plain: true });
        console.log(user);
        res.status(200).render('profilePage', {serialized, userSerialized, layout: 'profile' });
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    
});


module.exports = router;
