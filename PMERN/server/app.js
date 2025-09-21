const express= require("express")
const app=express()
const port =8000
const mongoose=require("mongoose")
const stuRoute=require("./route/stuRoutes")
const cors=require("cors")
const bodyParser=require("body-parser")
mongoose.connect("mongodb://127.0.0.1:27017/fullStackDB").then(()=>{
    console.log("DATABASE ESTABLISHED")
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use("/students",stuRoute)
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})