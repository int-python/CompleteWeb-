import React from "react";
import "./Media_EventsNewsCard.css";

function Media_EventsNewsCard() {
  return (
    <div className="media_eventNewsCard">
      <p className="media_eventNewsCardTag">Press Release</p>
      <img
        src="https://img.freepik.com/free-vector/business-people-working-laptop-development_1262-18907.jpg?size=626&ext=jpg"
        alt=""
        className="media_eventNewsCardImg"
      />
      <p className="media_eventNewsCardDetail">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button className="media_eventNewsCardButton">Read More</button>
    </div>
  );
}

export default Media_EventsNewsCard;
