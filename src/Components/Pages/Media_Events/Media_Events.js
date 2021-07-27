import React from "react";
import "./Media_Events.css";
import Header from "../../Header/Header";
import PageTopsvg from "../ReComp/PageTopsvg";
import Media_EventsTop from "./Media_EventsComp/Media_EventsTop";
import PageTop from "../ReComp/PageTop";
import { FaAngleRight } from "react-icons/fa";
import Media_EventsNews from "./Media_EventsComp/Media_EventsNews";
import Media_EventsResources from "./Media_EventsComp/Media_EventsResources";

function Media_Events() {
  return (
    <div>
      <Header>
        <PageTop
          PageName="Media & Events"
          ParentPage="Home"
          CurruntPage="Media & Events"
        ></PageTop>
        <PageTopsvg />
      </Header>
      <Media_EventsTop />
      <Media_EventsNews />
      <Media_EventsResources />
      <Media_EventsNews />
    </div>
  );
}

export default Media_Events;
