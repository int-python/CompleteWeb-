import React from "react";
import Header from "../../../Header/Header";
import Blog from "../../AboutUs/AboutComp/Blog";
import OurTeamSkills from "../../OurTeam/OurTeamComp/OurTeamSkills";
import PricingChoosePlan from "../../Pricing/PricingComp/PricingChoosePlan";
import PageTopsvg from "../../ReComp/PageTopsvg";
import SingleServiceConsultation from "./SingleServiceConsultation";
import SingleServiceSubService from "./SingleServiceSubService";
import SingleServiceTeam from "./SingleServiceTeam";
import SingleServiceTop from "./SingleServiceTop";
import SingleServiceWorks from "./SingleServiceWorks";
import { singleServiceData } from "../../../../data";

function SingleService(props) {
  // console.log("sdsdsdsd", props);

  const url = props.match.params.url;
  let dataid;
  switch (url) {
    case "CyberSecurity":
      dataid = singleServiceData[0];
      break;
    case "UI-UX":
      dataid = singleServiceData[1];
      break;
    case "SoftwareDevelopment":
      dataid = singleServiceData[2];
      break;
    case "ML-AI":
      dataid = singleServiceData[3];
      break;
    case "BlockChain&CloudComputing":
      dataid = singleServiceData[4];
      break;
    case "IOT":
      dataid = singleServiceData[5];
      break;
    default:
      break;
  }

  return (
    <div>
      <Header>
        <SingleServiceTop dataid={dataid} />
        <PageTopsvg />
      </Header>
      <SingleServiceSubService dataid={dataid} />
      <SingleServiceTeam />
      <PricingChoosePlan />
      <SingleServiceConsultation />
      <SingleServiceWorks />
      <OurTeamSkills />
      <Blog />
    </div>
  );
}

export default SingleService;
