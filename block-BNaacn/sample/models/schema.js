var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    decription: String,
    tag: [String],
    createdAt: {type: Date, default: new Date(0)},
    // createdAt: new Date(0),
    like: {type: Number, default: 0},
}, 
{timestamps: true} 
)
var Article = mongoose.model('Article', articleSchema)
module.exports = Article 


var userSchema = new Schema({
    name: {type: String,},
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: String, minlength: 5},
    createdAt: {type: Date, default: new Date(0)},
    favourites: [String]
}, 
{timestamps: true}  // time when created and updated at  then we do not have to use (createAt: Date)
) 
var User = mongoose.model('User', userSchema)
module.exports = User

var addressSchema = new Schema({
    village: String,
    city: {type: String, required: true},
    state: {type: String, required: true},
    pin: Number,
    user: Schema.Types.ObjectId
}, 
{timestamps: true}  // time when created and updated at  then we do not have to use (createAt: Date)
)
var Address = mongoose.model('Address', addressSchema)
module.exports = Address