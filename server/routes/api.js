const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory

//This CRUD operation will get and Read exercise data from database and display in dropdown menu
router.get('/api', async (req, res) => {

        try {

                db.incline_push.findAll(
                        {
                                attributes: ['exercise']
                        })

                        .then(results => {
                                res.json(results)
                        })

        } catch (error) {
                console.log('error inside of create catch', error);
        }

        //         res.send([{
        //                 id: 1,
        //                 username: 'Michael'
        //         },
        //         {
        //                 id: 2,
        //                 username: 'John'
        //         },
        //         {
        //                 id: 3,
        //                 username: 'Dan'
        //         }
        // ]);
})

module.exports = router;