const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory


//This CRUD operation will create attributes in database table from dropdown menu and input form
router.post('/createExercises', async (req, res) => {

    try {
            
            
            let exercise = req.body.exercise;
            let weight = req.body.weight;
            let user_id = req.body.user_id;
            let exercise_id = req.body.exercise_id;
            let category_id = req.body.category_id
            // // let results = await db.user.findAll({ where: {email: req.session.email}});

            console.log(` exercise: ${exercise} weight: ${weight} exercise_id: ${exercise_id} category_id: ${category_id}`);

            let data = await db.data.create({

                    exercise: exercise,
                    weight: weight,
                    user_id: user_id,
                    exercise_id: exercise_id,
                    category_id: category_id
            })

            res.json(data);
            
    } catch (error) {
            console.log('error inside of try catch', error)
    }
})

//This CRUD operation will read the data that was created in the data base
router.get('/createExercises', async (req, res) => {
try {

    
    let allData = await db.data.findAll({

        where: {
            user_id: 1,
            exercise_id: 3,
            category_id: 14
        }
    })
    res.json(allData)

} catch (error) {
    console.log('error inside of try catch', error)
}
    
})

module.exports = router;