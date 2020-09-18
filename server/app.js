

const express = require('express');

const app = express(); //will take express library and run it

const session = require('express-session');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const db = require('./models');

const PORT = 3001; 

//middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());//req.body(fill everything that client is sending back to us)

app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 14 * 24 * 60 * 1000}
}));

app.use(require('./routes/login'));

app.use(require('./routes/register'));

app.use(require('./routes/protected'));

app.use(require('./routes/404')); // error page

//read exercises for dropdown menu and create exercises from dropdown menu
app.use(require('./routes/DayOneDropdown'));//pull data for an exercise from database, lookup exercise data

//create weight data from input and read weight data from table
app.use(require('./routes/DayOneInput'));//post data for an exercise to database, lookup exercise data


//Start server
app.listen(PORT, () => {
    console.log('Listening on port 3001');
})