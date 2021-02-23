const express = require('express');
const router = express.Router();
const companies = require('../models/companies');

// router.get('/', (req, res) => {
//     res.send('still here');
// })

router.post('/create-company', (req, res) => {
    const company = new companies(req.body);
    console.log(company);
    company.save()
        .then(data => {
            res.status(200).send('company saved successfully')
        })
        .catch(err => {
            res.status(400).send('unable to save company to the database');
        })
})

module.exports = router;