// const UserModel= require("../models/userModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const userRegistration=async(req, res)=>{
//     const {  name,   email,  password } = req.body;
//      const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const User = await UserModel.create({
//          name,
//          email,
//          password:hashedPassword
//     })
//     res.send("USer Registerd!!!");
// }
// const userLogin=async(req, res)=>{ 
//       const {email, password} = req.body;
//       try {
//             const User = await UserModel.findOne({email:email});
//             if (!User)
//             {
//                 res.status(404).send({msg:"Email not found!"});
//             }
//          const passwordMatch = await bcrypt.compare(password, User.password);
//          if (!passwordMatch)
//          {
//             res.status(404).send({msg:"Invalid password!"});
//          }
         
//          const Token= jwt.sign({id:User._id}, process.env.JWTSECRETE,  { expiresIn: '7 days' } )
        
//          res.status(200).send({Token:Token});
//       } catch (error) {
//          console.log(error);
//       }
    
// }
// const userAuthentication=async(req, res)=>{
//      const token = req.header("auth-token");
//      const decoded = jwt.verify(token, process.env.JWTSECRETE);
//           console.log(decoded);
//         const User = await UserModel.findById(decoded.id).select("-password");
//         console.log(User);
//         res.status(200).send(User)
// }

// module.exports={
//     userRegistration,
//     userLogin,
//     userAuthentication
// }