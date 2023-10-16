import "../components/style/login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="Login-section container">
        <form>
          <div className="login-container">
            <h4>
              Readit!<span className="span"> Welcome</span> Back
            </h4>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p>
              Don't hav any account? <Link to="/Signup">Register Here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
