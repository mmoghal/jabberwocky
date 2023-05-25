const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const readingListRoutes = require('./readinglist-routes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/readinglists', readingListRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>")
});

module.exports = router;
