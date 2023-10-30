import HeroPage from "../components/HeroPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";
import "../components/style/BlogSingle.css";
import Cavatar from "../Images/commetor-avatar.png";

const BlogSingle = () => {
  const [comment, setComments] = useState([]);
  const [message, setmessage] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://node-app-plsi.onrender.com/api/klab/blog/read/${id}`)
      .then((res) => {
        setData(res.data.data);
        setComments(res.data.data.Comment);
      })
      .catch((err) => console.log(err));
  }, []);

  // ==================== post comment ==============
  const handleComment = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", message);

    const token = localStorage.getItem("token");

    console.log("token", token);

    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await axios.post(
          `https://node-app-plsi.onrender.com/api/klab/comment/create/${id}`,
          formData,
          { headers }
        );

        if (response.status === 200 || response.status === 201) {
          alert("Comment added successfully");
          setmessage("");
        } else {
          alert(`Request failed with status: ${response.status}`);
        }
      } catch (error) {
        alert(`Fetch error: ${error.message}`);
      }
    } else {
      alert("To add a comment you must first login.");
    }
  };

  return (
    <>
      <HeroPage title={"Blog Single"} />
      <div className="blogSingle-section container">
        <div className="col-1">
          <div className="blogSingle-ft-img">
            <img src={data.blogImage} alt="Feature Photos" />
          </div>
          <div className="blogSingle-content">
            <h2>{data.title}</h2>
            <p>
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </p>
            <p>
              <span className="publishe">Published</span>
              {data.blogDate}
            </p>
          </div>
          <div className="author-section">
            <div className="author-avatar">
              <img src={Cavatar} alt="author_profile_picture" />
            </div>
            <div className="author-info">
              <div className="author-name">
                <h4>George Washington</h4>
              </div>
              <div className="author-social-media">
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

          <div className="comment-section-wrap">
            <h3>{comment.length} Comments</h3>
            {Array.isArray(comment) && comment.length > 0 ? (
              <ul className="comment-list">
                {comment.map((comments, index) => (
                  <li className="comment" key={index}>
                    <div class="vcard">
                      <img src={Cavatar} alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <p className="commentor">
                        {comments.blogCommentor.firstname}
                      </p>
                      <div className="meta">{comments.commentDate}</div>
                      <p className="comment-content">{comments.content}</p>
                      <p>
                        <a href="#" class="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Not yet commented</p>
            )}
            <div className="comment-form-wrap">
              <h3>Leave a comment</h3>
              <div className="contact-form-groupe">
                <form onSubmit={handleComment}>
                  <div className="form-groupe">
                    <textarea
                      // disabled
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Comment.."
                      onChange={(e) => {
                        setmessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="form-groupe">
                    <button className="send-btn">Post comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="sidebar-box">
            <form action="#">
              <div className="form-groupe">
                <input type="text" placeholder="Type a keyword and hit enter" />
              </div>
            </form>
          </div>
          <div className="sidebar-box">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li className="category-link">Illustration</li>
                <li className="category-link">Application</li>
                <li className="category-link">Branding</li>
                <li className="category-link">Design</li>
                <li className="category-link">Marketing</li>
              </ul>
            </div>
          </div>
          <div className="sidebar-box">
            <div className="recent-blog">
              <h3>Recent Blog</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogSingle;
