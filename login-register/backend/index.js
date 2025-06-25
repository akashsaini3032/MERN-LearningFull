const express= require("express")
const app = express();
const port= 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoute = require("./routes/userRoutes")
mongoose.connect("mongodb://127.0.0.1:27017/loginak").then(() => {
  console.log("database connected successfully");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/users", UserRoute);


app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})