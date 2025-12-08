const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');
const { authMiddleware, requireAdmin } = require('../middleware/auth');

// Public
router.post('/register', adminCtrl.registerAdmin);
router.post('/login', adminCtrl.loginAdmin);

// Protected
router.post('/logout', authMiddleware, requireAdmin, adminCtrl.logoutAdmin);
router.get('/employees', authMiddleware, requireAdmin, adminCtrl.getAllEmployees);
router.get('/employees/:id', authMiddleware, requireAdmin, adminCtrl.getEmployeeById);

module.exports = router;
