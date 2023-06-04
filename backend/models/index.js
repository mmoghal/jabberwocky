// import models
const User = require('./user');
const Book = require('./book');
const Review = require('./review');
const ReadingList = require('./readinglist');

// Users have many Books
User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Books belongs to User
Review.belongsTo(User, {
  foreignKey: 'id',
});

Book.hasMany(Review, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(Book, {
  foreignKey: 'id',
});

// ReadingList belongs to User
ReadingList.belongsTo(User, {
  foreignKey: 'user_id',
});

// ReadingList belongs to Book
ReadingList.belongsTo(Book, {
  foreignKey: 'book_id',
});

// Users have many ReadingLists
User.hasMany(ReadingList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Books have many ReadingLists
Book.hasMany(ReadingList, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Book,
  ReadingList,
  Review,
};
