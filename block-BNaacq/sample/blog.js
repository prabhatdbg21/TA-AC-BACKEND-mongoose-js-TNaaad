// requires
var express = require('express');                  // create an express application
var mongoose = require('mongoose');
var Article = require('./models/articles');               // import it into app.js

mongoose.connect('mongodb://127.0.0.1:27017/sample')   // connect to mongodb database using mongoose.connect() in `app.js`
.then(() => console.log('Connected'))
.catch((error) => console.log(error))

// instantiate the app
var app = express();                               // create an express application

// middleware
app.use(express.json())  // caputure the data from post request and send it to the req.body

// routes
app.get('/', (req, res) => {
    res.send('welcome')
})

app.post('/user', (req, res, next) => {
    Article.create(req.body)                            
    .then((products) =>  console.log(products))
    .catch((err) => next(err))
})

app.put('/user/:id', (req, res) => {    // on PUT request on '/users/:id', update a user
    // grab the id
    var id = req.params.id;
    Article.findByIdAndUpdate (id, req.body, {new: true})   // 
    .then((updateUser) => res.json(updateUser) )
    .catch((err) => console.log(err))       
})

app.get('/user', (req, res) => { 
    Article.find({})
    .then((users) => res.json({users: users}) )     
    .catch((err) => console.log(err))               
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