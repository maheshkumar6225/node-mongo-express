let mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userSchema;