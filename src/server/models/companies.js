const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Companies', CompanySchema);