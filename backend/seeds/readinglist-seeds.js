const { ReadingList } = require('../models');

const readingListData = [
  {
    user_id: 1,
    book_id: 1,
    status: 'read',
  },
  {
    user_id: 1,
    book_id: 2,
    status: 'currently-reading',
  },
  {
    user_id: 2,
    book_id: 3,
    status: 'to-read',
  },
];

const seedReadingLists = () => ReadingList.bulkCreate(readingListData);

module.exports = seedReadingLists;
