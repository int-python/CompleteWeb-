import React from "react";
import { Carousel } from "react-bootstrap";
import PageTopsvg from "../../ReComp/PageTopsvg";
import "./MediaEventsTop.css";

function Media_EventsTop() {
  return (
    <div className="mediaEventsTop">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.conceptopensource.com/wp-content/uploads/2016/02/Web-Design-Image-1920x800.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://smarteyetechnology.com/wp-content/uploads/2019/12/Blog-2-1.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://knowledge-leader.colliers.com/wp-content/uploads/2020/04/retail-affects-KL-1920x800-1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.worximity.com/hubfs/Worximity_smart_factory_analytics_AI.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.viatech.com/wp-content/uploads/2019/05/Azure-LEAD-IMAGE.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Media_EventsTop;
