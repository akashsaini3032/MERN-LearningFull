const mongoose=require("mongoose")

const stuSchema=mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number,
    image:String

})

module.exports=mongoose.model("student",stuSchema)