import "../components/style/signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div className="sign-section container">
        <form>
          <div className="sign-container">
            <h4>
              Readit!<span className="span"> Create</span> Account
            </h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Retype password" />
            <button>Create Account</button>
            <p>
              Already have account?{" "}
              <Link to="/Login">
                <span className="link">Login Here</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
