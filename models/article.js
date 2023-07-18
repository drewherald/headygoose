const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    song:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    city:{
        type: String
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('Article', articleSchema);