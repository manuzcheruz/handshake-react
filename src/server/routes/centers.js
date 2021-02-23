const express = require('express');
const router = express.Router();
const centers = require('../models/centers');

router.get('/', (req, res) => {
    res.send('listing center');
});

router.post('/create', (req, res) => {
    const center = new centers(req.body);
    console.log(center);
    center.save()
        .then(data => {
            res.status(200).send('center saved successfully')
        })
        .catch(err => {
            res.status(400).send('unable to save center to the database');
        });
});

router.get('/update', (req, res) => {
    res.send('update center');
})

router.get('/delete', (req, res) => {
    res.send('deleting center');
});

module.exports = router;