import HeroPage from "../components/HeroPage";
import "../components/style/BlogSingle.css";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image_2.jpg.webp";
import avatar from "../Images/person_1.jpg.webp";
const BlogSingle = () => {
  return (
    <>
      <HeroPage title={"Blog Single"} />
      <div className="blogSingle-section container">
        <div className="col-1">
          <div className="blogSingle-ft-img">
            <img src={image1} alt="Feature Photos" />
          </div>
          <div className="blogSingle-content">
            <h2>It is a long established fact a reader be distracted</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
              perferendis et doloribus unde architecto optio laboriosam porro
              adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore perferendis, enim praesentium omnis, iste
              doloremque quia officia optio deserunt molestiae voluptates soluta
              architecto tempora.
            </p>
            <p>
              Molestiae cupiditate inventore animi, maxime sapiente optio, illo
              est nemo veritatis repellat sunt doloribus nesciunt! Minima
              laborum magni reiciendis qui voluptate quisquam voluptatem soluta
              illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti
              tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor
              minima esse vero ut ea, repudiandae suscipit!
            </p>
            <h2>#2. Creative WordPress Themes</h2>
            <p>
              Temporibus ad error suscipit exercitationem hic molestiae totam
              obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora
              maiores ex architecto voluptatum aut officia doloremque. Error
              dolore voluptas, omnis molestias odio dignissimos culpa ex earum
              nisi consequatur quos odit quasi repellat qui officiis reiciendis
              incidunt hic non? Debitis commodi aut, adipisci.
            </p>
            <div className="blogSingle-ft-img">
              <img src={image2} alt="Photos" />
            </div>
            <p>
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
              reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
              tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
              consectetur suscipit veritatis nulla quos quia aspernatur
              perferendis, libero sint. Error, velit, porro. Deserunt minus,
              quibusdam iste enim veniam, modi rem maiores.
            </p>
            <p>
              Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
              quo velit commodi rerum eum quidem pariatur! Quia fuga iste
              tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
              explicabo soluta commodi libero voluptatem similique id quidem?
              Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit
              inventore, quia laboriosam harum excepturi ea.
            </p>
            <p>
              Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam
              quidem, dolor distinctio similique asperiores voluptas enim,
              exercitationem ratione aut adipisci modi quod quibusdam iusto,
              voluptates beatae iure nemo itaque laborum. Consequuntur et
              pariatur totam fuga eligendi vero dolorum provident. Voluptatibus,
              veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur
              recusandae!
            </p>
            <p>
              Voluptas dolores dignissimos dolorum temporibus, autem aliquam
              ducimus at officia adipisci quasi nemo a perspiciatis provident
              magni laboriosam repudiandae iure iusto commodi debitis est
              blanditiis alias laborum sint dolore. Dolores, iure,
              reprehenderit. Error provident, pariatur cupiditate soluta
              doloremque aut ratione. Harum voluptates mollitia illo minus
              praesentium, rerum ipsa debitis, inventore?
            </p>
            <p>
              <span className="publishe">Published</span>on 13 October 2023
            </p>
          </div>
          <div className="author-section">
            <div className="author-avatar">
              <img src={avatar} alt="author_profile_picture" />
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
          <hr />
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
