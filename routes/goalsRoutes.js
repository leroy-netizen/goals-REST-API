const express = require('express')
const router =  express.Router()
const { getGoals, addGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

//routes start here


// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Get goals"
//     })
// })


router.route('/').get(getGoals).post(addGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)


router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)


module.exports = router
