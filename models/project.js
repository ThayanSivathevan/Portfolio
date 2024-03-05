const mongoose = require('mongoose');
require('mongoose-type-url');
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    starred: {
        type: Boolean,
        default: false
    }, 
    github: {
        type: mongoose.SchemaTypes.Url,
        required: true
    },
    thumbnail: {
        type: mongoose.SchemaTypes.Url,
        required: true
    },
    link: {
        type: mongoose.SchemaTypes.Url,
        required: true
    }
}, { timestamps: true });
mongoose.model("Project", projectSchema);