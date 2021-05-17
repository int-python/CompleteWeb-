import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { FaPencilRuler, FaRegCheckCircle, FaUserAstronaut } from "react-icons/fa";
import AboutWhyCard from "../../ReComp/AboutWhyCard";
import OurTeamSkillsSvg from "../../ReComp/OurTeamSkillsSvg";
import "./Services_Why.css";

function Services_Why() {
  return (
    <div className="services_Why">
      <OurTeamSkillsSvg />
      <div className="services_WhyMain">
        <div className="services_Why_top">
        <p className="services_Why_topHeading">Why Choose Us</p>
        <p className="services_Why_topDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
        </p>
      </div>
        <div className="services_Why_bottom">
        <div className="services_Why_bottomLeft">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-14.png"
            alt=""
            className="services_Why_bottomLeftImg"
          />
        </div>
        <div className="services_Why_bottomRight">
          <AboutWhyCard
            
            Heading="High Quality Services"
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
          >
  
            <FaRegCheckCircle style={{width: '3em', height: '3em'}} className="aboutWhyCard_Icon" />
          </AboutWhyCard>
          
          <AboutWhyCard
            Heading="Creativity"
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
          >
            <FaPencilRuler style={{width: '3em', height: '3em'}} className="aboutWhyCard_Icon" />
          </AboutWhyCard>
          <AboutWhyCard
            Heading="Project On Time"
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
          >
            <BsClockHistory style={{width: '3em', height: '3em'}} className="aboutWhyCard_Icon" />
          </AboutWhyCard>
          <AboutWhyCard
            Heading="24/7 Support"
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium"
          >
            <FaUserAstronaut style={{width: '3em', height: '3em'}} className="aboutWhyCard_Icon" />
          </AboutWhyCard>
        </div>
      </div>
      </div>
      <div style={{ transform: "rotate(180deg)" }}>
        <OurTeamSkillsSvg />
      </div>
    </div>
  );
}

export default Services_Why;
