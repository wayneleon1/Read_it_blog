import BlogImg from "../Images/Blog-Image.jpg";
import "../components/style/ArticleBlog.css";
import { Link } from "react-router-dom";
const ArticleBlog = ({ title, image, desc }) => {
  return (
    <>
      <div className="post">
        <div className="post-img">
          <img src={image} alt="" />
        </div>
        <div className="topper">
          <div className="topper-content">
            <div className="one">
              <span className="day">18</span>
            </div>
            <div className="two">
              <p class="yr">2023</p>
              <p class="mos">October</p>
            </div>
          </div>
        </div>
        <div className="post-body">
          <Link to="/BlogSingle">
            {" "}
            <div className="post-title">
              <h1>{title}</h1>
            </div>
          </Link>
          <div className="post-desc">
            <p>{desc}</p>
          </div>
          <div className="post-footer">
            <div>
              <iconify-icon icon="eva:arrow-forward-fill"></iconify-icon>
            </div>
            <div>
              <Link to="/BlogSingle">
                <p>Read more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArticleBlog;
