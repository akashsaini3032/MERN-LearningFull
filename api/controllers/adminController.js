const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Admin = require('../models/adminModel');
const Employee = require('../models/employeeModel');
const { invalidateToken } = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '8h';

// Register admin
async function registerAdmin(req, res) {
  const { name, username, password } = req.body;
  if (!name || !username || !password) return res.status(400).json({ message: 'Missing fields' });

  const existing = await Admin.findByUsername(username);
  if (existing) return res.status(400).json({ message: 'Username already exists' });

  const id = await Admin.createAdmin(name, username, password);
  res.json({ message: 'Admin registered', id });
}

// Login admin
async function loginAdmin(req, res) {
  const { username, password } = req.body;
  const admin = await Admin.findByUsername(username);
  if (!admin || admin.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: admin.id, role: 'admin', username: admin.username }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
  res.json({ message: 'Login success', token, admin: { id: admin.id, name: admin.name, username: admin.username } });
}

// Logout admin
function logoutAdmin(req, res) {
  invalidateToken(req.token);
  res.json({ message: 'Logged out' });
}

// Get all employees
async function getAllEmployees(req, res) {
  const employees = await Employee.getAllEmployees();
  res.json({ employees });
}

// Get employee by ID
async function getEmployeeById(req, res) {
  const emp = await Employee.getEmployeeById(req.params.id);
  if (!emp) return res.status(404).json({ message: 'Employee not found' });
  res.json({ employee: emp });
}

module.exports = { registerAdmin, loginAdmin, logoutAdmin, getAllEmployees, getEmployeeById };
