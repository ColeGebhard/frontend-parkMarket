import "./Posts.css";
import React, { useState, Link } from "react";
import { useNavigate } from "react-router-dom";
import { Buffer } from 'buffer';

const Posts = (props) => {
    const { posts } = props;

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate("/create");
    };

    return (
        <div id="posts" style={{ display: "flex", flexDirection: "column" }}>
            <button id="postButton"onClick={handleButtonClick}>Create a post</button>
            {posts.length ? (
                posts.map((post) => {
                    return (
                        <div key={post.id} className="postCards">
                            <h2 id="postTitle">{post.name}</h2>
                            <img id="postImage" alt={`${post.name}`} src={`data:image/jpeg;base64,${Buffer.from(post.image.data).toString("base64")}`} />
                            <p id="postDesc">{post.description}</p>
                            <p id="postPrice">Price: ${post.price}</p>
                        </div>
                    );
                })
            ) : (
                <h1>No posts yet</h1>
            )}
        </div>
    );

};

export default Posts;
