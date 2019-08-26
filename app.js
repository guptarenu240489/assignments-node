const express = require('express');

const app = express();

// app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res, next) => {
    console.log('Inside 2nd middleware');
    res.send('<h1> Hello from /users route!!!! </h1>');
});

app.use('/', (req, res, next) => {
    console.log('Inside first middleware');
    res.send('<h1> Hello from / route </h1>');
    // next();
});









app.listen(3000);
