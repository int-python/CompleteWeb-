import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './PricingChoosePlanCard.css'

function PricingChoosePlanCard({BgColor, BgShadow, Heading, HeadinColor, Price, PlanColor, IconColor, FeaturesColor, Fe1, Fe2, Fe3, Fe4, Fe5 }) {
    return (
        <div className="pricingChoosePlanCard" style={{backgroundColor: `${BgColor}`, boxShadow: `${BgShadow}`}}>
            <p className="pricingChoosePlanCardHeading" style={{color: `${HeadinColor}`}}>{Heading}</p>
            <p className="pricingChoosePlanCardPrice">${Price}</p>
            <p className="pricingChoosePlanCardPlan" style={{color:`${PlanColor}`}}>PER MONTH</p>
            <p className="pricingChoosePlanCardFeatures" style={{color: `${FeaturesColor}`}} ><FaCheck style={{color: `${IconColor}`, fontSize: '14px', marginRight: '10px'}} />{Fe1}</p>
            <p className="pricingChoosePlanCardFeatures" style={{color: `${FeaturesColor}`}} ><FaCheck style={{color: `${IconColor}`, fontSize: '14px', marginRight: '10px'}} />{Fe2}</p>
            <p className="pricingChoosePlanCardFeatures" style={{color: `${FeaturesColor}`}} ><FaCheck style={{color: `${IconColor}`, fontSize: '14px', marginRight: '10px'}} />{Fe3}</p>
            <p className="pricingChoosePlanCardFeatures" style={{color: `${FeaturesColor}`}} ><FaCheck style={{color: `${IconColor}`, fontSize: '14px', marginRight: '10px'}} />{Fe4}</p>
            <p className="pricingChoosePlanCardFeatures" style={{color: `${FeaturesColor}`}} ><FaCheck style={{color: `${IconColor}`, fontSize: '14px', marginRight: '10px'}} />{Fe5}</p>
            <a href="" className="pricingChoosePlanCardButton">Buy Now</a>
        </div>
    )
}

export default PricingChoosePlanCard
