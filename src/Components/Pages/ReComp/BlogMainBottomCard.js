import React from 'react'
import './BlogMainBottomCard.css'

function BlogMainBottomCard(props) {
    return (
        <div className="blog_mainBottomCard">
            <img
              src={props.Image}
              alt=""
              className="blog_mainBottomCardImg"
            />
            <p className="blog_mainBottomCardTitle">{props.Title}</p>
            <div className="blog_mainBottomCardInfo">
                <a href="" className="blog_mainBottomCardInfoName">{props.Name}</a>
                <span className="blog_mainBottomCardInfoDot"></span>
                <span className="blog_mainBottomCardInfoDate">{props.Date}</span>
            </div>
            <p className="blog_mainBottomCardDetail">{props.Detail}</p>
            <button className="blog_mainBottomCardButton">Read More</button>
          </div>
          
    )
}

export default BlogMainBottomCard
