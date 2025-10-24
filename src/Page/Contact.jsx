import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Panel from "../component/Panel.jsx";
import imgContact from "../img/Shop.png";
import "../css/Contact.css";
import Subscribe from "../component/Subscribe.jsx";

export default function Contact() {
  return (
    <section className="section_Contact">
      <Panel namelink="Contact" imglink={imgContact} />

      <div className="contact_info">
        <div className="frame_info1">
          <h2>Get In Touch With Us</h2>
          <pre>
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Will Always Be There To Help You Out.
            Do Not Hesitate!
          </pre>
        </div>

        <div className="frame_info2">
          <div className="info2_detail">
            <span className="detail_item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h5>Address</h5>
                <p>48 Ngo Si Lien, Da Nang, Viet Nam</p>
              </div>
            </span>

            <span className="detail_item">
              <FaPhoneAlt className="icon" />
              <div>
                <h5>Phone</h5>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </span>

            <span className="detail_item">
              <FaClock className="icon" />
              <div>
                <h5>Working Time</h5>
                <p>Monday–Friday: 9:00 – 22:00</p>
                <p>Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </span>
          </div>

          <div className="info2_input">
            <form>
              <label>
                Your name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email address
                <input type="email" placeholder="abc@gmail.com" />
              </label>
              <label>
                Subject
                <input type="text" placeholder="This is an optional" />
              </label>
              <label>
                Message
                <textarea placeholder="Hi! I'd like to ask about..."></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Subscribe/>
    </section>
  );
}
