import React from "react";
import "./Media_EventsNews.css";
import Media_EventsNewsCard from "./Media_EventsNewsCard";

function Media_EventsNews() {
  const data = {};

  return (
    <div className="media_eventsNews">
      <p className="media_eventsNewsHead">Latest News</p>
      <div className="media_eventsNewsGrid">
        <Media_EventsNewsCard />
        <Media_EventsNewsCard />
        <Media_EventsNewsCard />
        <Media_EventsNewsCard />
      </div>
    </div>
  );
}

export default Media_EventsNews;
