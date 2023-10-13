import BlogImg from "../Images/Blog-Image.jpg";
import "../components/style/ArticleBlog.css";
export default function ArticleBlog() {
  return (
    <>
      <div className="post">
        <div className="post-img">
          <img src={BlogImg} alt="" />
        </div>
        <div className="topper">
          <div className="topper-content">
            <div className="one">
              <span className="day">18</span>
            </div>
            <div className="two">
              <p class="yr">2019</p>
              <p class="mos">October</p>
            </div>
          </div>
        </div>
        <div className="post-body">
          <div className="post-title">
            <h1>All you want to know about industrial laws</h1>
          </div>
          <div className="post-desc">
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="post-footer">
            <iconify-icon icon="eva:arrow-forward-fill"></iconify-icon>
            <p>Read more</p>
          </div>
        </div>
      </div>
    </>
  );
}
