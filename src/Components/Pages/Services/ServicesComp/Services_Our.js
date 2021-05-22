import React from 'react'
import './Services_Our.css'
import Home1ServicesBottomCard from "../../../Home/Home1/Home1Comp/Home1ServicesBottomCard";


function Services_Our() {
    return (
        <div className="services_Our">
            <div className="services_OurTop">
                <p className="services_OurTopHeading">Explore Our Services</p>
                <p className="services_OurTopDetail">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
            </div>
            <div className="services_OurBottom">
                <div className="services_OurBottomRow">
                    <Home1ServicesBottomCard Path="/singleService" Style={{boxShadow: '0px 0px 30px 1px rgba(186, 184, 191, 0.3)', marginRight: '20px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-6@2x.png" Heading="SEO Booster" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard Path="/singleService" Style={{boxShadow: '0px 0px 30px 1px rgba(186, 184, 191, 0.3)', marginRight: '20px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-7@2x.png" Heading="UI/UX Design" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard Path="/singleService" Style={{boxShadow: '0px 0px 30px 1px rgba(186, 184, 191, 0.3)', marginRight: '20px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png" Heading="Web Development" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                </div>
                <div className="services_OurBottomRow">
                    <Home1ServicesBottomCard Path="/singleService" Style={{boxShadow: '0px 0px 30px 1px rgba(186, 184, 191, 0.3)', marginRight: '20px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png" Heading="Content Management" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard Path="/singleService" Style={{boxShadow: '0px 0px 30px 1px rgba(186, 184, 191, 0.3)', marginRight: '20px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-11@2x.png" Heading="Social Media Marketing" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard Path="/singleService" Style={{boxShadow: '0px 0px 30px 1px rgba(186, 184, 191, 0.3)', marginRight: '20px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-10@2x.png" Heading="Business Analysis" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                </div>
            </div>
        </div>
    )
}

export default Services_Our
