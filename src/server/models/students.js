const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        required: true
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Students', studentSchema);