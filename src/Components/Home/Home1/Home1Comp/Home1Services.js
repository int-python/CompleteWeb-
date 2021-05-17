import React from "react";
import "./Home1Services.css";
import Home1ServicesBottomCard from "./Home1ServicesBottomCard";

function Home1Services() {
  return (
    <div className="home1Services">
      <div className="home1ServicesTop">
        <p className="home1ServicesTopHeading">Our Services</p>
        <p className="home1ServicesTopDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
        </p>
      </div>
      <div className="home1ServicesBottom">
        <div className="home1ServicesBottomRow1">
          <Home1ServicesBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-6@2x.png" Heading="SEO Booster" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
          <Home1ServicesBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-7@2x.png" Heading="UI/UX Design" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
          <Home1ServicesBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png" Heading="Web Development" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
        </div>
        <div className="home1ServicesBottomRow2">
          <Home1ServicesBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png" Heading="Content Management" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
          <Home1ServicesBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-11@2x.png" Heading="Social Media Marketing" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
          <Home1ServicesBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-10@2x.png" Heading="Business Analysis" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
        </div>
      </div>
    </div>
  );
}

export default Home1Services;
