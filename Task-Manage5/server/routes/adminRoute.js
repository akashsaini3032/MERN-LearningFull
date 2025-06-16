// const express = require("express");
// const route = express.Router();
// const AdminController= require("../controllers/AdminController"); 
// route.post("/logincheck", AdminController.adminLogin);
// route.post("/usercreation", AdminController.createUser);
// route.get("/showuserdata", AdminController.showUserData);
// route.post("/assigntask", AdminController.assignTask);

// module.exports=route;


const express = require("express");
const route = express.Router();
const AdminController = require("../controllers/AdminController");

// Admin login
route.post("/logincheck", AdminController.adminLogin);

// Create a new user
route.post("/usercreation", AdminController.createUser);

// Get all user data
route.get("/showuserdata", AdminController.showUserData);

// Assign a task to user
route.post("/assigntask", AdminController.assignTask);

// ✅ NEW: Get all submitted tasks by users
route.get("/submitted-tasks", AdminController.getSubmittedTasks);

module.exports = route;
