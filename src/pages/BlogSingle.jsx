import HeroPage from "../components/HeroPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../components/style/BlogSingle.css";
import Cavatar from "../Images/commetor-avatar.png";

const BlogSingle = () => {
  const [comment, setComments] = useState([]);
  const [author, setAuthor] = useState([]);
  const [message, setmessage] = useState([]);
  const { id } = useParams();
  const [single, setSingle] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // ===================== alerts ==========================
  const errors = () => {
    toast.error("To add a comment you must login first.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const success = () => {
    toast.success("Comment added successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // ======================== fetching recent posts ====================
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://node-app-plsi.onrender.com/api/klab/blog/read"
      );
      const data = response.data.data;
      setBlogs(data);
      console.log(data);
    };
    getData();
  }, []);

  // ======================== Fetching single blog ======================
  useEffect(() => {
    axios
      .get(`https://node-app-plsi.onrender.com/api/klab/blog/read/${id}`)
      .then((res) => {
        const data = res.data.data;
        setSingle(data);
        setComments(res.data.data.Comment);
        setAuthor(data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  // ==================== post comment ==============
  const handleComment = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", message);

    const token = localStorage.getItem("token");

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
          success();
          setmessage("");
        } else {
          alert(`Request failed with status: ${response.status}`);
        }
      } catch (error) {
        alert(`Fetch error: ${error.message}`);
      }
    } else {
      errors();
    }
  };
  // Function to format a date string using the user's locale
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  // Function to format a date string using the user's locale
  const formatRecent = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <HeroPage title={"Blog Single"} />
      <div className="blogSingle-section container">
        <div className="col-1">
          <div className="blogSingle-ft-img">
            <img src={single.blogImage} alt="Feature Photos" />
          </div>
          <div className="blogSingle-content">
            <h2>{single.title}</h2>
            <p>
              <div dangerouslySetInnerHTML={{ __html: single.content }}></div>
            </p>
            <p>
              <span className="publishe">Published</span>
              {formatDate(single.blogDate)}
            </p>
          </div>
          <div className="author-section">
            <div className="author-avatar">
              <img
                src={!author.profile ? Cavatar : author.profile}
                alt="author_profile"
              />
            </div>
            <div className="author-info">
              <div className="author-name">
                <h4>
                  {author.firstname}&nbsp;{author.lastname}
                </h4>
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
                      <img
                        src={
                          !comments.blogCommentor.profile
                            ? Cavatar
                            : comments.blogCommentor.profile
                        }
                        alt="Image"
                      />
                    </div>
                    <div className="comment-body">
                      <p className="commentor">
                        {comments.blogCommentor.firstname}
                      </p>
                      <div className="meta">
                        {formatDate(comments.commentDate)}
                      </div>
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
                      disabled={!localStorage.getItem("token") ? true : false}
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
                <li className="category-link">Healt and Science</li>
                <li className="category-link">Technology</li>
                <li className="category-link">Fashion</li>
                <li className="category-link">Design</li>
                <li className="category-link">Sports</li>
              </ul>
            </div>
          </div>
          <div className="sidebar-box">
            <h3>Recent Blogs</h3>

            <div className="recent-blog">
              {blogs &&
                blogs.slice(0, 3).map((post, index) => (
                  <div class="block" key={index}>
                    <a class="blog-img">
                      <img src={post.blogImage} alt="Image" />
                    </a>
                    <div class="text">
                      <h4 class="heading">
                        <Link to={`/BlogSingle/${post._id}`}>{post.title}</Link>
                      </h4>
                      <div class="meta">
                        <div>
                          <a href="#">
                            <span class="icon-calendar">
                              <iconify-icon icon="fluent:calendar-28-filled"></iconify-icon>
                            </span>{" "}
                            {formatRecent(post.blogDate)}
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span class="icon-person">
                              <iconify-icon icon="solar:user-bold"></iconify-icon>
                            </span>{" "}
                            Admin
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span class="icon-chat">
                              <iconify-icon icon="mdi:message-text"></iconify-icon>
                            </span>{" "}
                            {post.Comment.length}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default BlogSingle;
