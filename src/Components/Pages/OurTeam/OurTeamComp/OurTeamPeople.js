import React from 'react'
import './OurTeamPeople.css'
import OurTeamPeople_BottomCard from './OurTeamPeople_BottomCard'

function OurTeamPeople() {
    return (
        <div className="ourTeamPeople">
            <div className="ourTeamPeople_top">
                <p className="ourTeamPeople_topHeading">People Behind Syntra</p>
                <p className="ourTeamPeople_topDetail">Meet our talented team of creatives, attractive, and magic makers</p>
            </div>
            <div className="ourTeamPeople_Bottom">
                <div className="ourTeamPeople_BottomRow">
                    <OurTeamPeople_BottomCard Name="Jonathan Doe" Post="CEO / Founder"
                    Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/bearded-young-hipster-standing-alone-against-a-gray-background.jpg" />
                    <OurTeamPeople_BottomCard Name="Christian Doe" Post="UI/UX Designer"
                    Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/portrait-of-a-elegant-young-woman-sitting-alone-outdoors.jpg" />
                    <OurTeamPeople_BottomCard Name="Alexander Doe" Post="Creative Director"
                    Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/motivated-cheerful-and-glad-pleasant-caucasian-adult-bearded-man-in-grey-sweater-smiling-with-1.jpg" />
                </div>
                <div className="ourTeamPeople_BottomRow">
                <OurTeamPeople_BottomCard Name="Jeniffer Doe" Post="SEO Analysis"
                    Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/morning-bright-lifestyle-portrait-of-young-pretty-woman-relaxing-and-having-fun-alone-on-bed.jpg" />
                    <OurTeamPeople_BottomCard Name="Michael Doe" Post="Web Developer"
                    Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/happy-engineer.jpg" />
                    <OurTeamPeople_BottomCard Name="Jonathan Doe" Post="Frontend Developer"
                    Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/cheerful-software-developer.jpg" />
                </div>
            </div>
        </div>
    )   
}

export default OurTeamPeople
