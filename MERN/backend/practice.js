




const mongoose=require("mongoose")

const stuSchema=mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports=mongoose.model("student",stuSchema)


cost mongoose=require("mongoose")

const stuSchema=mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})