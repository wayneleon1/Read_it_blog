import axios from "axios";
import "../components/style/signup.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const errors = () => {
    toast.error("Failed to create account", {
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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = async () => {
    try {
      const result = await axios.post(
        "https://node-app-plsi.onrender.com/api/klab/user/signup",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }
      );
      alert("User created successfully");
      console.log(result.data);
      navigate("/Login");
    } catch (err) {
      errors();
      console.error(err);
    }
  };
  return (
    <>
      <div className="sign-section container">
        <div className="sign-container">
          <h4>
            Readit!<span className="span"> Create</span> Account
          </h4>
          <input
            type="text"
            value={firstname}
            onChange={handleFirstname}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastname}
            onChange={handleLastname}
            placeholder="Last Name"
          />
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
          {/* <input type="password" placeholder="Retype password" /> */}
          <button onClick={handleRegister}>Create Account</button>
          <p>
            Already have account?{" "}
            <Link to="/Login">
              <span className="link">Login Here</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
