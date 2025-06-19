const express= require("express")
const route=express.Router()
const usrController=require("../Controllers/userController")
route.post("/signup",usrController.usrSignup)
route.post("/login",usrController.usrLogin)
route.post("/auth",usrController.usrAuthentication)

module.exports=route
