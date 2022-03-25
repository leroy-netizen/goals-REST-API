const asyncHandler = require('express-async-handler')


// @desc  Get goals
// @route GET/api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals' })
})
// @desc  Add a goal
// @route POST/api/goals
// @access private
const addGoal = asyncHandler (async (req, res) => {

        if(!req.body.text){
            res.status(400)
            throw new Error('plese add a text field')
        }
    res.status(200).json({
        message: "Add goal"
    })
})
// @desc  Update a goal
// @route PUT/api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})
// @desc  Delete a goal
// @route DELETE/api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
}
)

module.exports= {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
}