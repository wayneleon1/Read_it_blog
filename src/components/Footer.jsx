import "../components/style/footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer container">
        <div className="footer-content">
          <div className="footer-row">
            <div className="readit">
              <div className="title">
                <h4 className="mark">
                  Read<span>it</span>
                </h4>
              </div>
              <div className="readit-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="readit-footer">
                <div className="social-icons">
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
                  <li>Home</li>
                  <li>About</li>
                  <li>Articles</li>
                  <li>Contact</li>
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
                    <p>+2 392 3929 210</p>
                  </div>
                </div>
                <div className="email flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="bi:envelope-fill"></iconify-icon>
                    </span>
                  </div>
                  <div>info@yourdomain.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright ©2023 All rights reserved | This Website is made by Leon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
