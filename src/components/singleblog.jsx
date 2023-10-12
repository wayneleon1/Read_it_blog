import "../components/style/Singleblog.css";
import BlogImg from "../Images/Blog-Image.jpg";
export default function Singleblog() {
  return (
    <>
      <div className="blog">
        <div className="blog-img">
          <img src={BlogImg} alt="" />
        </div>
        <div className="blog-content">
          <div className="blog-category">
            <p>Techology</p>
          </div>
          <div className="blog-title">
            <h1>Build a website in minutes with Adobe Templates</h1>
          </div>
          <div className="blog-social-icon">
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
          <div className="blog-date">
            <p>
              <span>11/13/2019 </span>|<span> 12 min read</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
