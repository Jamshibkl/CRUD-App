import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import CreatePost from "../CreatePost/CreatePost";
import DeletePost from "../DeletePost/DeletePost";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // const handlePostAdded = (newPost) => {
  //   setPosts((prevPosts) => [...prevPosts, newPost]);
  // };

  const handlePostDeleted = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Posts</h2>
      {/* <CreatePost onPostAdded={handlePostAdded} /> */}

      <div className="row mt-4">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="post-card p-3 border rounded shadow-sm">
              <h5 className="post-title">{post.title}</h5>
              <p className="post-body">{post.body.substring(0, 100)}...</p>
              <div className="d-flex justify-content-between mt-3">
                <Link
                  to={`/edit/${post.id}`}
                  className="btn btn-warning">
                  Edit
                </Link>
                <DeletePost postId={post.id} onDelete={handlePostDeleted} />
                <Link to={`/post/${post.id}`} className="btn btn-secondary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
