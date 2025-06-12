const express = require("express");
const route = express.Router();
const AdminController= require("../controllers/AdminController"); 
route.post("/logincheck", AdminController.adminLogin);

module.exports=route;