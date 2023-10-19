import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const DashLayout = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
      <SideBar />
    </div>
  );
};
export default DashLayout;
