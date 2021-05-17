import React from "react";
import "./WhyHome1BodyRightCard.css";

function WhyHome1BodyRightCard(props) {
  return (
    <div className="whyHome1BodyRightCard">
      <div className="whyHome1BodyRightCardLeft">
        {props.children}
      </div>
      <div className="whyHome1BodyRightCardRight">
        <p className="whyHome1BodyRightCardRightHeading">
          {props.Heading}
        </p>
        <p className="whyHome1BodyRightCardRightDetail">
          {props.Detail}
        </p>
      </div>
    </div>
  );
}

export default WhyHome1BodyRightCard;
