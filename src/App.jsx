import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
