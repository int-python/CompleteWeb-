import React from "react";
import PageTopsvg from "../../ReComp/PageTopsvg";
import "./SingleServiceConsultation.css";

function SingleServiceConsultation() {
  return (
    <div className="singleServiceConsultation">
      <PageTopsvg Direction={{ transform: "rotate(180deg)" }} />
      <div className="singleServiceConsultation_main">
        <div className="singleServiceConsultation_mainLeft">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-6.png"
            alt=""
            className="singleServiceConsultation_mainLeftImg"
          />
        </div>
        <div className="singleServiceConsultation_mainRight">
          <p className="singleServiceConsultation_mainRightHeading">
            Contact Us Today For a Free Consultation
          </p>
          <p className="singleServiceConsultation_mainRightDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            Quisque rutrum. Aenean imperdiet.
          </p>
          <a href="" className="singleServiceConsultation_mainRightButton">
            Contact Us
          </a>
        </div>
      </div>

      <PageTopsvg />
    </div>
  );
}

export default SingleServiceConsultation;
