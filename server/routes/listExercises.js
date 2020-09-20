const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory

//This CRUD operation will get and Read exercise data from database and display in dropdown menu
router.get('/listExercises', async (req, res) => {

        try {

                let inclinePushResults = await db.exercises.findAll({
                        
                        where: {category_id: 14}
                })

                let chestIsolationResults =  await db.exercises.findAll({
                       
                        where: {category_id: 5}
                })

                let horizontalPushResults =  await db.exercises.findAll(
                        {
                                where: {category_id: 11}
                        })

                let rearOrSideDeltsResults =  await db.exercises.findAll(
                        {
                                where: {category_id: 17}
                        })

                let horizontalPullResults =  await db.exercises.findAll(
                        {
                                where: {category_id: 10}
                        })
                
                        res.json(
                                {
                                        inclinePushResults: inclinePushResults,
                                        chestIsolationResults: chestIsolationResults,
                                        horizontalPushResults: horizontalPushResults,
                                        rearOrSideDeltsResults: rearOrSideDeltsResults,
                                        horizontalPullResults: horizontalPullResults
                                })
                
        } catch (error) {
                console.log('error inside of create catch', error);
        }
})

module.exports = router;