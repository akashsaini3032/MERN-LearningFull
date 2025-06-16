// const express = require("express");
// const app= express();
// require("dotenv").config();
// const AdminRoute= require("./routes/adminRoute");
// const UserRoute= require("./routes/userRoute");
// const bodyParser = require('body-parser')
// const cors= require("cors");
// const Dbcon= require("./config/dbconn");
// const Port = process.env.PORT || 8000;
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())
// // parse application/json
// app.use(bodyParser.json())
// app.use(cors());
// Dbcon();


// app.use("/admin", AdminRoute);
// app.use("/user", UserRoute);


// app.listen(Port, ()=>{
//     console.log(`Server run on Port ${Port}`);
// })



const express = require("express");
const app = express();
require("dotenv").config();

const AdminRoute = require("./routes/adminRoute");
const UserRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const Dbcon = require("./config/dbconn");
const Port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to DB
Dbcon();

// Routes
app.use("/admin", AdminRoute);
app.use("/user", UserRoute);

// Start Server
app.listen(Port, () => {
    console.log(`✅ Server running on port ${Port}`);
});
