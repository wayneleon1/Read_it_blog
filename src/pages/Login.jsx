import "../components/style/login.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const errors = () => {
    toast.error("Please enter valid credential", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const success = () => {
    toast.success("Login Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = async () => {
    try {
      const result = await axios.post(
        "https://node-app-plsi.onrender.com/api/klab/user/login",
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", result.data.token);
      // success();
      alert("Login successfully");
      navigate("/dashboard");
    } catch (error) {
      errors();
    }
  };

  return (
    <>
      <div className="Login-section container">
        <div className="login-container">
          <h4>
            Readit!<span className="span"> Welcome</span> Back
          </h4>

          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
          <button onClick={handleApi}>Login</button>

          <p>
            Don't have any account?{" "}
            <Link to="/signup">
              <span className="link">Register Here</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
