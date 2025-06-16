// const mongoose = require("mongoose");
// const taskSchema= new mongoose.Schema({
//     title:String,
//     description:String,
//     compday:Number,
//     userid:{type: mongoose.Types.ObjectId, ref: "user"}
// })

// module.exports = mongoose.model("task", taskSchema);



const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    compday: Number,
    userid: { type: mongoose.Types.ObjectId, ref: "user" },
    submitted: { type: Boolean, default: false } // ✅ NEW FIELD
});

module.exports = mongoose.model("task", taskSchema);
