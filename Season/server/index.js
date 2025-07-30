
// const express = require("express")
// const app = express()
// const empRoute = require("./routes/empRoutes");
// const cors = require("cors");
// const bodyParser = require("body-parser")
// const session = require("express-session")
// const mongoose = require("mongoose");
// require("dotenv").config();
// const path = require("path")
// // app.use(cors())
// const Port = process.env.PORT || 9000
// // require("dotenv").config()



// // errors which are coming in sharing the data so it wont occur and it allows you to access the data from different domains/ API
// // Imagine yo8u have to jump fr0om one api to another for fetching data from backend/mongoose we have to use cors() function which is used ton allow cross-origin resource sharing

// app.use(cors()); 
// // app.use(session({secret:"aaradhya",resave:true,saveUninitialized:true}));
// app.use(session({name:"akash",secret:"Akash123",resave:false,saveUninitialized:true,cookie:{maxAge:200000}})) // maxAge isb the time of session age

// app.use(bodyParser.json());
// // mongoose.connect(process.env.DBCON).then(()=>{
// //    console.log("Succefully connected Database")
// // })



// // Parse incoming requests with urlencoded payloads
// app.use(bodyParser.urlencoded({
//      extended: true  
//     }));





// app.use("/employee",empRoute);
// // const port = process.env.PORT





// app.listen(Port,()=>{
//     console.log(`server is running on port ${Port}`)
// })


const http = require('http');

const server = http.createServer((req, res) => {
    const cookies = getCookies(req);

    if (req.url === '/set') {
        // Set multiple cookies: name, age, course
        res.writeHead(200, {
            'Set-Cookie': [
                'name=akash; HttpOnly; Path=/',
                'age=21; HttpOnly; Path=/',
                'course=bcom; HttpOnly; Path=/'
            ],
            'Content-Type': 'text/plain'
        });
        res.end('Cookies set: name, age, course');
    } 
    else if (req.url === '/get') {
        // Display the cookies sent by the browser
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Your Cookies: ${JSON.stringify(cookies)}`);
    } 
    else if (req.url === '/delete') {
        // Delete the cookies by setting expiry to the past
        res.writeHead(200, {
            'Set-Cookie': [
                'name=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
                'age=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
                'course=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
            ],
            'Content-Type': 'text/plain'
        });
        res.end('Cookies deleted');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});


function getCookies(req) {
    const cookies = {};
    const rawCookies = req.headers.cookie;
    if (rawCookies) {
        rawCookies.split(';').forEach(cookie => {
            const [key, value] = cookie.split('=');
            cookies[key.trim()] = decodeURIComponent(value || '');
        });
    }
    return cookies;
}

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
