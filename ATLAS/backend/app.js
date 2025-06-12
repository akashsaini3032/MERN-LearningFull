// const express= require("express")
// const app=express()
// const port =8000
// const mongoose=require("mongoose")
// const stuRoute=require("./route/stuRoutes")
// const cors=require("cors")
// const bodyParser=require("body-parser")
// mongoose.connect("mongodb+srv://akashsaini3032:<>@merncluster.lcae2zg.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster").then(()=>{
//     console.log("DATABASE ESTABLISHED")
// })
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
// app.use("/students",stuRoute)
// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })



const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const stuRoute = require("./route/stuRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://akashsainira:c44DLTpYveUxeGYD@cluster0.mgulwnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DATABASE ESTABLISHED");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err.message);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/students", stuRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});






