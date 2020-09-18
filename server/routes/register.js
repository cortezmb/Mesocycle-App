const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //Require bcrypt
const db = require('../models'); //Require db from models directory
const bodyParser = require('body-parser');//parse the bodies of all incoming requests

// body-parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })

// database link to express

//render to register.ejs
router.get('/register', (req, res) => {

    res.render('register')
})

//Capture username, password and email from registration.ejs. 
router.post('/register', urlencodedParser, (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let email = req.body.email;

    let passwordEncrypted = bcrypt.hashSync(password, 8); //encrypt password

    db.users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        pwHex: passwordEncrypted
    })
    .then(user => {
        res.redirect('/login'); //if password matches will redirect to login page
    })
    .catch(error => {
        res.redirect('/404'); //will redirect to 404 error page
    })
})


module.exports = router;