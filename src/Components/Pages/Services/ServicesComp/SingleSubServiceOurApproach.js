import React from "react";
import "./SingleSubServiceOurApproach.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SingleSubServiceOurApproach({ baseid }) {
  const data = [
    {
      id: 1,
      class: "left",
      heading: baseid.approchSteps[0].stepHeading,
      detail: baseid.approchSteps[0].stepDeail,
      animation: "right",
    },
    {
      id: 2,
      class: "right",
      heading: baseid.approchSteps[1].stepHeading,
      detail: baseid.approchSteps[1].stepDeail,
      animation: "left",
    },
    {
      id: 3,
      class: "left",
      heading: baseid.approchSteps[2].stepHeading,
      detail: baseid.approchSteps[2].stepDeail,
      animation: "right",
    },
    {
      id: 4,
      class: "right",
      heading: baseid.approchSteps[3].stepHeading,
      detail: baseid.approchSteps[3].stepDeail,
      animation: "left",
    },
  ];

  switch (baseid.approchStepsno) {
    case 5:
      data.push({
        id: 5,
        class: "left",
        heading: baseid.approchSteps[4].stepHeading,
        detail: baseid.approchSteps[4].stepDeail,
        animation: "right",
      });
      break;
    case 6:
      data.push(
        {
          id: 5,
          class: "left",
          heading: baseid.approchSteps[4].stepHeading,
          detail: baseid.approchSteps[4].stepDeail,
          animation: "right",
        },
        {
          id: 6,
          class: "right",
          heading: baseid.approchSteps[5].stepHeading,
          detail: baseid.approchSteps[5].stepDeail,
          animation: "left",
        }
      );
      break;
    default:
      break;
  }

  AOS.init({
    delay: 100,
    duration: 600,
  });

  return (
    <div className="singleSubServiceOurApproach">
      <div className="singleSubServiceOurApproach_top">
        <p className="singleSubServiceOurApproach_topHeading">Our approach</p>
        <p className="singleSubServiceOurApproach_topDetail">
          We at Abhedya take a 360-degree approach when it comes to Mobile
          Application Security Assessment.
        </p>
      </div>
      <div className="timeline">
        {data.map((item) => (
          <div
            key={item.id}
            className={`singleSubServiceOurApproach_timeLine ${item.class}`}
          >
            <span className="singleSubServiceOurApproach_timeLineCount">
              {item.id}
            </span>
            <div
              data-aos={`fade-${item.animation}`}
              className="singleSubServiceOurApproach_timeLineData"
            >
              <p className="singleSubServiceOurApproach_timeLineDataHeading">
                {item.heading}
              </p>
              <p className="singleSubServiceOurApproach_timeLineDataDetail">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleSubServiceOurApproach;
