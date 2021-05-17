import React from 'react'
import Header from '../../Header/Header'
import Client from '../AboutUs/AboutComp/Client'
import AboutWhyTopSvg from '../ReComp/AboutWhyTopSvg'
import PageTop from '../ReComp/PageTop'
import PageTopsvg from '../ReComp/PageTopsvg'
import './Services.css'
import Services_Our from './ServicesComp/Services_Our'
import Services_Why from './ServicesComp/Services_Why'

function Services() {
    return (
        <div>
            <Header>
                <PageTop PageName="Services" ParentPage="Home" CurruntPage="Services" />
                <PageTopsvg />
            </Header>
            <Services_Our />
            <Services_Why />
            <Client />
        </div>
    )
}

export default Services
