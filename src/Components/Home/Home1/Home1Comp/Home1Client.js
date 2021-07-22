import React from "react";
import PageTopsvg from "../../../Pages/ReComp/PageTopsvg";
import "./Home1Client.css";

function Home1Client() {
  return (
    <div>
      <div className="home1Client">
        <div className="home1Client_top">
          <p className="home1Client_topHeading">What Client Say</p>
          <p className="home1Client_topDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
          </p>
        </div>
        <div className="home1Client_bottom">
          <div className="home1Client_bottomCard">
            <p className="home1Client_bottomCardReview">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae"
            </p>
            <img
              src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/bearded-young-hipster-standing-alone-against-a-gray-background.jpg"
              alt=""
              className="home1Client_bottomCardImg"
            />
            <p className="home1Client_bottomCardName">John Doe</p>
            <p className="home1Client_bottomCardPro">Designer</p>
          </div>
          <div className="home1Client_bottomCard">
            <p className="home1Client_bottomCardReview">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae"
            </p>
            <img
              src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/portrait-of-a-elegant-young-woman-sitting-alone-outdoors.jpg"
              alt=""
              className="home1Client_bottomCardImg"
            />
            <p className="home1Client_bottomCardName">Jeniffer Doe</p>
            <p className="home1Client_bottomCardPro">Marketing</p>
          </div>
          <div className="home1Client_bottomCard">
            <p className="home1Client_bottomCardReview">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae"
            </p>
            <img
              src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/morning-bright-lifestyle-portrait-of-young-pretty-woman-relaxing-and-having-fun-alone-on-bed.jpg"
              alt=""
              className="home1Client_bottomCardImg"
            />
            <p className="home1Client_bottomCardName">Claudia Jane</p>
            <p className="home1Client_bottomCardPro">Consultant</p>
          </div>
        </div>
        <PageTopsvg />
      </div>
      {/* <div className="home1Client_divBottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="home1Client_divBottomSvg"
        >
          <path
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            className="home1Client_divBottomSvgPath"
          ></path>
          <path
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            className="home1Client_divBottomSvgPath"
          ></path>
          <path
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            className="home1Client_divBottomSvgPath"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

export default Home1Client;
