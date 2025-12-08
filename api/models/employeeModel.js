const pool = require('../config/db');

async function findByUsername(username) {
  const [rows] = await pool.query('SELECT * FROM Employee WHERE username = ?', [username]);
  return rows[0];
}

async function createEmployee(name, mobile, username, password) {
  const [result] = await pool.query('INSERT INTO Employee (name, mobile, username, password) VALUES (?, ?, ?, ?)', [name, mobile, username, password]);
  return result.insertId;
}

async function getAllEmployees() {
  const [rows] = await pool.query('SELECT id, name, mobile, username FROM Employee');
  return rows;
}

async function getEmployeeById(id) {
  const [rows] = await pool.query('SELECT id, name, mobile, username FROM Employee WHERE id = ?', [id]);
  return rows[0];
}

module.exports = { findByUsername, createEmployee, getAllEmployees, getEmployeeById };
