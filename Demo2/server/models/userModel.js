// const mongoose= require("mongoose");
// const userSchema= new mongoose.Schema({
//      name:String,
//      city:String,
//      address:String,
//      pincode:Number,
//      email:String,
//      password:String
// })
// module.exports = mongoose.model("user", userSchema);



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("User", userSchema);
