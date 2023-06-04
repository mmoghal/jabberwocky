const { Book } = require("../models");

const router = require("express").Router();


router.get("/", async (req, res) => {

  if (!req.session.logged_in) {
    res.redirect('/');
}

    const reviewData = await Book.findAll().catch((err) => {
        res.json(err);
      });
      const reviews = reviewData.map((review) => review.get({ plain: true }));
    
    res.render(
      "homePage", 
      { 
        layout: 'main',
        reviews, 
        logged_in: req.session.logged_in, 
        user_id: req.session.user_id
      }
    );
  });

module.exports = router;