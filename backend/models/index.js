// import models
const User = require('./user');
const BookReview = require('./book');
const ReadingList = require('./readinglist');

// Users have many BookReviews
User.hasMany(BookReview, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// BookReviews belongs to User
BookReview.belongsTo(User, {
  foreignKey: 'user_id',
});

// ReadingList belongs to User
ReadingList.belongsTo(User, {
  foreignKey: 'user_id',
});

// ReadingList belongs to BookReview
ReadingList.belongsTo(BookReview, {
  foreignKey: 'book_review_id',
});

// Users have many ReadingLists
User.hasMany(ReadingList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// BookReviews have many ReadingLists
BookReview.hasMany(ReadingList, {
  foreignKey: 'book_review_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  BookReview,
  ReadingList,
};
