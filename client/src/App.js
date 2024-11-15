import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import PostList from "./components/PostList/PostList";
import EditPost from "./components/EditPost/EditPost";
import DeletePost from "./components/DeletePost/DeletePost";
import ReadPost from "./components/ReadPost/ReadPost";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
          <Link className="navbar-brand text-primary font-weight-bold" to="/">
            CRUD App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  View Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/create">
                  Create Post
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
          <Route path="/post/:postId" element={<ReadPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
