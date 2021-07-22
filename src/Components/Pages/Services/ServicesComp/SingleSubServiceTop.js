import React from "react";
import "./SingleSubServiceTop.css";

function SingleSubServiceTop({ baseid }) {
  return (
    <div className="singleSubServiceTop">
      <div className="singleSubServiceTop_left">
        <p className="singleSubServiceTop_leftHeading">What is</p>
        <p className="singleSubServiceTop_leftSubHeading">{baseid.name}</p>
        <p className="singleSubServiceTop_leftDetail">
          Over the last few years, mobile technology has accelerated its growth
          and seen a massive increase in user base. Mobile applications store
          and process a wide variety of sensitive data, from credit card
          information to intellectual property to medical records. Malicious
          attackers easily target this sensitive information. According to
          research, there are nearly 20 million active vulnerabilities on mobile
          devices!
          <br style={{ marginBottom: "20px" }} />
          Due to the blurring of the lines between secure and exposed data.
          Mobile Application Security Testing evaluates an application's
          security and a large pool of mobile application threat vectors to
          identify inherent vulnerabilities and ensure the application's secure
          state while in use.
        </p>
        <a href="" className="singleSubServiceTop_leftButton">
          Get Started
        </a>
      </div>
      <div className="singleSubServiceTop_right">
        <img
          src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-3.png"
          alt=""
          className="singleSubServiceTop_rightImg"
        />
      </div>
    </div>
  );
}

export default SingleSubServiceTop;
