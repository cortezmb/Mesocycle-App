const express = require('express');
const router = express.Router();
const db = require('../models'); //Require db from models directory
const bodyParser = require('body-parser');//parse the bodies of all incoming requests

router.put('./updateExercises/:id', async (req, res) => {

try {
    let user_id = req.params.id
    let exercise = req.body.exercise;
    let weight = req.body.weight;
    let exercise_id = req.body.exercise_id;
    let category_id = req.body.category_id;
    let results = await db.users.findAll({ where: {email: req.session.email}});

    if (results.length > 0) {

        let data = await db.data.update(
            {
                exercise: exercise,
                weight: weight,
                exercise_id: exercise_id,
                category_id: category_id
            },
            {
                where: {
                    user_id: results[0].id
                }
            }
        )
        res.json(data)
    }

} catch (error) {
    console.log("this is an error message", error)
}
})