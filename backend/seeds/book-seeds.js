const { Book } = require('../models');

const bookData = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Southern Gothic, Bildungsroman',
    year_published: 1960, 
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian, Political Fiction, Social Science Fiction',
    year_published: 1949,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    year_published: 1954,
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
