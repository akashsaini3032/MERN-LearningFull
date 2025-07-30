

const mongoose = require("mongoose");
const empSchema = mongoose.Schema({
    empno : Number,
    name : String,
    designation : String,
    salary : Number,
    image : String
})

module.exports = mongoose.model("employee",empSchema)