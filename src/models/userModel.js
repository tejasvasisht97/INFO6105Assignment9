const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[A-Za-z\s]+$/.test(value),
      message: 'Invalid full name format. Only letters and spaces allowed.',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /^\S+@\S+\.\S+$/.test(value),
      message: 'Invalid email address format.',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value),
      message:
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
