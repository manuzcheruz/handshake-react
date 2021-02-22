const express = require('express');
const router = express.Router();
const students = require('../models/students');

router.get('/', (req, res) => {
    res.send('still here');
})

router.post('/', (req, res) => {
    const s = new students(req.body);
    console.log(s);
    s.save()
        .then(data => {
            res.status(200).send('success')
        })
        .catch(err => {
            res.status(400).send('unable to save to the database');
        })
})

module.exports = router;