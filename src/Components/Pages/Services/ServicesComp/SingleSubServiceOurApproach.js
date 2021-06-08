import React from "react";
import "./SingleSubServiceOurApproach.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SingleSubServiceOurApproach() {
  const data = [
    {
      id: 1,
      class: "left",
      heading: "Pre-Engagement",
      detail:
        "Our team compiles data on the application's architecture, usecases, business logic, and other pertinent details about the mobile application.",
      animation: "right",
    },
    {
      id: 2,
      class: "right",
      heading: "Threat Modelling",
      detail:
        "Create an application's threat profile by enumerating all potential risks and associated threats. This enables testers to create custom test plans to simulate attacks, allowing for assessing actual risks rather than generic vulnerabilities.",
      animation: "left",
    },
    {
      id: 3,
      class: "left",
      heading: "Pre-Engagement",
      detail:
        "Our team compiles data on the application's architecture, usecases, business logic, and other pertinent details about the mobile application.",
      animation: "right",
    },
    {
      id: 4,
      class: "right",
      heading: "Threat Modelling",
      detail:
        "Create an application's threat profile by enumerating all potential risks and associated threats. This enables testers to create custom test plans to simulate attacks, allowing for assessing actual risks rather than generic vulnerabilities.",
      animation: "left",
    },
  ];

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
