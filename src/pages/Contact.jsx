import "../components/style/contact.css";
import HeroPage from "../components/HeroPage";
export default function Contact() {
  return (
    <>
      <HeroPage title={"Contact"} />
      <div className="contact-section container">
        <div className="contact-info">
          <div className="contact-title">
            <h1>Contact Information</h1>
          </div>
          <div className="contact-content">
            <div className="address">
              <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div>
              <p>
                Phone: <span className="bold">+250 782 977 976</span>
              </p>
            </div>
            <div>
              <p>
                Email: <span className="bold">rurangwaleon10@gmail.com</span>
              </p>
            </div>
            <div>
              <p>
                Website: <span className="bold">www.readit.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-map">
            <h2>Map</h2>
          </div>
          <div className="contact-form-groupe">
            <form>
              <div className="form-groupe">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-groupe">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="form-groupe">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-groupe">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-groupe">
                <button className="send-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
