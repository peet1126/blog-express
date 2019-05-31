var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  post: String,
  
}, {
  timestamps: true,
});


var commentSchema = new mongoose.Schema({
  post: String,
  blogId: mongoose.ObjectId
  
}, {
  timestamps: true
});


var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    blogs: [blogSchema],
    comment: [commentSchema],
  }, {
    timestamps: true
  });


module.exports = mongoose.model('User', userSchema);