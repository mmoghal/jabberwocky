// import models
const User = require('./User');
const Book = require('./Book');
const ReadingList = require('./ReadingList');

// Users have many Books
User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Books belongs to User
Book.belongsTo(User, {
  foreignKey: 'user_id',
});

// ReadingList belongs to User
ReadingList.belongsTo(User, {
  foreignKey: 'user_id',
});

// ReadingList belongs to Book
ReadingList.belongsTo(Book, {
  foreignKey: 'book_review_id',
});

// Users have many ReadingLists
User.hasMany(ReadingList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Books have many ReadingLists
Book.hasMany(ReadingList, {
  foreignKey: 'book_review_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Book,
  ReadingList,
};
