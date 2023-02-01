import router from '../routes/user.routes.js';

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
  },
  explaination: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  reviews: {
    type: Array
  },
  dof: {
    type: Date,
    default: Date.now()
  }
});

const Post = mongoose.model('businesses', userSchema);
export default Post;