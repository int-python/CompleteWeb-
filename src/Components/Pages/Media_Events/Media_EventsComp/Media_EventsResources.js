import React from "react";
import PageTopsvg from "../../ReComp/PageTopsvg";
import "./Media_EventsResources.css";
import Media_EventsResourcesCard from "./Media_EventsResourcesCard";

function Media_EventsResources() {
  return (
    <div className="media_eventsResources">
      <PageTopsvg Direction={{ transform: "rotate(180deg)" }} />
      <p className="media_eventsResourcesHead">Journalist Resources</p>
      <div className="media_eventsResourcesSection">
        <Media_EventsResourcesCard />
        <Media_EventsResourcesCard />
        <Media_EventsResourcesCard />
      </div>
      <div
        className="media_eventsResourcesSection"
        style={{ marginBottom: "50px" }}
      >
        <Media_EventsResourcesCard />
        <Media_EventsResourcesCard />
        <Media_EventsResourcesCard />
      </div>
      <PageTopsvg />
    </div>
  );
}

export default Media_EventsResources;
