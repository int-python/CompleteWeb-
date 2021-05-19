import React from "react";
import Header from "../../Header/Header";
import AboutWhyTopSvg from "../ReComp/AboutWhyTopSvg";
import Blogtopsvg from "../ReComp/Blogtopsvg";
import PageTop from "../ReComp/PageTop";
import PageTopsvg from "../ReComp/PageTopsvg";
import TotalSvgTop from "../ReComp/TotalSvgTop";
import AboutTop from "./AboutComp/AboutTop";
import Blog from "./AboutComp/Blog";
import Client from "./AboutComp/Client";
import Digital from "./AboutComp/Digital";
import Total from "./AboutComp/Total";
import Why from "./AboutComp/Why";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <Header>
        <PageTop PageName="About Us" ParentPage="Home" CurruntPage="About Us" />
        <PageTopsvg />
      </Header>
      <Digital />
      <Why>
        <AboutWhyTopSvg PathColor="#fff"/>
      </Why>
      <Client />
      <Total styleBo={{display: 'none'}}>
        <TotalSvgTop />
      </Total>
      <Blog>
        <Blogtopsvg />
      </Blog>
    </div>
  );
}

export default AboutUs;
