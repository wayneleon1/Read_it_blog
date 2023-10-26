import React from "react";
import "../components/style/modal.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function UpdatePost({ closeModal }) {
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

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleClose-btn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modal-title">
            <h2>Update a post here!</h2>
          </div>
          <form action="#">
            <div className="modal-body">
              <div>
                <input type="text" name="id" />
              </div>
              <div>
                <label class="file">
                  <input
                    type="file"
                    id="file"
                    name="blogImage"
                    accept="image/*"
                    aria-label="File browser example"
                  />
                  <span class="file-custom"></span>
                </label>
              </div>
              <div>
                <input type="text" name="title" placeholder="Post Title" />
              </div>
              <div>
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  name="content"
                  onChange={(event, editor) => {
                    const data = editor.getData();
                  }}
                  // onBlur={(event, editor) => {
                  //   console.log("Blur.", editor);
                  // }}
                  // onFocus={(event, editor) => {
                  //   console.log("Focus.", editor);
                  // }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button name="submit">Save</button>
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

export default UpdatePost;
