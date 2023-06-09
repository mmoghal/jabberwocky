const { ReadingList, Book, User } = require('../models');

// readinglists/
const readinglistController = {
    getAllReadingLists: async (req, res) => {
        try {
            const readingLists = await ReadingList.findAll({
                include: [
                    {
                        model: Book,
                        attributes: ['id', 'title'],
                    },
                    {
                        model: User,
                        attributes: ['id', 'username'],
                    },
                ],
            });
            res.status(200).json(readingLists);
        } catch (err) {
            res.status(500).json(err);
        }
    },


    // readinglists/:id
    getReadingListById: async (req, res) => {
        try {
            const readingList = await ReadingList.findByPk(req.params.id, {
                include: [
                    {
                        model: Book,
                        attributes: ['id', 'title'],
                    },
                    {
                        model: User,
                        attributes: ['id', 'username'],
                    },
                ],
            });
            if (!readingList) {
                res.status(404).json({ message: 'No reading list found with this id!' });
                return;
            }          
            res.status(200).json(readingList);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createReadingList: async (req, res) => {
        try {
            const user_id = req.session.user_id;
            const book_title = req.body.bookTitle;
            const newReadingList = await ReadingList.create({user_id, book_title});
            res.status(200).json(newReadingList);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    updateReadingList: async (req, res) => {
        try {
            const updatedReadingList = await ReadingList.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            if (!updatedReadingList[0]) {
                res.status(404).json({ message: 'No reading list found with this id!' });
                return;
            }
            res.status(200).json(updatedReadingList);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteReadingList: async (req, res) => {
        try {
            const readingListToDelete = await ReadingList.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (!readingListToDelete) {
                res.status(404).json({ message: 'No reading list found with this id!' });
                return;
            }
            res.status(200).json(readingListToDelete);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = readinglistController;
