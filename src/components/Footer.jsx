import "../components/style/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer container">
        <div className="footer-content">
          <div className="footer-row">
            <div className="readit">
              <div className="title">
                <h4 className="mark">
                  Read<span>it</span>.
                </h4>
              </div>
              <div className="readit-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="readit-footer">
                <div className="f-social-icons">
                  <div className="twitter">
                    <a href="#">
                      <span>
                        <iconify-icon icon="ri:twitter-fill"></iconify-icon>
                      </span>
                    </a>
                  </div>
                  <div className="facebook">
                    <a href="#">
                      <span>
                        <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                      </span>
                    </a>
                  </div>
                  <div className="instagram">
                    <a href="#">
                      <span>
                        <iconify-icon icon="bi:instagram"></iconify-icon>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="latest-news">
              <div className="title">
                <h4>Latest News</h4>
              </div>
              <div className="latest-body">
                <p>Even the all-powerful Pointing has no control about</p>
                <p>Even the all-powerful Pointing has no control about</p>
              </div>
            </div>
            <div className="info">
              <div className="title">
                <h4>Informtion</h4>
              </div>
              <div className="info-body">
                <ul>
                  <li className="tag">
                    <Link to="/">
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      Home
                    </Link>
                  </li>
                  <li className="tag">
                    <Link to="/team">
                      {" "}
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      About
                    </Link>
                  </li>
                  <li className="tag">
                    <Link to="/login">
                      {" "}
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      Join us
                    </Link>
                  </li>
                  <li className="tag">
                    <Link to="/contact">
                      {" "}
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="question">
              <div className="title">
                <h4>Have a Question</h4>
              </div>
              <div className="q-body">
                <div className="location flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="mdi:location"></iconify-icon>
                    </span>
                  </div>
                  <div>
                    <p>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </p>
                  </div>
                </div>
                <div className="phone flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="mingcute:phone-fill"></iconify-icon>
                    </span>
                  </div>
                  <div>
                    <p>+250 782 977 976</p>
                  </div>
                </div>
                <div className="email flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="bi:envelope-fill"></iconify-icon>
                    </span>
                  </div>
                  <div>rurangwaleon@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright ©2023 All rights reserved | This Website is made by Leon
            </p>
            <a href="#hero">
              <div className="back-top">
                <iconify-icon icon="mdi:arrow-top-circle"></iconify-icon>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
