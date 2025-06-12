const AdminModel = require("../models/adminModel");
const UserModel= require("../models/userModel");
const userPassword= require("../middlewares/randomPassword");
var nodemailer = require('nodemailer');

const adminLogin=async(req, res)=>{
     const { adminid, password }= req.body;
 
     try {
        const admin= await AdminModel.findOne({"id":adminid}) 
        if (!admin)
         {
            res.status(401).send({msg:"Invalid User Id"})
         }
 
         if (admin.password!=password)
        {
            res.status(401).send({msg:"Invalid Credentials!"});
         }


         res.status(200).send({admin:admin, msg:"Login Succesfully!" });
     } catch (error) {
         console.log(error);
     }
}

const createUser=async(req, res)=>{
   const { name , email, designation}=req.body; 
   const UserPass=  userPassword();
  
   var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aksaini000369@gmail.com',
    pass: 'owtm whga enet kjsd'
  }
});


 var mailOptions = {
      from: 'rajmishtra3@gmail.com',
      to: email,
      subject: 'Sending Email by Admin',
      text:`Welcome :  ${name}!\n
           Your Password : ${UserPass} \n You can Login With This Password ` 
    };

     transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email Succ sent: ' + info.response);
        res.send(info.response);
      }
    });
}


module.exports={
    adminLogin,
    createUser
}