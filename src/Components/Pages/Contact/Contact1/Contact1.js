import React from 'react'
import Header from '../../../Header/Header'
import PageTop from '../../ReComp/PageTop'
import PageTopsvg from '../../ReComp/PageTopsvg'
import Contact1Main from '../ContactComp/Contact1Main'
import './Contact1.css'

function Contact1() {
    return (
        <div>
            <Header>
                <PageTop PageName="Contact Us" ParentPage="Home" CurruntPage="Contact" />
                <PageTopsvg />
            </Header>
            <Contact1Main />
        </div>
    )
}

export default Contact1
