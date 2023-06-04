const { Book } = require('../models');

const bookData = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Southern Gothic, Bildungsroman',
    year_published: 1960,
    rating: 4,
    review: 'A masterpiece of American literature.',
    user_id: 1,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian, Political Fiction, Social Science Fiction',
    year_published: 1949,
    rating: 3,
    review: 'A chilling prophecy about the future.',
    user_id: 2,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    year_published: 1954,
    rating: 5,
    review: 'Epic fantasy adventure.',
    user_id: 3,
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
