const { ReadingList } = require('../models');

const readingListData = [
  {
    user_id: 1,
    book_title: "The Hunger Games",
  },
  {
    user_id: 1,
    book_id: "Dune",
  },
  {
    user_id: 2,
    book_id: "Lord of the Flies",
  },
];

const seedReadingLists = () => ReadingList.bulkCreate(readingListData);

module.exports = seedReadingLists;
