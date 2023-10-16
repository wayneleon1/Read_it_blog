import HeroPage from "../components/HeroPage";
import video1 from "../Images/Video.jpg";
import "../components/style/about.css";
export default function Team() {
  return (
    <>
      <HeroPage title={"About"} />

      <div className="about-section container">
        <div className="about-row">
          <div className="about-video">
            <img src={video1} alt="our services" />
          </div>
          <div className="about-info">
            <div className="about-heading">
              <p className="sub-heading">Welcome to Readit</p>
              <h2>We give you the best articles you want.</h2>
              <p className="about-desc">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
            <div className="tabulation">
              <ul>
                <li>Our Mission</li>
                <li>Our Vision</li>
                <li>Our Value</li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimony-section">
          <div className="testimony-row">
            <div className="testimony-title">
              <span class="sub-heading">Testimonial</span>
              <h2 class="">Happy Clients</h2>
            </div>
          </div>
          {/* <div className="testimony-stage">
            <div className="testimony-box">
              <div className="testimony-text">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="testimony-footer">
                <div className="testimony-avatar">
                  <img src="" alt="" />
                </div>
                <div className="testimony-avatar-">
                  <div className="Testimony-user">
                    <h4>Roger Scott</h4>
                  </div>
                  <div className="user-position">
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
