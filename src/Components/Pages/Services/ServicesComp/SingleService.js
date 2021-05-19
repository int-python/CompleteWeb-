import React from 'react'
import Header from '../../../Header/Header'
import Blog from '../../AboutUs/AboutComp/Blog'
import OurTeamSkills from '../../OurTeam/OurTeamComp/OurTeamSkills'
import PricingChoosePlan from '../../Pricing/PricingComp/PricingChoosePlan'
import PageTopsvg from '../../ReComp/PageTopsvg'
import SingleServiceConsultation from './SingleServiceConsultation'
import SingleServiceSubService from './SingleServiceSubService'
import SingleServiceTeam from './SingleServiceTeam'
import SingleServiceTop from './SingleServiceTop'
import SingleServiceWorks from './SingleServiceWorks'

function SingleService() {
    return (
        <div>
            <Header>
                <SingleServiceTop />
                <PageTopsvg />
            </Header>
            <SingleServiceSubService />
            <SingleServiceTeam />
            <PricingChoosePlan />
            <SingleServiceConsultation />
            <SingleServiceWorks />
            <OurTeamSkills />
            <Blog />
        </div>
    )
}

export default SingleService
