import "../components/style/postpage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Post() {
  // ================== success message ============
  const success = () => {
    toast.success("Post has deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // ============== fetching data =============
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://node-app-plsi.onrender.com/api/klab/blog/read"
      );
      const data = response.data.data;
      setData(data);
    };
    getData();
  }, []);
  // ================== delete function =====================
  async function handleDelete(id) {
    const conf = window.confirm("Do you want to delete this post");
    if (conf) {
      try {
        const response = await axios.delete(
          `https://node-app-plsi.onrender.com/api/klab/blog/delete/${id}`
        );
        success();
      } catch (err) {
        console.error(err);
      }
    }
  }

  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  return (
    <>
      <div className="post-section container-section">
        {/* <div className="post-section-row">
          <div className="post-section-row-col1">
            <h2>Recent Posts</h2>
          </div>
          <div className="post-section-row-col2">
            <h2>Popular Posts</h2>
          </div>
          <div className="post-section-row-col1">
            <h2>Recent comments</h2>
          </div>
          <div className="post-section-row-col2">
            <h2>Popular Posts</h2>
          </div>
        </div> */}
        <div className="manage-posts-container">
          <div className="manage-posts">
            <table id="customers">
              <caption>Manage all posts</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th colSpan={2}>Action</th>
                  <th>Author</th>
                  <th>Views</th>
                  <th>Created on</th>
                  <th>Updated on</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td className="t-title">
                        <h4>{post.title}</h4>
                      </td>
                      <td className="t-image">
                        <img src={post.blogImage} alt="Photo" />
                      </td>
                      <td className="t-desc">
                        <p>{post.content}</p>
                      </td>
                      <td>
                        <div className="action-icon edit">
                          <Link to={`/editpost/${post._id}`}>
                            <iconify-icon icon="mingcute:edit-line"></iconify-icon>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div
                          className="action-icon delete"
                          onClick={(e) => handleDelete(post._id)}
                        >
                          <iconify-icon icon="ion:trash-outline"></iconify-icon>
                        </div>
                      </td>
                      <td>Author</td>
                      <td>
                        <div className="views-container">
                          <div className="action-icon views">
                            <iconify-icon icon="raphael:view"></iconify-icon>
                          </div>
                          <div className="views-label">{post.views}</div>
                        </div>
                      </td>
                      <td>{post.blogDate}</td>
                      <td>{post.updateDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {openModalUpdate && <UpdatePost closeModal={setOpenModalUpdate} />}
      </div>
      <ToastContainer />
    </>
  );
}
