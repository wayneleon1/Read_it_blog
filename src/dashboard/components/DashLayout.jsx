import TopBar from "./TopBar";
import SideBar from "./SideBar";
const DashLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
      <SideBar />
    </div>
  );
};
export default DashLayout;
