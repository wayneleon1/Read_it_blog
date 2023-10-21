import "../components/style/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://node-app-plsi.onrender.com/api/klab/user/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        alert("Login Successfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("Incorrect email and password");
        setEmail("");
        setPassword("");
        console.log(error);
      });
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
    </>
  );
}
