import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './BlogPage_mainRightCategoriesCard.css'

function BlogPage_mainRightCategoriesCard() {
    return (
        <div className="blogPage_mainRightCategoriesCard">
            <p className="blogPage_mainRightCategoriesCardHeading">Categories</p>
            <div className="blogPage_mainRightCategoriesCardList">
                <a className="blogPage_mainRightCategoriesCardListItem"><FaArrowRight style={{color:"#FFBE56", marginRight:'10px'}} /> Search Engine Optimization</a><hr />
                <a className="blogPage_mainRightCategoriesCardListItem"><FaArrowRight style={{color:"#FFBE56", marginRight:'10px'}} /> Social Media Marketing</a><hr />
                <a className="blogPage_mainRightCategoriesCardListItem"><FaArrowRight style={{color:"#FFBE56", marginRight:'10px'}} /> Web Development</a><hr />
                <a className="blogPage_mainRightCategoriesCardListItem"><FaArrowRight style={{color:"#FFBE56", marginRight:'10px'}} /> Branding Identity</a>
            </div>
        </div>
    )
}

export default BlogPage_mainRightCategoriesCard
