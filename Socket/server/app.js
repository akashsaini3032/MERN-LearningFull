const express = require("express");
const app=express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const bodyParser = require('body-parser')
const mongoose= require("mongoose");
require('dotenv').config();
//const UserRoute = require("./routes/userRoute");
const Port=process.env.PORT || 8080;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected Succefully!")
})
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React app
    methods: ["GET", "POST"]
  }
});

