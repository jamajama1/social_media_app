const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    unique: false,
    trim: false,
    minlength: 8
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    commentator: String,
    comment: String
  }],
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;