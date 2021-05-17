import React from "react";
import Header from "../../Header/Header";
import PageTop from "../ReComp/PageTop";
import PageTopsvg from "../ReComp/PageTopsvg";
import BlogMainBottomCard from "../ReComp/BlogMainBottomCard";
import "./BlogPage.css";
import BlogPage_mainRightRecentCard from "./BlogPageComp/BlogPage_mainRightRecentCard";
import BlogPage_mainRightCategoriesCard from "./BlogPageComp/BlogPage_mainRightCategoriesCard";
import BlogPage_mainRightHelpYouCard from "./BlogPageComp/BlogPage_mainRightHelpYouCard";

function BlogPage() {
  return (
    <div className="blogPage">
      <Header>
        <PageTop PageName="Our Blog" ParentPage="Home" CurruntPage="Blog" />
        <PageTopsvg />
      </Header>
      <div className="blogPage_main">
        <div className="blogPage_mainLeft">
          <div style={{ marginBottom: "50px" }}>
            <BlogMainBottomCard
              Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-3.png"
              Title="Why Digital Marketing is important?"
              Name="John Doe"
              Date="May 15, 2021"
              Detail="Home Home 1 Home 2 Pages About Us Our Team Pricing 404 Services Blog Single Post Contact Contact 1 Contact 2 X Blog Home Blog Why Digital Marketing is important? Why Digital Marketing is important? John Doe August 5, 2020 Far far away, behind the word mountains, far from the..."
            />
          </div>
          <div style={{ marginBottom: "50px" }}>
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-2.png"
            Title="What is SEO and How It Works?"
            Name="John Doe"
            Date="May 15, 2021"
            Detail="Home Home 1 Home 2 Pages About Us Our Team Pricing 404 Services Blog Single Post Contact Contact 1 Contact 2 X Blog Home Blog Why Digital Marketing is important? Why Digital Marketing is important? John Doe August 5, 2020 Far far away, behind the word mountains, far from the..."
          />
          </div>
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-9.png"
            Title="Top 10 Tools for Social Media Management"
            Name="John Doe"
            Date="May 15, 2021"
            Detail="Home Home 1 Home 2 Pages About Us Our Team Pricing 404 Services Blog Single Post Contact Contact 1 Contact 2 X Blog Home Blog Why Digital Marketing is important? Why Digital Marketing is important? John Doe August 5, 2020 Far far away, behind the word mountains, far from the..."
          />
        <button className="blogPage_mainLeftButton">Load More</button>
        </div>
        <div className="blogPage_mainRight">
          <BlogPage_mainRightRecentCard />
          <BlogPage_mainRightCategoriesCard />
          <BlogPage_mainRightHelpYouCard />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
