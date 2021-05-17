import React from 'react'
import Header from '../../Header/Header'
import './OurTeam.css'
import OurTeamPeople from './OurTeamComp/OurTeamPeople'
import OurTeamTop from './OurTeamComp/OurTeamTop'
import OurTeamSkills from './OurTeamComp/OurTeamSkills'
import OurTeamJoin from './OurTeamComp/OurTeamJoin'
import PageTop from '../ReComp/PageTop'
import { FaAngleRight } from 'react-icons/fa'
import PageTopsvg from '../ReComp/PageTopsvg'

function OurTeam() {
    return (
        <div>
            <Header>
                <PageTop PageName="Our Team" ParentPage="Home" CurruntPage="About" >
                    <FaAngleRight className="PageTop_linkIcon" />
                    <a href="">Our Team</a> 
                </PageTop>
                <PageTopsvg />
            </Header>
            <OurTeamPeople />
            <OurTeamSkills />
            <OurTeamJoin />
        </div>
    )
}

export default OurTeam
