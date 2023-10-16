import "../components/style/Navbar.css";
import { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <Link to="/" className="tag logo">
            <h1>
              Read<span className="span">it</span>.
            </h1>
          </Link>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link to="/" className="tag active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Article" className="tag">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/Team" className="tag">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="tag">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/Login">
              <button className="btn login">Login</button>
            </Link>
            <Link to="/Signup">
              <button className="btn signup">Sign Up</button>
            </Link>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
