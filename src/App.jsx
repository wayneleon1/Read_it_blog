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
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/BlogSingle" element={<BlogSingle />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
