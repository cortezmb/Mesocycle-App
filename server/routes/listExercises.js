const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory

//This CRUD operation will get and Read exercise data from database and display in dropdown menu
router.get('/listExercises', async (req, res) => {

        try {

                let inclinePushResults = await db.exercises.findAll({
                        
                        // include: [{
                        //         model: 'categories',
                        //         required: true
                        // }]
                        where: {category_id: 11}
                })
                console.log("I listed exercises")
                        // {
                        //         attributes: ['exercise']
                        // })

                // let chestIsolationResults =  await db.chest_isolation.findAll(
                //         {
                //                 attributes: ['exercise']
                //         })

                // let horizontalPushResults =  await db.horizontal_push.findAll(
                //         {
                //                 attributes: ['exercise']
                //         })

                // let rearOrSideDeltsResults =  await db.rear_or_side_delts.findAll(
                //         {
                //                 attributes: ['exercise']
                //         })

                // let horizontalPullResults =  await db.horizontal_pull.findAll(
                //         {
                //                 attributes: ['exercise']
                //         })
                
                        res.json(
                                {
                                        inclinePushResults: inclinePushResults
                                        // chestIsolationResults: chestIsolationResults,
                                        // horizontalPushResults: horizontalPushResults,
                                        // rearOrSideDeltsResults: rearOrSideDeltsResults,
                                        // horizontalPullResults: horizontalPullResults,
                                })
                
        } catch (error) {
                console.log('error inside of create catch', error);
        }
})

module.exports = router;