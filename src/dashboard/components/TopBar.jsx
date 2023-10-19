import { Form, Link } from "react-router-dom";
import avatar from "../components/images/avatar.webp";
import "./style/topbar.css";
const TopBar = () => {
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
          <div className="newpost-btn">
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
            <div className="notification-icon-container">
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
      {/* <Link to="/dashboard">dashboard</Link>
      <Link to="/profile">Profile</Link> */}
    </>
  );
};
export default TopBar;
