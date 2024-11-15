import React, { useState } from "react";
import axios from "axios";
import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, body };
      await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
      await axios.post("http://localhost:3001/posts", newPost);
      alert("Post added successfully!");
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Add a New Post</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="form-control"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows="4"
        required></textarea>
      <button type="submit" className="btn btn-primary w-100">
        Add Post
      </button>
    </form>
  );
};

export default CreatePost;
