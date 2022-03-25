
// @desc  Get goals
// @route GET/api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals' })
}
// @desc  Add a goal
// @route POST/api/goals
// @access private
const addGoal = (req, res) => {

        if(!req.body.text){
            res.status(400)
            throw new Error('plese add a text field')
        }
    res.status(200).json({
        message: "Add goal"
    })
}
// @desc  Update a goal
// @route PUT/api/goals/:id
// @access private
const updateGoal = (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
}
// @desc  Delete a goal
// @route DELETE/api/goals/:id
// @access private
const deleteGoal = (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
}


module.exports= {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
}