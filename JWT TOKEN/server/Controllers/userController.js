const userModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")
const usrSignup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(password);
  const salt = await bcrypt.genSalt(10);
  const hashedPsw = await bcrypt.hash(password, salt);
  const usr = await userModel.create({
    name,
    email,
    password: hashedPsw,
  });
  res.send("User Registered Successfully");
};

const usrLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usr = await userModel.findOne({ email: email });
    if (!usr) {
      res.status(404).send({ msg: "Email not found!!!" });
    }
    const pswMatch = await bcrypt.compare(password, usr.password);
    if (!pswMatch) {
      res.status(404).send({ msg: "Invalid Password !!!!" });
    }
    const Token = jwt.sign({ id: usr._id }, process.env.JWTSECRETE, {
      expiresIn: "7 Days",
    });
    res.status(200).send({ Token: Token });
  } catch (err) {
    console.log(err);
  }
};

const usrAuthentication=async(req,res)=>{
const token= req.header("auth-token")
const decoded= jwt.verify(token, process.env.JWTSECRETE)
console.log(decoded)
const usr= await userModel.findById(decoded.id).select("-password")
console.log(usr)
res.status(200).send(usr)
}

module.exports = {
  usrSignup,
  usrLogin,
  usrAuthentication
};
