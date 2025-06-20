const express= require("express")
const route=express.Router()
const usrController=require("../Controllers/userController")
route.post("/usersave",usrController.userSave)

module.exports=route