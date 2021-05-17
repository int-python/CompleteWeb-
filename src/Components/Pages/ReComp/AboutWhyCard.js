import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "./AboutWhyCard.css";

function AboutWhyCard(props) {
  return (
    <div style={props.Style} className="aboutWhyCard">
      {props.children}
      <div className="aboutWhyCard_right">
        <p className="aboutWhyCard_rightHeading">
          {props.Heading}
        </p>
        <p className="aboutWhyCard_rightDetails">
          {props.Detail}
        </p>
      </div>
    </div>
  );
}

export default AboutWhyCard;
