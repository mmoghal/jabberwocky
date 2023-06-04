const { Review } = require('../models');

const reviewData = [
  {
    book_id: 1,
    user_id: 1,
    rating: 4,
    review: 'A masterpiece of American literature.'
  },
  {
    book_id: 2,
    user_id: 2,
    rating: 3,
    review: 'A chilling prophecy about the future.'
  },
  {
    book_id: 3,
    user_id: 3,
    rating: 5,
    review: 'Epic fantasy adventure.'
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
