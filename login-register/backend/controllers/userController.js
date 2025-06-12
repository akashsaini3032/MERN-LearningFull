const userModel = require("../models/userModel");
const UserModel= require("../models/userModel")

const registerdata=async(req,res)=>{
    const {name,contact,email,password}=req.body;
    try {
      const user = await userModel.create({
        name:name,
        contact:contact,
        email:email,
        password:password,
      });
      res.status(200).send("user succesfully Created!!!")
    } catch (error) {
      console.log(error)
    }
}
module.exports = {
  registerdata
};