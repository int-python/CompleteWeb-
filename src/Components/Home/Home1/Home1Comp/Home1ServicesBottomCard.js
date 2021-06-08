import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Home1ServicesBottomCard.css";

function Home1ServicesBottomCard(props) {
  const Home1ServicesBottomCardHover = styled(Link)`
    background-color: ${props.BgColor};

    &:hover {
      box-shadow: ${props.BgShadow};
    }
  `;
  const Home1ServicesBottomCardHeading = styled.p`
    color: ${props.HeadingColor};
  `;

  const Home1ServicesBottomCardDetail = styled.p`
    color: ${props.DetailColor};
  `;

  return (
    <Home1ServicesBottomCardHover
      to={props.Path}
      style={props.Style}
      className="home1ServicesBottomCard"
    >
      <div className="home1ServicesBottomCardImage">
        <img src={props.Image} alt="" className="home1ServicesBottomCardImg" />
      </div>
      <Home1ServicesBottomCardHeading className="home1ServicesBottomCardHeading">
        {props.Heading}
      </Home1ServicesBottomCardHeading>
      <Home1ServicesBottomCardDetail className="home1ServicesBottomCardDetail">
        {props.Detail}
      </Home1ServicesBottomCardDetail>
    </Home1ServicesBottomCardHover>
  );
}

export default Home1ServicesBottomCard;
