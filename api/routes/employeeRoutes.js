const express = require('express');
const router = express.Router();
const empCtrl = require('../controllers/employeeController');
const { authMiddleware } = require('../middleware/auth');

// Public
router.post('/register', empCtrl.registerEmployee);
router.post('/login', empCtrl.loginEmployee);

// Protected
router.post('/logout', authMiddleware, empCtrl.logoutEmployee);
router.get('/me', authMiddleware, empCtrl.getMyProfile);

module.exports = router;
