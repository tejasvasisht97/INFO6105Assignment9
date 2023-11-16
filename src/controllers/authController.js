// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error('Invalid email or password');
    }

    // If the email and password are valid, you can generate a JWT token here
    // For simplicity, let's send a success message for now
    res.json({ message: 'Login successful!' });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = {
  login,
};

