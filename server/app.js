

const express = require('express');

const app = express(); //will take express library and run it

const session = require('express-session');

const bodyParser = require('body-parser');

const db = require('./models');

const PORT = 3000; 

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//req.body(fill everything that client is sending back to us)

app.use(require('./routes/api'));//post data for an exercise to database, lookup exercise data


//Start server
app.listen(PORT, () => {
    console.log('Listening on port 3000');
})