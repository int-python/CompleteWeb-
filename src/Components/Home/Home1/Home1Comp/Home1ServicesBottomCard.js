import React from "react";
import "./Home1ServicesBottomCard.css";

function Home1ServicesBottomCard(props) {
  return (
    <div style={props.BgShadow} className="home1ServicesBottomCard">
      <div className="home1ServicesBottomCardImage">
        <img
          src={props.Image}
          alt=""
          className="home1ServicesBottomCardImg"
        />
      </div>
      <p className="home1ServicesBottomCardHeading">{props.Heading}</p>
      <p className="home1ServicesBottomCardDetail">{props.Detail}</p>
    </div>
  );
}

export default Home1ServicesBottomCard;
