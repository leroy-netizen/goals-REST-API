const express = require('express')
const router =  express.Router()
const { getGoals, addGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

//routes start here


router.get('/', getGoals)

// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Get goals"
//     })
// })


router.post('/', addGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)


module.exports = router
