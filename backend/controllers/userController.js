const { User, BookReview, ReadingList } = require('../models');
const bcrypt = require('bcrypt');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] }, // Exclude password from the response
                include: [
                    {
                        model: BookReview,
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
                        model: BookReview,
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
            const newUser = req.body;
            // hash the password from the 'req.body' and saves it into 'newUser'
            newUser.password = await bcrypt.hash(req.body.password, 10);
            // creates a new user with a hashed password and saves it to the DB
            const userData = await User.create(req.body);
            res.status(200).json(userData);
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


    loginUser: async (req, res) => {
        try {
            // we search the DB for a user with the provided username
            const userData = await User.findOne({ where: { username: req.body.username } });
            if (!userData) {
              // checks if the username matches, if not returns a vague error message
              res.status(404).json({ message: 'Login failed. Please try again!' });
              return;
            }
            // use `bcrypt to compare the provided password and the hashed password
            const validPassword = await bcrypt.compare(
              req.body.password,
              userData.password
            );
            // if password does not match username, returns error message
            if (!validPassword) {
              res.status(400).json({ message: 'Login failed. Please try again!' });
              return;
            }
            // if they do match, return success message
            res.status(200).json({ message: 'You are now logged in!' });
          } catch (err) {
            res.status(500).json(err);
          }
    },

    logoutUser: async (req, res) => {
        try {

        }
        catch (err) {
            res.status(500).json(err);
        }
    }

};

module.exports = userController;

    