var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number,
    favorites: [String],  // favorites field which should store array of strings
    marks: [Number],      // marks field which is array of numbers
}, 
{timestamps: true}  
)  

var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId      // ObjectId of User
})