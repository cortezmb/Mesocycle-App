const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //Require bcrypt
const db = require('../models'); //Require db from models directory
const bodyParser = require('body-parser');//parse the bodies of all incoming requests


// body-parser
// let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('./login', async (req, res) => {

    res.render('login');
})

router.post('/login', async (req, res) => {
    try {
        let email = req.body.email; // form
        let password = req.body.password; // form
        let results = await db.users.findAll({ where: {email: email}});
  
        // results is an array of objects from database 
        if (results.length > 0) {
            
          // test password             
            bcrypt.compare(password, results[0].pwHex, (err, response) => { //encrypt the re-entry of password and compare to original 
                
              // there is a match in passwords
                if (response) {
                  req.session.id = results[0].id //userid is an object on the session object
                    req.session.email = email;  // email is an object on the session object
                      res.redirect(`/user/${results[0].id}`);           
                }
                else {
                    console.log('no match found')
                  // no match found for passwords
                    // res.redirect('/404');
                }
            })
        }
  
    }
    catch {
        // res.status(211).redirect('/404');
        console.log("error")
    }
  
  })
module.exports = router;