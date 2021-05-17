import React from 'react'
import Header from '../../Header/Header'
import Home1Faq from '../../Home/Home1/Home1Comp/Home1Faq'
import Total from '../AboutUs/AboutComp/Total'
import AboutWhyTopSvg from '../ReComp/AboutWhyTopSvg'
import PageTop from '../ReComp/PageTop'
import PageTopsvg from '../ReComp/PageTopsvg'
import './Pricing.css'
import PricingChoosePlan from './PricingComp/PricingChoosePlan'


function Pricing() {
    return (
        <div>
            <Header>
                <PageTop PageName="Pricing" ParentPage="Home" CurruntPage="Pricing" />
                <PageTopsvg />
            </Header>
            <PricingChoosePlan />
            <Total style={{transform: 'rotateY(180deg)'}} styleBo={{transform: 'rotateX(180deg)'}} >
                <AboutWhyTopSvg PathColor="#fff"/>
            </Total>
            <Home1Faq/>
        </div>
    )
}

export default Pricing
