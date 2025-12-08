const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Employee = require('../models/employeeModel');
const { invalidateToken } = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '23h';

// Register employee
async function registerEmployee(req, res) {
  const { name, mobile, username, password } = req.body;
  if (!name || !username || !password) return res.status(400).json({ message: 'Missing fields' });

  const existing = await Employee.findByUsername(username);
  if (existing) return res.status(400).json({ message: 'Username already exists' });

  const id = await Employee.createEmployee(name, mobile, username, password);
  res.json({ message: 'Employee registered', id });
}

// Login employee
async function loginEmployee(req, res) {
  const { username, password } = req.body;
  const emp = await Employee.findByUsername(username);
  if (!emp || emp.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: emp.id, role: 'employee', username: emp.username }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
  res.json({ message: 'Login success', token, employee: { id: emp.id, name: emp.name, mobile: emp.mobile, username: emp.username } });
}

// Logout employee
function logoutEmployee(req, res) {
  invalidateToken(req.token);
  res.json({ message: 'Logged out' });
}

// Get own profile
async function getMyProfile(req, res) {
  const emp = await Employee.getEmployeeById(req.user.id);
  if (!emp) return res.status(404).json({ message: 'Not found' });
  res.json({ employee: emp });
}

module.exports = { registerEmployee, loginEmployee, logoutEmployee, getMyProfile };
