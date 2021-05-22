import React from "react";
import "./Home1Association.css";

function Home1Association() {
  const CollageLogo = [
    { id: 1, img: "http://www.nitrr.ac.in/images/nitrr.gif" },
    { id: 2, img: "https://www.nitt.edu/home/about/Low-Resolution-Emblem.png" },
    {
      id: 3,
      img: "https://iitr.ac.in/departments/ECE/uploads/Image/IITR%20New%20LOGO/IITR%20New%20Logo.jpg",
    },
    { id: 4, img: "https://www.iitbbs.ac.in/assets/images/logo.png" },
    { id: 5, img: "https://www.mdi.ac.in/images/logo.jpg" },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Amity_University_logo.png",
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/330px-IIT_Kharagpur_Logo.svg.png",
    },
    { id: 8, img: "https://nmims.edu/images/nmims-university-logo.png" },
    {
      id: 9,
      img: "https://www.puchd.ac.in/includes/webimages/panjab-university-logo.jpg",
    },
  ];

  const IndustrialLogo = [
    { id: 1, img: "https://www.iimidr.ac.in/wp-content/uploads/smalllogo.jpg" },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png",
    },
    {
      id: 3,
      img: "https://api.startupindia.gov.in/sih/api/file/ams/banner/logo?fileName=ac68804f-e29f-45fb-9788-a08c2ccde23c.png",
    },
  ];

  return (
    <div className="home1Association">
      <div className="home1Association_main">
        <div className="home1Association_mainTop">
          <p className="home1Association_mainTopHeading">Association</p>
        </div>
        <div className="home1Association_mainBottom">
          <div className="home1Association_mainBottomCollages">
            <p className="home1Association_mainBottomCollagesHeading">
              Collages
            </p>
            <div class="marquee">
              <div className="marquee--inner">
                <span>
                  {CollageLogo.map((item) => (
                    <img className="logoSize" src={item.img}></img>
                  ))}
                </span>
                <span>
                  {CollageLogo.map((item) => (
                    <img className="logoSize" src={item.img}></img>
                  ))}
                </span>
              </div>
            </div>
          </div>
          <div className="home1Association_mainBottomIndustrial">
            <p className="home1Association_mainBottomIndustrialHeading">
              Industrial
            </p>
            <div class="marquee2">
              <div className="marquee--inner2">
                <span>
                  {IndustrialLogo.map((item) => (
                    <img className="logoSize" src={item.img}></img>
                  ))}
                </span>
                <span>
                  {IndustrialLogo.map((item) => (
                    <img className="logoSize" src={item.img}></img>
                  ))}
                </span>
                <span>
                  {IndustrialLogo.map((item) => (
                    <img className="logoSize" src={item.img}></img>
                  ))}
                </span>
                <span>
                  {IndustrialLogo.map((item) => (
                    <img className="logoSize" src={item.img}></img>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Association;
