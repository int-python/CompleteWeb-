import React from 'react'
import Header from '../../Header/Header'
import Total from '../../Pages/AboutUs/AboutComp/Total'
import Blog from '../../Pages/AboutUs/AboutComp/Blog'
import './Home1.css'
import Home1AboutUs from './Home1Comp/Home1AboutUs'
import Home1Client from './Home1Comp/Home1Client'
import Home1Faq from './Home1Comp/Home1Faq'
import Home1Services from './Home1Comp/Home1Services'
import Home1Top from './Home1Comp/Home1Top'
import WhyHome1 from './Home1Comp/WhyHome1'
import TotalSvgTop from '../../Pages/ReComp/TotalSvgTop'
import Home1Association from './Home1Comp/Home1Association'

function Home1() {
    return (
        <div>
            <Header>
                <Home1Top />
            </Header>
            <WhyHome1 />
            <Home1AboutUs />
            <Home1Services />
            <Home1Association />
            <Home1Client />
            <Home1Faq />
            <Total styleBo={{display: 'none'}}>
                <TotalSvgTop />
            </Total>
            <Blog />
        </div>
    )
}

export default Home1
