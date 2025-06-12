
const express= require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
require('dotenv').config();
const Port =process.env.PORT || 8080;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DATABASE ESTABLISHED")
})
app.use(cors())

// const UserRoute=require("./routes/userRoute");
// app.use("/users", UserRoute);
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


// DAY 1

app.use((req,res,next)=>{
    console.log("App level Middleware run Every Time!!")
    next();
})

app.get("/home",(req,res,next)=>{
    console.log("This is Home Path middleware");
    next()
},(req,res)=>{
    console.log("Welcome To Home Page");
    res.send("Home Page")
})

app.get("/about",(req,res,next)=>{
    console.log("First about Midleware");
    next();
}, (req,res,next)=>{
    console.log("Second about Midleware");
    next();

},(req,res)=>{
    console.log("About Page");
    res.send("About OKKKK");
});


app.get("/contact",(req,res)=>{
    console.log("This is Contact Page");
    res.send("Welcome to Contact path")
})











app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
})










