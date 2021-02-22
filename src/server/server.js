const express = require('express');
const app = express();

// routes
app.get('/server/', (req, res) => {
    res.send('testing express')
    console.log('testing');
})


app.listen(4000);