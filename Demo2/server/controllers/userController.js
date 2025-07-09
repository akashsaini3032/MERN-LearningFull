// const UserModel = require("../models/userModel");

// const userSignUp=async(req, res)=>{
//     const { name, city, address, email, password, pincode} = req.body;
//     const User = await UserModel.create({
//       name:name,
//      city:city,
//      address:address,
//      pincode:pincode,
//      email:email,
//      password:password
//     })
//     res.status(200).send({msg:"User Succesfully Registered!!!"});
// }


// module.exports={
//     userSignUp
// }

// const UserModel = require("../models/userModel");
// const bcrypt = require("bcryptjs"); 

// const userSignUp = async (req, res) => {
//   try {
//     const { name, city, address, email, password, pincode } = req.body;

    
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const User = await UserModel.create({
//       name: name,
//       city: city,
//       address: address,
//       pincode: pincode,
//       email: email,
//       password: hashedPassword, 
//     });

//     res.status(200).send({ msg: "User Successfully Registered!!!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ msg: "Server Error" });
//   }
// };

// module.exports = {
//   userSignUp,
// };


const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// --- Register New User ---
const userSignUp = async (req, res) => {
  try {
    const { name, city, address, email, password, pincode } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      city,
      address,
      email,
      password: hashedPassword,
      pincode,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE || "3d",
    });

    res.status(200).send({
      msg: "User registered successfully!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// --- Login Existing User ---
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE || "3d",
    });

    res.status(200).send({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// --- Get User Profile (Protected Route) ---
const getUserProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }
    res.status(200).send({ user });
  } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getUserProfile, // ✅ Make sure this is exported
};
