
const express=require("express")

const app=express()

const port=8000

const mongoose=require("mongoose")
const stuRoute=require("./route/stuRoutes")

const cors=require("cors")

const bodyParser=require("body-parser")

mongoose.connect("").then(()=>{
    console.log("atabase ")
})

app.use(cors())
