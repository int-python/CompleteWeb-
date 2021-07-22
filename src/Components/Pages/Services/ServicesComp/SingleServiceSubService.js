import React from "react";
import styled from "styled-components";
import Home1ServicesBottomCard from "../../../Home/Home1/Home1Comp/Home1ServicesBottomCard";
import "./SingleServiceSubService.css";

function SingleServiceSubService({ dataid }) {
  console.log(dataid);
  return (
    <div className="singleServiceSubService_">
      <div className="singleServiceSubService_Top">
        <p className="singleServiceSubService_TopHeading">Sub Services</p>
        <p className="singleServiceSubService_TopDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
        </p>
      </div>
      <div className="singleServiceSubService_Bottom">
        <div className="singleServiceSubService_BottomRow">
          <Home1ServicesBottomCard
            BgShadow="0px 0px 30px 1px rgba(186, 184, 191, 0.3)"
            Path={dataid.subServicesName[0].path}
            Style={{ marginRight: "40px", borderRadius: "10px" }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-6@2x.png"
            Heading={dataid.subServicesName[0].name}
            Detail={dataid.subServicesName[0].detail}
          />
          <Home1ServicesBottomCard
            DetailColor="#fff"
            HeadingColor="#FFBE56"
            BgColor="#4A7CED"
            Path={dataid.subServicesName[1].path}
            Style={{ marginRight: "40px", borderRadius: "10px" }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-7@2x.png"
            Heading={dataid.subServicesName[1].name}
            Detail={dataid.subServicesName[1].detail}
          />
          <Home1ServicesBottomCard
            BgShadow="0px 0px 30px 1px rgba(186, 184, 191, 0.3)"
            Path={dataid.subServicesName[2].path}
            Style={{ marginRight: "40px", borderRadius: "10px" }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png"
            Heading={dataid.subServicesName[2].name}
            Detail={dataid.subServicesName[2].detail}
          />
        </div>
        <div className="singleServiceSubService_BottomRow">
          <Home1ServicesBottomCard
            DetailColor="#fff"
            HeadingColor="#FFBE56"
            BgColor="#4A7CED"
            Path={dataid.subServicesName[3].path}
            Style={{ marginRight: "40px", borderRadius: "10px" }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png"
            Heading={dataid.subServicesName[3].name}
            Detail={dataid.subServicesName[3].detail}
          />
          <Home1ServicesBottomCard
            BgShadow="0px 0px 30px 1px rgba(186, 184, 191, 0.3)"
            Path={dataid.subServicesName[4].path}
            Style={{ marginRight: "40px", borderRadius: "10px" }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-11@2x.png"
            Heading={dataid.subServicesName[4].name}
            Detail={dataid.subServicesName[4].detail}
          />
          <Home1ServicesBottomCard
            DetailColor="#fff"
            HeadingColor="#FFBE56"
            BgColor="#4A7CED"
            Path={dataid.subServicesName[5].path}
            Style={{ marginRight: "40px", borderRadius: "10px" }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-10@2x.png"
            Heading={dataid.subServicesName[5].name}
            Detail={dataid.subServicesName[5].detail}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleServiceSubService;
