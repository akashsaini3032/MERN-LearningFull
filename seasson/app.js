const express = require('express');
const session = require('express-session');



const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));


app.get('/setname', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('Name is required');
    }
    req.session.username = name;
    res.send(`Name "${name}" saved in session.`);
});


app.get('/getname', (req, res) => {
    if (req.session.username) {
        res.send(`Name from session: ${req.session.username}`);
    } else {
        res.send('No name set in session yet.');
    }
});


app.get('/hello', (req, res) => {
    if (req.session.username) {
        res.send(`Hello, ${req.session.username}!`);
    } else {
        res.send('Hello, guest! Set your name first.');
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
