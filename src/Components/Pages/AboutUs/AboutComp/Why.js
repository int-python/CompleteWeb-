import React from "react";
import {
  FaPencilRuler,
  FaRegCheckCircle,
  FaUserAstronaut,
} from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import "./Why.css";
import AboutWhyCard from "../../ReComp/AboutWhyCard";

function Why(props) {
  return (
    <div className="why">
      {props.children}
      <div className="why_body">
        <div className="why_bodyTop">
          <p className="why_bodyTopHeading">Why Choose Us</p>
          <p className="why_bodyTopDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
          </p>
        </div>
        <div className="why_bodyLast">
          <div className="why_bodyLastLeft">
            <AboutWhyCard
              Heading="High Quality Services"
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
            >
              <FaRegCheckCircle style={{width: '5em', height: '3.3em'}} className="aboutWhyCard_Icon" />
            </AboutWhyCard>
            <AboutWhyCard
              Heading="Project On Time"
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
            >
              <BsClockHistory style={{width: '5em', height: '3.3em'}} className="aboutWhyCard_Icon" />
            </AboutWhyCard>
          </div>
          <div className="why_bodyLastMiddle">
            <img
              src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-4.png"
              alt=""
              className="why_bodyLastMiddleImg"
            />
          </div>
          <div className="why_bodyLastRight">
            <AboutWhyCard
              Heading="Innovative Solutions"
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
            >
              <FaPencilRuler style={{width: '5em', height: '3.3em'}} className="aboutWhyCard_Icon" />
            </AboutWhyCard>
            <AboutWhyCard
              Heading="Dedicated Support"
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
            >
              <FaUserAstronaut style={{width: '5em', height: '3.3em'}} className="aboutWhyCard_Icon" />
            </AboutWhyCard>
          </div>
        </div>
      </div>
      <div className="why_divBottom">{props.children}</div>
    </div>
  );
}

export default Why;
