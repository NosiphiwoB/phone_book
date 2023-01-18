const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    contact_number: {
        type: String,
        require: true
    },
    contact_name: {
        type: String,
        require: true
    },
    contact_email: {
        type: String,
        require: true
    }
    }
)

module.exports = mongoose.model('post', postSchema)