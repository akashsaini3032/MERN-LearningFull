// const express = require("express");
// const route= express.Router();
// const UserController= require("../controllers/userController");


// route.post("/registration", UserController.userSignUp);



// module.exports=route;

const express = require("express");
const route = express.Router();
const UserController = require("../controllers/userController");
const authMiddleware  = require("../middleware/authMiddleware"); // ✅ Auth middleware

// Register new user
route.post("/registration", UserController.userSignUp);

// Login existing user
route.post("/login", UserController.userLogin);

// Protected route - profile
route.get("/profile", authMiddleware, UserController.getUserProfile);

module.exports = route;
