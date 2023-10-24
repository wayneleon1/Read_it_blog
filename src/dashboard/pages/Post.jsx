import "../components/style/postpage.css";
export default function Post() {
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
        </div> */}
        <div className="manage-posts-container">
          <div className="manage-posts">
            <table id="customers">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th colSpan={2}>Action</th>
                <th>Created on</th>
                <th>Updated on</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Edit</td>
                <td>Delete</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Edit</td>
                <td>Delete</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
