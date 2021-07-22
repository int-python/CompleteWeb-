import React from "react";
import "./Services_Our.css";
import Home1ServicesBottomCard from "../../../Home/Home1/Home1Comp/Home1ServicesBottomCard";

import { singleServiceData } from "../../../../data";

function Services_Our() {
  return (
    <div className="services_Our">
      <div className="services_OurTop">
        <p className="services_OurTopHeading">Explore Our Services</p>
        <p className="services_OurTopDetail">
          Being a part of abhedya’s futuristic solutions private limited our
          client can rely on us to do the hard work we offer consultancy and
          expertise within different services areas. Explore our services and
          see if we can help your business.
        </p>
      </div>
      <div className="services_OurBottom">
        <div className="services_OurBottomRow">
          <Home1ServicesBottomCard
            Path="/service/CyberSecurity"
            Style={{
              boxShadow: "0px 0px 30px 1px rgba(186, 184, 191, 0.3)",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-6@2x.png"
            Heading={singleServiceData[0].name}
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
          <Home1ServicesBottomCard
            Path="/service/UI-UX"
            Style={{
              boxShadow: "0px 0px 30px 1px rgba(186, 184, 191, 0.3)",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-7@2x.png"
            Heading={singleServiceData[1].name}
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
          <Home1ServicesBottomCard
            Path="/service/SoftwareDevelopment"
            Style={{
              boxShadow: "0px 0px 30px 1px rgba(186, 184, 191, 0.3)",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png"
            Heading={singleServiceData[2].name}
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
        </div>
        <div className="services_OurBottomRow">
          <Home1ServicesBottomCard
            Path="/service/ML-AI"
            Style={{
              boxShadow: "0px 0px 30px 1px rgba(186, 184, 191, 0.3)",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png"
            Heading={singleServiceData[3].name}
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
          <Home1ServicesBottomCard
            Path="/service/BlockChain&CloudComputing"
            Style={{
              boxShadow: "0px 0px 30px 1px rgba(186, 184, 191, 0.3)",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-11@2x.png"
            Heading={singleServiceData[4].name}
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
          <Home1ServicesBottomCard
            Path="/service/IOT"
            Style={{
              boxShadow: "0px 0px 30px 1px rgba(186, 184, 191, 0.3)",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-10@2x.png"
            Heading={singleServiceData[5].name}
            Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          />
        </div>
      </div>
    </div>
  );
}

export default Services_Our;
