// const UserModel = require("../models/userModel");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');


// const userSignUp=async(req, res)=>{
//     const { name, city, address, email, password, pincode} = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const User = await UserModel.create({
//       name:name,
//      city:city,
//      address:address,
//      pincode:pincode,
//      email:email,
//      password:hashedPassword
//     })
//     res.status(200).send({msg:"User Succesfully Registered!!!"});
// }

// const userLogin=async(req, res)=>{
//     const user = await UserModel.findOne({ email: req.body.email });
//     try{
//         const match = await bcrypt.compare(req.body.password, user.password);

//         const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
//         if(match){
//             res.json({ accessToken: accessToken });
//         } else {
//             res.json({ message: "Invalid Credentials" });
//         }
//     } catch(e) {
//         console.log(e)
//     }
// }


// const userAuth=async(req, res)=>{
//     const token = req.header("x-auth-token");
//      if (!token) return res.json(false);
//   const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//   console.log(verified);

//   if (!verified) return res.json(false);
//   const user = await UserModel.findById(verified._id);

//   if (!user) return res.json(false);

//     return res.json(user);
// }

// const getUser=async(req, res)=>{
//      const User= await UserModel.findById(req.query.userid);
//      console.log(User);
//      res.send(User);
// }

// module.exports={
//     userSignUp,
//     userLogin,
//     userAuth,
//     getUser
// }




const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// -----------------------------
// User Registration
// -----------------------------
const userSignUp = async (req, res) => {
  try {
    const { name, city, address, email, password, pincode } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists with this email." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name,
      city,
      address,
      pincode,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ msg: "User successfully registered!" });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ msg: "Server error during registration." });
  }
};

// -----------------------------
// User Login
// -----------------------------
const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ msg: "Invalid email or password." });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Invalid email or password." });

    const accessToken = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ accessToken });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ msg: "Server error during login." });
  }
};

// -----------------------------
// User Authentication Middleware
// -----------------------------
const userAuth = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "No token, authorization denied." });

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified) return res.status(401).json({ msg: "Token verification failed." });

    const user = await UserModel.findById(verified._id);
    if (!user) return res.status(401).json({ msg: "User not found." });

    res.json(user);
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ msg: "Invalid token." });
  }
};

// -----------------------------
// Get User by ID (Query Param)
// -----------------------------
const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.query.userid);
    if (!user) return res.status(404).json({ msg: "User not found." });

    res.json(user);
  } catch (err) {
    console.error("Get user error:", err.message);
    res.status(500).json({ msg: "Error retrieving user." });
  }
};

module.exports = {
  userSignUp,
  userLogin,
  userAuth,
  getUser,
};
