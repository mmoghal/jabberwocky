const { User, Book } = require('../models');

const bookController = {
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.findAll();
            const serializedBooks = books.map(book => book.get({plain:true}));
            res.status(200).json(books).render('profile', serializedBooks);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getBookById: async (req, res) => {
        try {
            const book = await Book.findByPk(req.params.id);
            if (!book) {
                res.status(404).json({ message: 'No book found with this id!' });
                return;
            }
            res.status(200).json(book);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createBook: async (req, res) => {
        try {
            const newBook = await Book.create(req.body);
            res.status(200).json(newBook);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    updateBook: async (req, res) => {
        try {
            const updatedBook = await Book.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            if (!updatedBook[0]) {
                res.status(404).json({ message: 'No book found with this id!' });
                return;
            }
            res.status(200).json(updatedBook);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteBook: async (req, res) => {
        try {
            const bookToDelete = await Book.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (!bookToDelete) {
                res.status(404).json({ message: 'No book found with this id!' });
                return;
            }
            res.status(200).json(bookToDelete);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;
