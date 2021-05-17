import React, { useState } from "react";
import "./Total.css";
import { CgFileDocument } from "react-icons/cg";
import { TiGroupOutline } from "react-icons/ti";
import { IoTrophyOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import CountUp from "react-countup";
import Zoom from 'react-reveal/Zoom';


function Total(Props) {

  return (
    <div className="total">
     <div style={Props.style}>{Props.children}</div>
      <div className="total_main">
        <div className="total_mainBox">
          <CgFileDocument className="total_mainBoxIcon" />
          <p className="total_mainBoxNumber"><Zoom cascade><CountUp end={100} /></Zoom><span>%</span></p>
          <p className="total_mainBoxName">Projects Completed</p>
        </div>
        <div className="total_mainBox">
          <TiGroupOutline className="total_mainBoxIcon" />
          <p className="total_mainBoxNumber"><Zoom cascade><CountUp end={100} /></Zoom><span>+</span></p>
          <p className="total_mainBoxName">Trusted Client</p>
        </div>
        <div className="total_mainBox">
          <IoTrophyOutline className="total_mainBoxIcon" />
          <p className="total_mainBoxNumber"><Zoom cascade><CountUp end={100} /></Zoom><span>+</span></p>
          <p className="total_mainBoxName">Awards & Recognition</p>
        </div>
        <div className="total_mainBox">
          <BsPeople className="total_mainBoxIcon" />
          <p className="total_mainBoxNumber"><Zoom cascade><CountUp end={50} /></Zoom><span>+</span></p>
          <p className="total_mainBoxName">Professional Team</p>
        </div>
      </div>
      <div style={Props.styleBo}>{Props.children}</div>
    </div>
  );
}

export default Total;
