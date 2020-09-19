const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory
const bodyParser = require('body-parser');//parse the bodies of all incoming requests
const auth = require('../auth/auth'); //function to protect the route

//This CRUD operation will create attributes in database table from dropdown menu and input form
router.post('/createExercises', async (req, res) => {

    try {
            
            
        let exercise = req.body.exercise;
        let weight = req.body.weight;
        // let user_id = req.body.user_id;
        let exercise_id = req.body.exercise_id;
        let category_id = req.body.category_id
        let results = await db.users.findAll({ where: {email: req.session.email}});

        console.log(` exercise: ${exercise} weight: ${weight} exercise_id: ${exercise_id} category_id: ${category_id}`);

        if (results.length > 0) {

            let data = await db.data.create({

                exercise: exercise,
                weight: weight,
                user_id: results[0].id,//first index of findall where email matches
                exercise_id: exercise_id,
                category_id: category_id
        })

        res.json(data);
        }
           
    } catch (error) {
            console.log('error inside of try catch', error)
    }
})

//This CRUD operation will read the data that was created in the data base
router.get('/createExercises/:id', async (req, res) => {

    try {

        let user_id = req.params.id

        console.log(user)

        let inclinePushResults = await db.data.findAll({
                
            where: {
                user_id: user_id,
                exercise_id: 106,
                category_id: 14
            }
        })

        let chestIsolationResults =  await db.data.findAll({
               
            where: {
                user_id: user,
                exercise_id: 43,
                category_id: 5
            }
        })

        let horizontalPushResults =  await db.data.findAll(
                {
                    where: {
                        user_id: user,
                        exercise_id: 79,
                        category_id: 11
                    }
                })

        let rearOrSideDeltsResults =  await db.data.findAll(
                {
                    where: {
                        user_id: user,
                        exercise_id: 129,
                        category_id: 17
                    }
                })

        let horizontalPullResults =  await db.data.findAll(
                {
                    where: {
                        user_id: user,
                        exercise_id: 78,
                        category_id: 10
                    }
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