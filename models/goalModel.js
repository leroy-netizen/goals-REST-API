const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    
user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
},
    
    text: {
        type: String,
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true,  //createdAt || updatedAt
}
)

module.exports = mongoose.model('Goal', goalSchema)