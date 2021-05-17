import React from "react";
import './PageTop.css'
import { FaAngleRight } from "react-icons/fa";

function PageTop(props) {
  return (
    <div>
      <div className="PageTop">
        <p className="PageTop_heading">{props.PageName}</p>
        <p className="PageTop_link">
          <span>
            <a href="">{props.ParentPage}</a> <FaAngleRight className="PageTop_linkIcon" />
            <a href="">{props.CurruntPage}</a> {props.children}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PageTop;
