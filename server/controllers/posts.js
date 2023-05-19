/*
This posts.js file contains logic for the routes for the posts.
*/

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    // Finding all the posts
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPosts = async (req, res) => {
  // Getting the post from the frontend
  const post = req.body;

  // Creating a new post
  const newPost = new PostMessage(post);

  try {
    // Saving the post to the database
    await newPost.save();

    // Sending the post back to the frontend
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
