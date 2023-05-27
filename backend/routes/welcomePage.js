const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("welcomePage", { layout: 'welcome'});
});

module.exports = router;