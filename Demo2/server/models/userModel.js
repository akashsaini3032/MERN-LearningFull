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

const userSchema = new mongoose.Schema({
    name: String,
    city: String,
    address: String,
    pincode: Number,
    email: String,
    password: String,

    // ✅ Google login extra fields (Non-breaking changes)
    fromGoogle: {
        type: Boolean,
        default: false
    },
    profilePic: {
        type: String
    }
});

module.exports = mongoose.model("user", userSchema);
