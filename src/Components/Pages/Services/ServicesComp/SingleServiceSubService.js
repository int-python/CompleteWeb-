import React from 'react'
import styled from 'styled-components'
import Home1ServicesBottomCard from '../../../Home/Home1/Home1Comp/Home1ServicesBottomCard'
import './SingleServiceSubService.css'

function SingleServiceSubService() {
    return (
        <div className="singleServiceSubService_">
            <div className="singleServiceSubService_Top">
                <p className="singleServiceSubService_TopHeading">Sub Services</p>
                <p className="singleServiceSubService_TopDetail">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
            </div>
            <div className="singleServiceSubService_Bottom">
                <div className="singleServiceSubService_BottomRow">
                    <Home1ServicesBottomCard BgShadow='0px 0px 30px 1px rgba(186, 184, 191, 0.3)' Path="/singleSubService" Style={{ marginRight: '40px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-6@2x.png" Heading="SEO Booster" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard DetailColor="#fff" HeadingColor="#FFBE56" BgColor='#4A7CED' Path="/singleSubService" Style={{ marginRight: '40px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-7@2x.png" Heading="UI/UX Design" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard BgShadow='0px 0px 30px 1px rgba(186, 184, 191, 0.3)' Path="/singleSubService" Style={{ marginRight: '40px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png" Heading="Web Development" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                </div>
                <div className="singleServiceSubService_BottomRow">
                    <Home1ServicesBottomCard DetailColor="#fff" HeadingColor="#FFBE56" BgColor='#4A7CED' Path="/singleSubService" Style={{ marginRight: '40px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-9@2x.png" Heading="Content Management" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard BgShadow='0px 0px 30px 1px rgba(186, 184, 191, 0.3)' Path="/singleSubService" Style={{ marginRight: '40px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-11@2x.png" Heading="Social Media Marketing" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                    <Home1ServicesBottomCard DetailColor="#fff" HeadingColor="#FFBE56" BgColor='#4A7CED' Path="/singleSubService" Style={{ marginRight: '40px',borderRadius: '10px'}} Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/Asset-10@2x.png" Heading="Business Analysis" Detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" />
                </div>
            </div>
        </div>
    )
    
}

export default SingleServiceSubService
