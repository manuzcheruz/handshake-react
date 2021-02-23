const express = require('express');
const router = express.Router();
const jobs = require('../models/jobs');

// router.get('/', (req, res) => {
//     res.send('still here');
// })

router.post('/create-job', (req, res) => {
    const job = new jobs(req.body);
    console.log(job);
    job.save()
        .then(data => {
            res.status(200).send('job saved successfully')
        })
        .catch(err => {
            res.status(400).send('unable to save job to the database');
        })
})

module.exports = router;