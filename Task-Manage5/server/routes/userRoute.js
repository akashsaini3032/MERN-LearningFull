// const express = require("express");
// const route = express.Router();
// const UserController= require("../controllers/UserController");

// route.post("/userlogin", UserController.loginCheck);
// route.get("/mytask", UserController.myTaskList);

// module.exports=route;



const express = require("express");
const route = express.Router();
const UserController = require("../controllers/UserController");

// User login route
route.post("/userlogin", UserController.loginCheck);

// Get task list for a user
route.get("/mytask", UserController.myTaskList);

// ✅ New: Submit task with number of days to complete
route.patch("/update-days/:id", UserController.submitTaskWithCompday);

module.exports = route;
