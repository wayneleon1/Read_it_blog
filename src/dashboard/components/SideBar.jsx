import "./style/sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Link to="/dashboard">
        <div className="sidebar-link">
          <div className="sidebar-icon">
            <iconify-icon icon="ant-design:dashboard-filled"></iconify-icon>
          </div>
          <div className="sidebar-label">Dashboard</div>
        </div>
      </Link>
      <Link to="/post">
        <div className="sidebar-link">
          <div className="sidebar-icon">
            <iconify-icon icon="eos-icons:subscriptions-created"></iconify-icon>
          </div>
          <div className="sidebar-label">Post</div>
        </div>
      </Link>
      <Link to="/inbox">
        <div className="sidebar-link">
          <div className="sidebar-icon">
            <iconify-icon icon="ri:inbox-archive-fill"></iconify-icon>
          </div>
          <div className="sidebar-label">Inbox</div>
        </div>
      </Link>
      <Link to="/pages">
        <div className="sidebar-link">
          <div className="sidebar-icon">
            <iconify-icon icon="dashicons:admin-page"></iconify-icon>
          </div>
          <div className="sidebar-label">Pages</div>
        </div>
      </Link>
      <div
        className="sidebar-link"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/Login");
        }}
      >
        <div className="sidebar-icon">
          <iconify-icon icon="fa-solid:users"></iconify-icon>
        </div>
        <div className="sidebar-label">Users</div>
      </div>
    </div>
  );
};
export default SideBar;
