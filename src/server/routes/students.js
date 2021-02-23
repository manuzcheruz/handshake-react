const express = require('express');
const router = express.Router();
const students = require('../models/students');

router.get('/', (req, res) => {
    res.send('listing students');
});

router.post('/create', (req, res) => {
    const student = new students(req.body);
    console.log(student);
    student.save()
        .then(data => {
            res.status(200).send('student saved successfully')
        })
        .catch(err => {
            res.status(400).send('unable to save student to the database');
        });
});

router.get('/update', (req, res) => {
    res.send('update student');
})

router.get('/delete', (req, res) => {
    res.send('deleting student');
});

module.exports = router;