const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const studentsRouter = require('./routes/students');
const jobsRouter = require('./routes/jobs');
const companiesRouter = require('./routes/companies');
const centersRouter = require('./routes/centers');

// middleware
app.use(bodyParser.json());

// routes
app.get('/home', (req, res) => {
    res.send('testing express');
})
app.use('/student', studentsRouter);
app.use('/jobs', jobsRouter);
app.use('/companies', companiesRouter);
app.use('/centers', centersRouter);


// connecting to mongodb
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected'));

app.listen(4000);