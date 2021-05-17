import React from "react";
import "./OurTeamJoin.css";

function OurTeamJoin() {
  return (
    <div className="ourTeamJoin">
      <div className="ourTeamJoinLeft">
        <p className="ourTeamJoinLeftHeading">Join Our Team</p>
        <p className="ourTeamJoinLeftDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
        </p>
        <a href="" className="ourTeamJoinLeftButton">
          Apply for Position
        </a>
      </div>
      <div className="ourTeamJoinRight">
        <img
          src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-5.png"
          alt=""
          className="ourTeamJoinRightImg"
        />
      </div>
    </div>
  );
}

export default OurTeamJoin;
