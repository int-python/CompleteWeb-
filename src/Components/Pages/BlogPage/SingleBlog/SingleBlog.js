import React from "react";
import { FaAngleRight, FaCheck, FaFacebookF, FaLinkedinIn, FaQuoteLeft, FaRegCalendarAlt, FaRegUserCircle, FaTwitter } from "react-icons/fa";
import Header from "../../../Header/Header";
import BlogMainBottomCard from "../../ReComp/BlogMainBottomCard";
import PageTop from "../../ReComp/PageTop";
import PageTopsvg from "../../ReComp/PageTopsvg";
import "./SingleBlog.css";

function SingleBlog() {
  return (
    <div className="singleBlog">
      <Header>
        <PageTop PageName="Blog" ParentPage="Home" CurruntPage="Blog">
          <FaAngleRight className="PageTop_linkIcon" />
          <a href="">Why Digital Marketing is important? </a>
        </PageTop>
        <PageTopsvg />
      </Header>
      <div className="singleBlogCard">
        <img
          src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-2.png"
          alt=""
          className="singleBlogCard_Img"
        />
        <p className="singleBlogCard_Title">
          Why Digital Marketing is important?
        </p>
        <div className="singleBlogCard_Info">
          <a href="" className="singleBlogCard_InfoName">
            <FaRegUserCircle className="singleBlogCard_InfoIcon" />
            John Doe
          </a>
          <span className="singleBlogCard_InfoDate">
            <FaRegCalendarAlt className="singleBlogCard_InfoIcon" />
            May 20, 2021
          </span>
        </div>
        <p className="singleBlogCard_Detail">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="singleBlogCard_Detail">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p className="singleBlogCard_Detail">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <div className="singleBlogCardBoxCard">
          <FaQuoteLeft className="singleBlogCardBoxCardIcon" />
          <p className="singleBlogCardBoxCardData">
          There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.
          </p>
        </div>
        <p className="singleBlogCard_Detail">
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
        </p>
        <div className="singleBlogCard_list">
            <p className="singleBlogCard_listItems"><FaCheck /> &nbsp; A wonderful serenity has taken possession</p>
            <p className="singleBlogCard_listItems"><FaCheck /> &nbsp; Of my entire soul, like these sweet mornings of spring which</p>
            <p className="singleBlogCard_listItems"><FaCheck /> &nbsp; I enjoy with my whole heart.</p>
            <p className="singleBlogCard_listItems"><FaCheck /> &nbsp; I am alone, and feel the charm of existence</p>
            <p className="singleBlogCard_listItems"><FaCheck /> &nbsp; This spot, which was created </p>
        </div>
        <p className="singleBlogCard_Detail">
        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.
        </p>
        <hr style={{color: 'rgba(0, 0, 0, 0.18)'}} />
        <div className="singleBlogCard_share">
            <p className="singleBlogCard_shareHeading">Share It</p>
            <div className="singleBlogCard_shareIcons">
                <a href=""><FaFacebookF className="singleBlogCard_shareIconFb" /></a>
                <a href=""><FaTwitter className="singleBlogCard_shareIconTw" /></a>
                <a href=""><FaLinkedinIn className="singleBlogCard_shareIconLi" /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
