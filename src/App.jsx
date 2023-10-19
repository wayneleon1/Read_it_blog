import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import BlogSingle from "./pages/BlogSingle";
import Notfound from "./pages/404-Page";
import DashLayout from "./dashboard/components/DashLayout";
import Dashboard from "./dashboard/pages/Dashboard";
import Profile from "./dashboard/pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="blogSingle" element={<BlogSingle />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route element={<DashLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
