const { Book } = require("../models");

const router = require("express").Router();


router.get("/", async (req, res) => {
    const reviewData = await Book.findAll().catch((err) => {
        res.json(err);
      });
      const reviews = reviewData.map((review) => review.get({ plain: true }));
    
    res.render("homePage", { layout: 'main', reviews});
});

module.exports = router;