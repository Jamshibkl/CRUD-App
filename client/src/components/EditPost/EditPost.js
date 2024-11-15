import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPost.css";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        setTitle(response.data.title || "");
        setBody(response.data.body || "");
      } catch (error) {
        console.error("Error fetching post:", error);
        alert("Failed to fetch post data.");
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async () => {
    if (!title || !body) {
      alert("Title and body are required!");
      return;
    }

    const updatedPost = { title, body };

    try {
      console.log("Updated Post Data:", updatedPost);

      const responseLocal = await axios.put(
        `http://localhost:3001/posts/${id}`,
        updatedPost
      );
      console.log("Local API Response:", responseLocal);

      if (responseLocal.status === 200) {
        alert("Post updated successfully!");
        navigate(`/post/${id}`);
      } else {
        alert("Failed to update the post. Please try again.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update the post. Please try again.");
    }
  };

  return (
    <form className="edit-form">
      <input
        className="form-control"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control"
        placeholder="Enter post content"
        value={body}
        onChange={(e) => setBody(e.target.value)}></textarea>
      <button
        type="button"
        onClick={handleUpdate}
        className="btn btn-success w-100">
        Update
      </button>
    </form>
  );
};

export default EditPost;
