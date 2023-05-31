const { BookReview } = require("../models");

const router = require("express").Router();

// Import Auth0 middleware
const { requiresAuth } = require('express-openid-connect');

router.get("/", async (req, res) => {
    const reviewData = await BookReview.findAll().catch((err) => {
        res.json(err);
      });
      const reviews = reviewData.map((review) => review.get({ plain: true }));
    
    res.render("homePage", { layout: 'main', reviews});
});

module.exports = router;