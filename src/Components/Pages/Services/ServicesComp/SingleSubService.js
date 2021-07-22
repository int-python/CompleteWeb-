import React from "react";
import Header from "../../../Header/Header";
import Home1Faq from "../../../Home/Home1/Home1Comp/Home1Faq";
import PageTopsvg from "../../ReComp/PageTopsvg";
import Services_Why from "./Services_Why";
import SingleSubServiceTop from "./SingleSubServiceTop";
import { singleServiceData } from "../../../../data";
import SingleSubServiceOurApproach from "./SingleSubServiceOurApproach";

function SingleSubService(props) {
  console.log(props.match);

  const url = props.match.url;
  console.log(singleServiceData);

  let baseid;
  switch (url) {
    case "/service/cyberSecurity/vapt":
      baseid = singleServiceData[0].subServicesPage[0];
      break;
    case "/service/cyberSecurity/mapt":
      baseid = singleServiceData[0].subServicesPage[1];
      break;
    case "/service/cyberSecurity/wap":
      baseid = singleServiceData[0].subServicesPage[2];
      break;
    case "/service/cyberSecurity/dataRecSol":
      baseid = singleServiceData[0].subServicesPage[3];
      break;
    case "/service/cyberSecurity/cyberFraudInv":
      baseid = singleServiceData[0].subServicesPage[4];
      break;
    case "/service/cyberSecurity/audit&comp":
      baseid = singleServiceData[0].subServicesPage[5];
      break;
    case "/service/UI-UX/design":
      baseid = singleServiceData[1].subServicesPage[0];
      break;
    case "/service/UI-UX/webDesign":
      baseid = singleServiceData[1].subServicesPage[1];
      break;
    case "/service/UI-UX/mobAppDesign":
      baseid = singleServiceData[1].subServicesPage[2];
      break;
    case "/service/UI-UX/productDesign":
      baseid = singleServiceData[1].subServicesPage[3];
      break;
    case "/service/UI-UX/DIDesign":
      baseid = singleServiceData[1].subServicesPage[4];
      break;
    case "/service/UI-UX/":
      baseid = singleServiceData[1].subServicesPage[5];
      break;
    case "/service/SoftwareDevelopment/mobAppDev":
      baseid = singleServiceData[2].subServicesPage[0];
      break;
    case "/service/SoftwareDevelopment/webDev":
      baseid = singleServiceData[2].subServicesPage[1];
      break;
    case "/service/SoftwareDevelopment/pwaHybDev":
      baseid = singleServiceData[2].subServicesPage[2];
      break;
    case "/service/SoftwareDevelopment/softDev":
      baseid = singleServiceData[2].subServicesPage[3];
      break;
    case "/service/SoftwareDevelopment/":
      baseid = singleServiceData[2].subServicesPage[4];
      break;
    case "/service/SoftwareDevelopment/":
      baseid = singleServiceData[2].subServicesPage[5];
      break;
    case "/service/ML-AI/smartVA":
      baseid = singleServiceData[3].subServicesPage[0];
      break;
    case "/service/ML-AI/chаtbоts":
      baseid = singleServiceData[3].subServicesPage[1];
      break;
    case "/service/ML-AI/roboticProcessAuto":
      baseid = singleServiceData[3].subServicesPage[2];
      break;
    case "/service/ML-AI/nlp":
      baseid = singleServiceData[3].subServicesPage[3];
      break;
    case "/service/ML-AI/":
      baseid = singleServiceData[3].subServicesPage[4];
      break;
    case "/service/ML-AI/":
      baseid = singleServiceData[3].subServicesPage[5];
      break;
    case "/service/BlockChain&CloudComputing/applications":
      baseid = singleServiceData[4].subServicesPage[0];
      break;
    case "/service/BlockChain&CloudComputing/bdbd":
      baseid = singleServiceData[4].subServicesPage[1];
      break;
    case "/service/BlockChain&CloudComputing/cloudmap&mig":
      baseid = singleServiceData[4].subServicesPage[2];
      break;
    case "/service/BlockChain&CloudComputing/whmcs":
      baseid = singleServiceData[4].subServicesPage[3];
      break;
    case "/service/BlockChain&CloudComputing/":
      baseid = singleServiceData[4].subServicesPage[4];
      break;
    case "/service/BlockChain&CloudComputing/":
      baseid = singleServiceData[4].subServicesPage[5];
      break;
    case "/service/IOT/hardwareProt":
      baseid = singleServiceData[5].subServicesPage[0];
      break;
    case "/service/IOT/hardwareTesting":
      baseid = singleServiceData[5].subServicesPage[1];
      break;
    case "/service/IOT/smartAppliances":
      baseid = singleServiceData[5].subServicesPage[2];
      break;
    case "/service/IOT/secRouter":
      baseid = singleServiceData[5].subServicesPage[3];
      break;
    case "/service/IOT/5G":
      baseid = singleServiceData[5].subServicesPage[4];
      break;
    case "/service/IOT/":
      baseid = singleServiceData[5].subServicesPage[5];
      break;
    default:
      break;
  }

  console.log(baseid);
  return (
    <div className="singleSubService">
      <Header>
        <SingleSubServiceTop baseid={baseid} />
        <PageTopsvg />
      </Header>
      <SingleSubServiceOurApproach baseid={baseid} />
      <Services_Why heading="What we offer" />
      <Home1Faq />
    </div>
  );
}

export default SingleSubService;
