const { User, Book, ReadingList } = require('../models');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] }, // Exclude password from the response
                include: [
                    {
                        model: Book,
                        attributes: ['id', 'rating', 'review'],
                    },
                    {
                        model: ReadingList,
                        attributes: ['id'],
                    },
                ],
            });
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id, {
                attributes: { exclude: ['password'] }, // Exclude password from the response
                include: [
                    {
                        model: Book,
                        attributes: ['id', 'rating', 'review'],
                    },
                    {
                        model: ReadingList,
                        attributes: ['id'],
                    },
                ],
            });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.status(200).json(user);
              
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await User.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            if (!updatedUser[0]) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userToDelete = await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (!userToDelete) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.status(200).json(userToDelete);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = userController;
