import React, { useState } from "react";
import "./Home1AboutUs.css";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import PageTopsvg from "../../../Pages/ReComp/PageTopsvg";
import ModalVideo from 'react-modal-video'


function Home1AboutUs() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="home1AboutUs">
      {/* <div className="home1AboutUs_div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="home1AboutUs_divSvg"
        >
          <path
            class="elementor-shape-fill"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	           c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	           c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            className="home1AboutUs_divSvgPath"
          ></path>
        </svg>
      </div> */}
      <PageTopsvg Direction={{transform:'rotate(180deg)'}}/>
      <div className="home1AboutUs_main">
        <div className="home1AboutUs_mainLeft">
          <p className="home1AboutUs_mainLeftHeading">About Us</p>
          <p className="home1AboutUs_mainLeftDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="home1AboutUs_mainLeftList">
            <p className="home1AboutUs_mainLeftItems">
              <FaCheckCircle className="home1AboutUs_mainLeftItemsIcon" />
              Totam Rem aperiam
            </p>
            <p className="home1AboutUs_mainLeftItems">
              <FaCheckCircle className="home1AboutUs_mainLeftItemsIcon" />
              Magnis Dis Parturient Montes
            </p>
            <p className="home1AboutUs_mainLeftItems">
              <FaCheckCircle className="home1AboutUs_mainLeftItemsIcon" />
              Donec sodales sagittis magna
            </p>
        </div>
          <a href="" className="home1AboutUs_mainLeftButton">Learn More</a>
          <a onClick={()=> setOpen(true)} className="home1AboutUs_mainLeftPlayButton"><FaPlay className="home1AboutUs_mainLeftPlayButtonIcon" /></a>
            <span className="home1AboutUs_mainLeftPlayButtonRightText">Watch Video</span>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="PN9nJf-BWvw" onClose={() => setOpen(false)} />
        </div>
        <div className="home1AboutUs_mainRight">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-5.png"
            alt=""
            className="home1AboutUs_mainRightImg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home1AboutUs;
