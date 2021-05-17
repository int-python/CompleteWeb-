import React from "react";
import "./Client.css";

function Client() {
  return (
    <div className="client">
      <div className="client_top">
        <p className="client_topHeading">What Client Say</p>
        <p className="client_topDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
        </p>
      </div>
      <div className="client_bottom">
        <div className="client_bottomCard">
          <p className="client_bottomCardReview">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae"
          </p>
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/bearded-young-hipster-standing-alone-against-a-gray-background.jpg"
            alt=""
            className="client_bottomCardImg"
          />
          <p className="client_bottomCardName">John Doe</p>
          <p className="client_bottomCardPro">Designer</p>
        </div>
        <div className="client_bottomCard">
          <p className="client_bottomCardReview">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae"
          </p>
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/portrait-of-a-elegant-young-woman-sitting-alone-outdoors.jpg"
            alt=""
            className="client_bottomCardImg"
          />
          <p className="client_bottomCardName">Jeniffer Doe</p>
          <p className="client_bottomCardPro">Marketing</p>
        </div>
        <div className="client_bottomCard">
          <p className="client_bottomCardReview">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae"
          </p>
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/morning-bright-lifestyle-portrait-of-young-pretty-woman-relaxing-and-having-fun-alone-on-bed.jpg"
            alt=""
            className="client_bottomCardImg"
          />
          <p className="client_bottomCardName">Claudia Jane</p>
          <p className="client_bottomCardPro">Consultant</p>
        </div>
      </div>
    </div>
  );
}

export default Client;
