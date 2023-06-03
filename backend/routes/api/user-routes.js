const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');


// Routes for /api/users

// GET route for all users
router.get('/', async (req, res) => await userController.getAllUsers(req, res));

// GET route for a single user by its 'id'
router.get('/:id', async (req, res) => await userController.getUserById(req, res));

// POST route for a new user
router.post('/', async (req, res) => await userController.createUser(req, res));

// POST route for login
router.post('/login', async (req, res) => await userController.loginUser(req, res));

// POST route for logout
router.post('/logout', async (req, res) => await userController.logoutUser(req, res));

// PUT route to update a user by its 'id'
router.put('/:id', async (req, res) => await userController.updateUser(req, res));

// DELETE route to delete a user by its 'id'
router.delete('/:id', async (req, res) => await userController.deleteUser(req, res));

module.exports = router;
