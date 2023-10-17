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
// import Dashboard from "./dashboard/pages/dashboard";
// import DashLayout from "./dashboard/components/DashLayout";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/Article" element={<Article />} /> */}
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/BlogSingle" element={<BlogSingle />} />
        </Routes>
      </Layout>
      {/* <DashLayout>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </DashLayout> */}
    </>
  );
}
export default App;
