const express = require("express");
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose= require("mongoose");
const UserRoute = require("./routes/userRoute");

require('dotenv').config();
//const UserRoute = require("./routes/userRoute");

const Port=process.env.PORT || 8000;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected Succefully!")
})
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())

app.use("/user", UserRoute);

app.listen(Port, ()=>{
    console.log(`Server Run On Port ${Port}`);
})