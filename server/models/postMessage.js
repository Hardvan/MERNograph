import mongoose from "mongoose";

// Creating the schema
const postScheme = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], // Array of strings
  selectedFile: String, // Image will be converted to a string using base64
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Creating the model
const PostMessage = mongoose.model("PostMessage", postScheme);

export default PostMessage;
