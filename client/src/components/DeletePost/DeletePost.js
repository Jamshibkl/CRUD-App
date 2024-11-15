import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./DeletePost.css";

const DeletePost = ({ postId, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
  
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      await axios.delete(`http://localhost:3001/posts/${postId}`);

      onDelete(postId);

      setShowModal(false); 
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <button className="delete-button" onClick={() => setShowModal(true)}>
        Delete Post
      </button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this post? This action cannot be
            undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeletePost;
