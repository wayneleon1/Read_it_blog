import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <h2>this is Dashboard NavBar</h2>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/profile">Profile</Link>
    </>
  );
};
export default TopBar;
