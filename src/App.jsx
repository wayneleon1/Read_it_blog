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

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogSingle" element={<BlogSingle />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
