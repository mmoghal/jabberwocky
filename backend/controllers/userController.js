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
            req.session.save(() => {
                req.session.user_id = newUser.id;
                req.session.logged_in = true;
          
                res.json({ user: newUser, message: "You are now logged in!" });
              });
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

     /*User login*/ 
    login:  async (req, res) => {
    try {
      const userData = await User.findOne({
        where: { userName: req.body.userName },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect Username or password, please try again" });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect Username or password, please try again" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

     /*destroys users session on logout*/ 
    logout: async (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};

module.exports = userController;
