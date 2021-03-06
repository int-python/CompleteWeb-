import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRss,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import PageTopsvg from "../Pages/ReComp/PageTopsvg";

function Footer() {
  return (
    <div className="footer">
      <PageTopsvg Direction={{ transform: "rotate(180deg)" }} />
      <div className="footer_main">
        <div className="footer_mainTop">
          <div className="footer_mainTopfirst">
            <img
              src="/Images/Logo/Logo.png"
              alt=""
              className="footer_mainTopfirstLogo"
            />
            <p className="footer_mainTopfirstDetail">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam
            </p>
            <FaTwitter className="footer_mainTopfirstIcons" />
            <FaFacebook className="footer_mainTopfirstIcons" />
            <FaYoutube className="footer_mainTopfirstIcons" />
            <FaInstagram className="footer_mainTopfirstIcons" />
            <FaRss className="footer_mainTopfirstIcons" />
          </div>
          <div className="footer_mainTopSecond">
            <p className="footer_mainTopSecondHeading">Information</p>
            <a href="/aboutUs" className="footer_mainTopSecondLinks">
              About Us
            </a>
            <a href="/services" className="footer_mainTopSecondLinks">
              Services
            </a>
            <a href="/ourTeam" className="footer_mainTopSecondLinks">
              Our Team
            </a>
            <a href="/pricing" className="footer_mainTopSecondLinks">
              Our Price
            </a>
            <a href="/contact1" className="footer_mainTopSecondLinks">
              Contact
            </a>
          </div>
          <div className="footer_mainTopThird">
            <p className="footer_mainTopThirdHeading">Contact Us</p>
            <div className="footer_mainTopThirdLinkWrap">
              <FaMapMarkerAlt className="footer_mainTopThirdIcons mapicon" />
              <a href="" className="footer_mainTopThirdLinks">
                jyoti nagar shobaghpura, G-01, Shubh Mangal Apartment, Udaipur,
                Rajasthan 313001, IN
              </a>
            </div>
            <div className="footer_mainTopThirdLinkWrap">
              <FaPhoneAlt className="footer_mainTopThirdIcons" />
              <a href="" className="footer_mainTopThirdLinks">
                +91 8278677705
              </a>
            </div>
            <div className="footer_mainTopThirdLinkWrap">
              <FaEnvelope className="footer_mainTopThirdIcons" />
              <a href="" className="footer_mainTopThirdLinks">
                info@abhedya.in
              </a>
            </div>
          </div>
          <div className="footer_mainTopForth">
            <p className="footer_mainTopForthHeading">Newsletter</p>
            <p className="footer_mainTopForthDetail">
              Subscribe now and receive weekly newsletter from us.
            </p>
            <div className="footer_mainTopForthInputGroup">
              <input
                type="email"
                className="footer_mainTopForthInput"
                placeholder="Your Email Address"
                required
              />
              <button className="footer_mainTopForthButton">
                <FaEnvelope />
              </button>
            </div>
          </div>
        </div>
        <hr style={{ color: "#fff" }} />
        <div className="footer_mainBottom">
          <p className="footer_mainBottomLeft">
            Copyright ?? 2021 SYNTRA. All rights reserved.
          </p>
          <div className="footer_mainBottomRight">
            <a href="" className="footer_mainBottomRightLinks">
              Terms of Service
            </a>
            <a href="" className="footer_mainBottomRightLinks">
              Privacy Policy
            </a>
            <a href="" className="footer_mainBottomRightLinks">
              Legal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
