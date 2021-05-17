import React from "react";
import "./OurTeamSkills.css";
import Zoom from 'react-reveal/Zoom';
import Bar from "./Bar";
import OurTeamSkillsSvg from "../../ReComp/OurTeamSkillsSvg";


function OurTeamSkills() {
  return (
    <div className="ourTeamSkills">
      <OurTeamSkillsSvg />
      <div className="ourTeamSkills_main">
        <div className="ourTeamSkills_mainLeft">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-3.png"
            alt=""
            className="ourTeamSkills_mainLeftImg"
          />
        </div>
        <div className="ourTeamSkills_mainRight">
          <p className="ourTeamSkills_mainRightHeading">Our Team Skills</p>
          <p className="ourTeamSkills_mainRightDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
          </p>
          <div className="ourTeamSkills_mainRightBottom">
            <div className="ourTeamSkills_mainRightBottomLeft">
              <div className="ourTeamSkills_mainRightBottomBar">
                <p className="ourTeamSkills_mainRightBottomBarHeading">
                  Search Engine Optimization
                </p>
                <Zoom cascade><Bar done="90" /></Zoom>
              </div>
              <div className="ourTeamSkills_mainRightBottomBar">
                <p className="ourTeamSkills_mainRightBottomBarHeading">
                   UI/UX Designer 
                </p>
                <Zoom cascade><Bar done="70" /></Zoom>
              </div>
            </div>
            <div className="ourTeamSkills_mainRightBottomRight">
              <div className="ourTeamSkills_mainRightBottomBar">
                <p className="ourTeamSkills_mainRightBottomBarHeading">
                  Web Development 
                </p>
                <Zoom cascade><Bar done="80" /></Zoom>
              </div>
              <div className="ourTeamSkills_mainRightBottomBar">
                <p className="ourTeamSkills_mainRightBottomBarHeading">
                  Content Management 
                </p>
                <Zoom cascade><Bar done="60" /></Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ transform: "rotate(180deg)" }}><OurTeamSkillsSvg /></div>
    </div>
  );
}

export default OurTeamSkills;
