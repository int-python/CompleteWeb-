import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Contact1Main.css";

function Contact1Main() {
  return (
    <div className="contact1Main">
      <div className="contact1Main_left">
        <img
          src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-6.png"
          alt=""
          className="contact1Main_leftImg"
        />
        <div className="contact1Main_leftBottom">
          <div className="contact1Main_leftIcons" style={{ marginTop: "60px" }}>
            <FaMapMarkerAlt className="contact1Main_leftIconsIcon" />
            <p className="contact1Main_leftIconsText">
              jyoti nagar shobaghpura, G-01, Shubh Mangal Apartment, Udaipur,
              Rajasthan 313001, IN
            </p>
          </div>
          <div className="contact1Main_leftIcons">
            <FaPhoneAlt className="contact1Main_leftIconsIcon" />
            <p className="contact1Main_leftIconsText">+91 8278677705</p>
          </div>
          <div className="contact1Main_leftIcons">
            <FaEnvelope className="contact1Main_leftIconsIcon" />
            <p className="contact1Main_leftIconsText">info@abhedya.in</p>
          </div>
        </div>
      </div>
      <div className="contact1Main_right">
        <p className="contact1Main_rightHeading">Get In Touch</p>
        <p className="contact1Main_rightDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam{" "}
        </p>
        <input
          type="text"
          className="contact1Main_rightInput"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="contact1Main_rightInput"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="contact1Main_rightInput"
          placeholder="Subject"
        />
        <textarea
          style={{ height: "150px" }}
          className="contact1Main_rightInput"
          name=""
          id=""
          cols="40"
          rows="10"
          placeholder="Your Message"
        />
        <button className="contact1Main_rightButton">Send Message</button>
      </div>
    </div>
  );
}

export default Contact1Main;
