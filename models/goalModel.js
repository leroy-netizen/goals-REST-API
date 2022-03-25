const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true,  //createdAt || updatedAt
}
)

module.exports = mongoose.model('Goal', goalSchema)