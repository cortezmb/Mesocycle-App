
const express = require('express');
const router = express.Router();


//Will capture inbound data and add to database
router.get('/api', (req, res) => {

                res.send([{
                        id: 1,
                        username: 'Michael'
                },
                {
                        id: 2,
                        username: 'John'
                },
                {
                        id: 3,
                        username: 'Dan'
                }
        ]);
})

module.exports = router;