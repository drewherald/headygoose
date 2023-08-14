const mongoose = require('mongoose');
const slugify = require('slugify');

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
    },
    slug:{
        type: String,
        required: true
    }
});

articleSchema.pre('validate', function(next){
    if(this.song){
        this.slug = slugify(this.song, {lower:true, strict:true});
        next();
    }
});

module.exports = mongoose.model('Article', articleSchema);