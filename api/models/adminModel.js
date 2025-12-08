const pool = require('../config/db');

async function findByUsername(username) {
  const [rows] = await pool.query('SELECT * FROM Admin WHERE username = ?', [username]);
  return rows[0];
}

async function createAdmin(name, username, password) {
  const [result] = await pool.query('INSERT INTO Admin (name, username, password) VALUES (?, ?, ?)', [name, username, password]);
  return result.insertId;
}

module.exports = { findByUsername, createAdmin };
