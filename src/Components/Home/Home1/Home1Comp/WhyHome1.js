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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
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
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium"
            >
              <FaRegCheckCircle className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
            <WhyHome1BodyRightCard
              Heading="Creativity"
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium"
            >
              <FaPencilRuler className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
          </div>
          <div className="whyHome1BodyRightBottom">
            <WhyHome1BodyRightCard
              Heading=" Project On Time"
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium"
            >
              <BsClockHistory className="whyHome1BodyRightCardLeftIcon" />
            </WhyHome1BodyRightCard>
            <WhyHome1BodyRightCard
              Heading=" 24/7 Support "
              Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium"
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
