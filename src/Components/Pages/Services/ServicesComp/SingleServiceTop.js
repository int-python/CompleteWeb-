import React, { useState } from "react";
import "./SingleServiceTop.css";
import ModalVideo from "react-modal-video";
import { FaCheckCircle, FaPlay } from "react-icons/fa";

function SingleServiceTop({ dataid }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="singleServiceTop">
      <p className="singleServiceTopHeading">{dataid.name}</p>
      <p className="singleServiceTopDetail">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
      </p>
      <div className="singleServiceTopButtons">
        <a href="" className="singleServiceTopButtons_LearnButton">
          Learn More
        </a>
        <a
          onClick={() => setOpen(true)}
          className="singleServiceTopButtons_PlayButton"
        >
          <FaPlay className="singleServiceTopButtons_PlayButtonIcon" />
        </a>
        <span className="singleServiceTopButtons_PlayButtonRightText">
          Watch Video
        </span>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="PN9nJf-BWvw"
          onClose={() => setOpen(false)}
        />
      </div>
      <img
        src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-5.png"
        alt=""
        className="singleServiceTopImg"
      />
    </div>
  );
}

export default SingleServiceTop;
