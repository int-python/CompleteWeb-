import React from 'react'
import './PricingChoosePlan.css'
import PricingChoosePlanCard from './PricingChoosePlanCard'

function PricingChoosePlan() {
    return (
        <div className="pricingChoosePlan">
            <div className="pricingChoosePlan_top">
                <p className="pricingChoosePlan_topHeading">Choose Your Plan</p>
                <p className="pricingChoosePlan_topDetail">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
            </div>
            <div className="pricingChoosePlan_bottom">
                <PricingChoosePlanCard BgColor=""  BgShadow="0px 0px 30px 1px rgba(186, 184, 191, 0.3)" Heading="Personal" HeadinColor="#233d63"  Price="39" PlanColor="#8796ac" IconColor="rgba(54, 48, 234, 0.86)" FeaturesColor="#8796ac" Fe1="Free Web Hosting" Fe2="SEO Management" Fe3="5 GB Amount of Space" Fe4="Drag and Drop Builder" Fe5="24/7 Support"/>
                <PricingChoosePlanCard BgColor="#4A7CED"  BgShadow="0px 10px 45px 1px rgba(64, 84, 178, 0.55)" Heading="Business" HeadinColor="#fff"  Price="69" PlanColor="#fff" IconColor="#FFBE56" FeaturesColor="#fff" Fe1="Free Web Hosting" Fe2="SEO Management" Fe3="10 GB Amount of Space" Fe4="Drag and Drop Builder" Fe5="24/7 Support"/>
                <PricingChoosePlanCard BgColor=""  BgShadow="0px 0px 30px 1px rgba(186, 184, 191, 0.3)" Heading="Enterprise" HeadinColor="#233d63"  Price="89" PlanColor="#8796ac" IconColor="rgba(54, 48, 234, 0.86)" FeaturesColor="#8796ac" Fe1="Free Web Hosting" Fe2="SEO Management" Fe3="15 GB Amount of Space" Fe4="Drag and Drop Builder" Fe5="24/7 Support"/>
            </div>
        </div>
    )
}

export default PricingChoosePlan
