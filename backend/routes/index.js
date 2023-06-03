const router = require('express').Router();

const userRoutes = require('./api/user-routes');
const bookRoutes = require('./api/book-routes');
const readingListRoutes = require('./api/readinglist-routes');
const welcomeRoutes = require('./welcomePage');
const homeRoutes = require('./homePage');
const profileRoutes = require('./profilePage');
const reviewRoutes = require('./reviewPage');

router.use('/', welcomeRoutes);
router.use('/home', homeRoutes);
router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/readinglists', readingListRoutes);
router.use('/profile', profileRoutes);
router.use('/createreview', reviewRoutes);
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>")
});

module.exports = router;
