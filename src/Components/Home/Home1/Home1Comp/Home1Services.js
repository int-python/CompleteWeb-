import React from "react";
import "./Home1Services.css";
import Home1ServicesBottomCard from "./Home1ServicesBottomCard";

function Home1Services() {
  return (
    <div className="home1Services">
      <div className="home1ServicesTop">
        <p className="home1ServicesTopHeading">Our Services</p>
        <p className="home1ServicesTopDetail">
          Abhedya’s Futuristic solution is an it services based business where
          we are making your….we build secure website and mobile apps for your
          dreams…..
        </p>
      </div>
      <div className="home1ServicesBottom">
        <div className="home1ServicesBottomRow1">
          <Home1ServicesBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-6@2x.png"
            Heading="Cyber security"
            Detail="improvised solutions to detect gaps and optimize security standing."
            Path="/service/CyberSecurity"
          />
          <Home1ServicesBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-7@2x.png"
            Heading="UI/UX Design"
            Detail="enhance usability and craft design for best client experience."
            Path="/service/UI-UX"
          />
          <Home1ServicesBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png"
            Heading="Software Development"
            Detail="creating a full-fledged working model of top-notch technological features from ideation to launch."
            Path="/service/SoftwareDevelopment"
          />
        </div>
        <div className="home1ServicesBottomRow2">
          <Home1ServicesBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png"
            Heading="ML/AI"
            Detail="Creating revolutionary modifications and automating your software to its utmost."
            Path="/service/ML-AI"
          />
          <Home1ServicesBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-11@2x.png"
            Heading="Block chain & Cloud computing"
            Detail="making your business processes transparent secure, accessible and scalable."
            Path="/service/BlockChain&CloudComputing"
          />
          <Home1ServicesBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-10@2x.png"
            Heading="Internet of things"
            Detail="helps streamline internal and external workflow for maximum profits."
            Path="/service/IOT"
          />
        </div>
      </div>
    </div>
  );
}

export default Home1Services;
