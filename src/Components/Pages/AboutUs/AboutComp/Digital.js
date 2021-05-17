import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Digital.css";

function Digital() {
  return (
    <div className="digital">
      <div className="digital_left">
        <p className="digital_leftHeading">Syntra Digital Agency</p>
        <p className="digital_leftdetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="digital_leftflex">
          <div className="digital_leftflexLeft">
            <p className="digital_leftflexLeftHeading">Expert Team</p>
            <p className="digital_leftflexLeftDetail">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget.
            </p>
          </div>
          <div className="digital_leftflexRight">
            <p className="digital_leftflexRightHeading">Business Analysis</p>
            <p className="digital_leftflexRightDetail">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget.
            </p>
          </div>
        </div>
        <div className="digital_leftCard">
          <FaQuoteLeft className="digital_leftCardIcon" />
          <p className="digital_leftCardData">
            We build thoughtful identities and experiences to elevate and
            empower organizations
          </p>
        </div>
      </div>
      <div className="digital_right">
        <img
          src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-3.png"
          alt=""
          className="digital_rightImg"
        />
      </div>
    </div>
  );
}

export default Digital;
