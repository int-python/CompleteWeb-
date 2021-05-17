import React from "react";
import PageTopsvg from "../../../Pages/ReComp/PageTopsvg";
import "./Home1Top.css";

function Home1Top() {
  return (
    <div className="home1Top">
      <div className="home1Top_content">
        <div className="home1Top_contentLeft">
          <p className="home1Top_contentLeftHeading">SEO & Digital</p>
          <p className="home1Top_contentLeftSubHeading">Marketing Agency</p>
          <p className="home1Top_contentLeftDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam
          </p>
          <a href="" className="home1Top_contentLeftButton">Contact Us</a>
        </div>
        <div className="home1Top_contentRight">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-3.png"
            alt=""
            className="home1Top_contentRightImg"
          />
        </div>
      </div>
     <PageTopsvg />
    </div>
  );
}

export default Home1Top;
