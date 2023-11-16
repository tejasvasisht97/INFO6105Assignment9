// services/userService.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const createUser = async ({ fullName, email, password }) => {
  try {
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    return 'User created successfully!';
  } catch (error) {
    throw error;
  }
};

const editUser = async ({ email, fullName, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    if (fullName) {
      user.fullName = fullName;
    }

    if (password) {
      user.password = password;
    }

    await user.save();
    return 'User details updated successfully!';
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (email) => {
  try {
    const result = await User.findOneAndDelete({ email });

    if (!result) {
      throw new Error('User not found');
    }

    return 'User deleted successfully!';
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find({}, 'fullName email password');
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
};

