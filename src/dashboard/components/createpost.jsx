import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

function CreatePost({ closeModal }) {
  const errors = () => {
    toast.error("Failed to create post", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const success = () => {
    toast.success("Post created Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [post, setPost] = useState({
    blogImage: "",
    title: "",
    content: "",
  });
  const handleInput = (event) => {
    if (event.target.name === "blogImage") {
      setPost({ ...post, blogImage: event.target.files[0] });
    } else {
      setPost({ ...post, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("blogImage", post.blogImage);
    formData.append("title", post.title);
    formData.append("content", post.content);

    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzU3YWVjYzRkNmYxYmVjODhlMTM5ZiIsImlhdCI6MTY5ODA5MzUwOCwiZXhwIjoxNjk4MTc5OTA4fQ.PAfu40DyvgPtZUwOxZlpu03xiq5Li8Sk9vKP70VVQmk"; // Replace with your API key

    axios
      .post(
        "https://node-app-plsi.onrender.com/api/klab/blog/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        success();
      })
      .catch((error) => {
        console.error(error);
        errors();
      });
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleClose-btn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modal-title">
            <h2>Create a post here!</h2>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="modal-body">
              <div>
                <label class="file">
                  <input
                    type="file"
                    id="file"
                    name="blogImage"
                    accept="image/*"
                    aria-label="File browser example"
                    onChange={handleInput}
                  />
                  <span class="file-custom"></span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  onChange={handleInput}
                  placeholder="Post Title"
                />
              </div>
              <div>
                <textarea
                  onChange={handleInput}
                  cols="30"
                  rows="10"
                  name="content"
                  placeholder="Content..."
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button name="submit">Publish</button>
              <button id="cancelbtn" onClick={() => closeModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default CreatePost;
