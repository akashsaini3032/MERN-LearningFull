// module.exports = require('./lib/cloudinary');

// server/cloudinary.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dlyyumwhi',       // <-- yahan apna cloud name daalo
  api_key: '993751287236636',             // <-- yahan apna API key daalo
  api_secret: 'u0nKRbGrGnSsMCXfwF5GTOsf6nE',       // <-- yahan apna API secret daalo
});

module.exports = cloudinary;
