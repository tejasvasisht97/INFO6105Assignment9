// controllers/userController.js
const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const result = await userService.editUser(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await userService.deleteUser(req.body.email);
    res.json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
};
