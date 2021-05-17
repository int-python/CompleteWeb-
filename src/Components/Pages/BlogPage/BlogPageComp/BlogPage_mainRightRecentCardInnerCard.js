import React from "react";
import "./BlogPage_mainRightRecentCardInnerCard.css";

function BlogPage_mainRightRecentCardInnerCard(props) {
  return (
    <div className="blogPage_mainRightRecentCardInnerCard">
      <div className="blogPage_mainRightRecentCardInnerCardLeft">
        <img
          src={props.Image}
          alt=""
          className="blogPage_mainRightRecentCardInnerCardLeftImg"
        />
      </div>
      <div className="blogPage_mainRightRecentCardInnerCardRight">
        <p className="blogPage_mainRightRecentCardInnerCardRightHeading">{props.Heading}</p>
        <p className="blogPage_mainRightRecentCardInnerCardRightDate">{props.Date}</p>
      </div>
    </div>
  );
}

export default BlogPage_mainRightRecentCardInnerCard;
