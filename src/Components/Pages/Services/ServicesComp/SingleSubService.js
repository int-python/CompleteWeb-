import React from "react";
import Header from "../../../Header/Header";
import Home1Faq from "../../../Home/Home1/Home1Comp/Home1Faq";
import PageTopsvg from "../../ReComp/PageTopsvg";
import Services_Why from "./Services_Why";
import SingleSubServiceOurApproach from "./SingleSubServiceOurApproach";
import SingleSubServiceTop from "./SingleSubServiceTop";

function SingleSubService() {
  return (
    <div className="singleSubService">
      <Header>
        <SingleSubServiceTop />
        <PageTopsvg />
      </Header>
      <SingleSubServiceOurApproach />
      <Services_Why heading="What we offer" />
      <Home1Faq />
    </div>
  );
}

export default SingleSubService;
