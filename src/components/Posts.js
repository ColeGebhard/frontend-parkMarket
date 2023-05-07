import "./Posts.css";
import React, { useState } from "react";
import { createPost } from "../api/helpers";

const Posts = (props) => {
  const { posts } = props;


  return (
    <div id="posts" style={{ display: "flex", flexDirection: "column" }}>
      {posts.map((post) => {
        return (
            <div>
              <h2>{post.name}</h2>
              <p>{post.description}</p>
              <p>Price: ${post.price}</p>
            </div>
          );
          
      })}
    </div>
  );
};

export default Posts;
