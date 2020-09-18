const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory


//This CRUD operation will create attributes in database table from dropdown menu and input form
router.post('/DayOneInput', async (req, res) => {

    try {
            
            // let user = req.body.user;
            let exercise = req.body.exercise;
            let weight = req.body.weight
            // // let results = await db.users.findAll({ where: {email: req.session.email}});

            console.log(` exercise: ${exercise} weight: ${weight}`);

            let dayOneExercises = await db.day_one_exercises.create({

                    // user: user,
                    exercise: exercise,
                    weight: weight
            })

            res.json(dayOneExercises);
            
    } catch (error) {
            console.log('error inside of try catch', error)
    }
})

//This CRUD operation will read the data that was created in the data base
router.get('/DayOneInput', async (req, res) => {
try {

    
    let allDayOneExercises = await db.day_one_exercises.findAll({
        
        // if 

        where: {
            user: 1
        }
    })
    res.json(allDayOneExercises)

} catch (error) {
    console.log('error inside of try catch', error)
}
    
})

module.exports = router;