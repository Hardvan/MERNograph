/*
This posts.js file only contains the routes for the posts.
*/

import express from "express";

// Importing the controllers (Custom)
import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();

// '/posts' is the base route
router.get("/", getPosts);
router.post("/", createPosts);

export default router;
