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

const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs"); // ✅ bcrypt import

const userSignUp = async (req, res) => {
  try {
    const { name, city, address, email, password, pincode } = req.body;

    // ✅ Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const User = await UserModel.create({
      name: name,
      city: city,
      address: address,
      pincode: pincode,
      email: email,
      password: hashedPassword, // ✅ Store hashed password
    });

    res.status(200).send({ msg: "User Successfully Registered!!!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

module.exports = {
  userSignUp,
};
