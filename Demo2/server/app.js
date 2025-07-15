const express = require("express");
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose= require("mongoose");





const googleAuthRoute = require('./routes/googleAuthRoute');
const googleAuthRedirectRoute = require('./routes/googleAuthRedirectRoute');





require('dotenv').config();

const paymentRoute= require("./routes/payment");
const AdminRoute = require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");

const Port=process.env.PORT || 8080;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected Succefully!")
})
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())


app.use("/admin", AdminRoute);
app.use("/product", ProductRoute);
app.use("/user", UserRoute);
app.use("/api/payment", paymentRoute);





app.use('/api/auth', googleAuthRoute);
app.use('/api/auth', googleAuthRedirectRoute);



app.listen(Port, ()=>{
    console.log(`Server Run On Port ${Port}`);
})