const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Routes for /api/users

// GET route for all users
router.get('/', userController.getAllUsers);

// GET route for a single user by its 'id'
router.get('/:id', userController.getUserById);

// POST route for a new user
router.post('/', userController.createUser);

// POST route for login
router.post('/login', userController.loginUser);

// POST route for logout
router.post('/logout', userController.logoutUser);

// PUT route to update a user by its 'id'
router.put('/:id', userController.updateUser);

// DELETE route to delete a user by its 'id'
router.delete('/:id', userController.deleteUser);

module.exports = router;
