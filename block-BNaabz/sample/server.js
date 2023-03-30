// requires
var express = require('express');
var logger = require('morgan')
var mongoose = require('mongoose');

// connect to database

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected'))
.catch((errro) => console.log(error))

// instantiate the app
var app = express();

// middleware
app.use(logger('dev'))


// routes
app.get('/', (req, res) => {
    res.send('welcome')
})

app.get('/users', (req,res) => {
    res.send('users Page')
})

// Error handler middlewares
app.use((req, res, next) => {
    res.send('Page not Found');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
})

app.listen(3000, () => {
    console.log('server is listening on port 3k')
})