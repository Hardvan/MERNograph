/*
This posts.js file only contains the routes for the posts.
*/

import express from "express";

// Importing the controllers (Custom)
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

export default router;
