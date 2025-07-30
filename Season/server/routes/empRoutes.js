

const express = require('express');
const route = express.Router();
const empController = require("../controller/empController")
 


route.get("/home",empController.homePage)
route.get("/display",empController.datadisplay)
route.get("/info",(req,res)=>{
    // console.log(req.session)
    console.log(req.session.id)  // req.sessionID and req.session.id is both same 
    console.log(req.session.cookie.maxAge)
    console.log(req.session.cookie)
    console.log(req.session.cookie.originalMaxAge)

     res.send("OKK")
})
route.get("/des",(req,res)=>{
    req.session.destroy()
    res.send("session destroyed")
})



module.exports = route

// Middleware in Node.js (Express.js) is a function that runs between the request from the client and the response from the server. It is used to modify, validate, or process requests before they reach the final route handler.