const express = require('express')
const router =  express.Router()
const { getGoals, addGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

//routes start here


// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Get goals"
//     })
// })


router.route('/').get(protect, getGoals).post(protect, addGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)


router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)


module.exports = router

