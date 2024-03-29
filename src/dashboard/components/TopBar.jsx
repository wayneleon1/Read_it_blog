import { useState } from "react";
import avatar from "../components/images/avatar.webp";
import "./style/topbar.css";
import CreatePost from "./createpost";

const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="left-section">
          <h1>
            Read<span className="span">it</span>
          </h1>
        </div>
        <div className="middle-section">
          <input type="text" className="search-bar" placeholder="search" />
          <button className="search-btn">
            <iconify-icon icon="ion:search-outline"></iconify-icon>
          </button>
          <div
            className="newpost-btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            New post
            <span className="plus-icon">
              <iconify-icon icon="icons8:plus"></iconify-icon>
            </span>
          </div>
        </div>
        <div className="right-section">
          <div className="icons-container">
            <div className="notification-icon-container">
              <div className="notification-icon">
                <iconify-icon icon="clarity:notification-line"></iconify-icon>
              </div>
              <div className="notifications-counter">3</div>
            </div>
            <div className="comment-icon-container">
              <div className="notification-icon">
                <iconify-icon icon="ant-design:comment-outlined"></iconify-icon>
              </div>
              <div className="comment-counter">8</div>
            </div>
            <div className="messages-icon-container">
              <div className="email-icon">
                <iconify-icon icon="clarity:email-line"></iconify-icon>
              </div>
              <div className="messages-counter">5</div>
            </div>
          </div>
          <div className="current-user-profile">
            <img src={avatar} alt="user-profile" />
          </div>
        </div>
      </div>
      {openModal && <CreatePost closeModal={setOpenModal} />}
    </>
  );
};
export default TopBar;
