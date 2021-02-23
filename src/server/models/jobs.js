const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    experience: {
        type: String,
        required: true
    },
    workLevel: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    jobOverview: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    slots: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Jobs', JobSchema);