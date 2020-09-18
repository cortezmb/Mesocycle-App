const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //Require bcrypt
const db = require('../models'); //Require db from models directory
const bodyParser = require('body-parser');//parse the bodies of all incoming requests

router.get('/protected', (req, res) => {

    res.send(`I'm a protected route`);
})

module.exports = router;