var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    password: {type: String, minlength: 5, maxlength:15},
    createdAt: {type: Date, default: Date.now}
}, 
{timestamps: true} 
) 

var User = mongoose.model('User', userSchema)

module.exports = User // we can able to user this Article from any file (eg. server.js)


var articleSchema = new Schema({
    title: String,
    decription: String,
})

module.exports = mongoose.model('Artical', articleSchema)