import React, { useState } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import Quill from "react-quill";

import "react-quill/dist/quill.snow.css";

const PostForm = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const handlePostForm = (event) => {
    event.preventDefault();
    if (title) {
      const post = {
        title: title,
        content: content,
      };
      addNewPost(post);
      setSaved(true);
    } else {
      alert("Title required");
    }
  };
  if (saved === true) {
    navigate("/");
  }
  return (
    <form className="container" onSubmit={handlePostForm}>
      <h1>Add a New Post</h1>
      <p>
        <label htmlFor="form-title">Title:</label>
        <br />
        <input
          id="form-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </p>
      <p>
        <label htmlFor="form-content">Content:</label>
      </p>
      <Quill value={content} onChange={(value) => setContent(value)} />
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
};
export default PostForm;
