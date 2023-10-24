import React from "react";

function CreatePost({ closeModal }) {
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
          <div className="modal-body">
            <div>
              <label class="file">
                <input
                  type="file"
                  id="file"
                  aria-label="File browser example"
                />
                <span class="file-custom"></span>
              </label>
            </div>
            <div>
              <input type="text" placeholder="Post Title" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Content..."
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button>Publish</button>
            <button id="cancelbtn" onClick={() => closeModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
