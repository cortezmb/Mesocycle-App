const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory
const bodyParser = require('body-parser');//parse the bodies of all incoming requests
const auth = require('../auth/auth'); //function to protect the route
const { Op } = require("sequelize");

//This CRUD operation will create attributes in database table from dropdown menu and input form
router.post('/createExercises', async (req, res) => {

    try {
            
            
        let exercise = req.body.exercise;
        let weight = req.body.weight;
        let user_id = req.body.user_id;
        let exercise_id = req.body.exercise_id;
        let category_id = req.body.category_id
        // let results = await db.users.findAll({ where: {email: req.session.email}});

        console.log(` exercise: ${exercise} weight: ${weight} exercise_id: ${exercise_id} category_id: ${category_id}`);

        // if (results.length > 0) {

            let data = await db.data.create({

                exercise: exercise,
                weight: weight,
                user_id: user_id,
                // user_id: results[0].id,//first index of findall where email matches
                exercise_id: exercise_id,
                category_id: category_id
        })

        res.json(data);
        // }
           
    } catch (error) {
            console.log('error inside of try catch', error)
    }
})

//This CRUD operation will read the data that was created in the database
router.get('/createExercises/:id', async (req, res) => {

    try {

        let user_id = req.params.id

        let inclinePushResults = await db.data.findAll({
            limit: 1,
            where: {
                user_id: user_id,
                category_id: 14
            },
            order:[['createdAt', 'DESC']],
        })

        let chestIsolationResults =  await db.data.findAll({
               
            where: {
                user_id: user_id,       
                category_id: 5
            },
            order:[['createdAt', 'DESC']],
        })

        let horizontalPushResults =  await db.data.findAll(
                {
                    where: {
                        user_id: user_id,
                        category_id: 11
                    },
                    order:[['createdAt', 'DESC']],
                })

        let rearOrSideDeltsResults =  await db.data.findAll(
                {
                    where: {
                        user_id: user_id,
                        category_id: 17
                    },
                    order:[['createdAt', 'DESC']],
                })

        let horizontalPullResults =  await db.data.findAll(
                {
                    where: {
                        user_id: user_id,
                        category_id: 10
                    },
                    order:[['createdAt', 'DESC']],
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