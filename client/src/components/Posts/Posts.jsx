import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

// This is the component that will display all the posts
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();

  // This is the state that will hold all the posts
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
