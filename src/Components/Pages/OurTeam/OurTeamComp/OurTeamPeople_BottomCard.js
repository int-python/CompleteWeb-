import React from "react";
import "./OurTeamPeople_BottomCard.css";
import { FaFacebookF, FaPinterest, FaTwitter } from 'react-icons/fa';

function OurTeamPeople_BottomCard({Image, Name, Post}) {
  return (
    <div className="ourTeamPeople_BottomCard">
      <img
        src={Image}
        alt=""
        className="ourTeamPeople_BottomCardImg"
      />
      <p className="ourTeamPeople_BottomCardName">{Name}</p>
      <p className="ourTeamPeople_BottomCardPost">{Post}</p>
      <div className="ourTeamPeople_BottomCardIcons">
          <a href="" className="ourTeamPeople_BottomCardIcon"><FaFacebookF style={{color:'#4054B2'}} /></a>
          <a href="" className="ourTeamPeople_BottomCardIcon"><FaTwitter style={{color:'#1DA1F2'}}/></a>
          <a href="" className="ourTeamPeople_BottomCardIcon"><FaPinterest style={{color:'#BD091D'}}/></a>
      </div>
    </div>
  );
}

export default OurTeamPeople_BottomCard;
