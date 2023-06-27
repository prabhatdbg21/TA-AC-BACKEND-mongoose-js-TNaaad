var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    email: String,
    age: Number
}, 
{timestamps: true}
);

var User = mongoose.model('User', userSchema);
module.exports = User   // export it from model


var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    like: Number,
    author: Schema.Types.ObjectId,
    comments: String
}, 
{timestamps: true}
);

var Article = mongoose.model('Article', articleSchema);
module.exports = Article   // export it from model


var commentSchema = new Schema({
    content: String,
    author: Schema.Types.ObjectId,
    article: String
}, 
{timestamps: true}
);

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment   // export it from model