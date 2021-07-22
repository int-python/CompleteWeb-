import React from "react";
import "./WhyHome1.css";
import WhyHome1BodyRightCard from "./WhyHome1BodyRightCard";
import {
  FaPencilRuler,
  FaRegCheckCircle,
  FaUserAstronaut,
} from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

function WhyHome1() {
  return (
    <div className="whyHome1">
      <div className="whyHome1Head">
        <p className="whyHome1HeadHeading">Why Choose Us</p>
        <p className="whyHome1HeadDetail">
          We boost in delivering comprehensive solution to our client from
          development to security, analytics to implementation, we offer it all.
        </p>
      </div>
      <div className="whyHome1Body">
        <div className="whyHome1BodyLeft">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-4.png"
            alt=""
            className="whyHome1BodyLeftImg"
          />
        </div>
        <div className="whyHome1BodyRight">
          <div className="whyHome1BodyRightTop">
            <WhyHome1BodyRightCard
              Heading="High Quality Services"
              Detail="we meet or exceed customer expectations while remaining economically competitive."
            >
              <FaRegCheckCircle className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
            <WhyHome1BodyRightCard
              Heading="Creativity"
              Detail="we are able to shape new and impossible ideas to reality, creating something valuable."
            >
              <FaPencilRuler className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
          </div>
          <div className="whyHome1BodyRightBottom">
            <WhyHome1BodyRightCard
              Heading=" Project On Time"
              Detail="our dedicated team figures out the project scope and deliver it within the deadline."
            >
              <BsClockHistory className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
            <WhyHome1BodyRightCard
              Heading=" 24/7 Support "
              Detail="we provide personal assistance all round the clock to ensure customer satisfaction and trust."
            >
              <FaUserAstronaut className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyHome1;
