// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Authentication routes (e.g., login)
router.post('/login', authController.login);

module.exports = router;
