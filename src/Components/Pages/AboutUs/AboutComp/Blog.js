import React from "react";
import "./Blog.css";
import BlogMainBottomCard from '../../ReComp/BlogMainBottomCard';

function Blog() {
  return (
    <div className="blog">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="blog_svg"
        >
          <path
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            style={{
              fill: "#4A7CED",
              transformOrigin: "center",
              transform: "rotateY(0deg)",
            }}
          ></path>
        </svg>
      </div>
      <div className="blog_main">
        <div className="blog_mainTop">
          <p className="blog_mainTopHeading">Latest Blog</p>
          <p className="blog_mainTopDetail">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
          </p>
        </div>
        <div className="blog_mainBottom">
          <BlogMainBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-3.png"
          Title ="Why Digital Marketing is important?"
          Name="John Doe"
          Date="May 15, 2021"
          Detail="Home Home 1 Home 2 Pages About Us Our Team Pricing 404 Services Blog Single Post Contact Contact..."
          />
          <BlogMainBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-2.png"
          Title ="What is SEO and How It Works?"
          Name="John Doe"
          Date="May 15, 2021"
          Detail="Home Home 1 Home 2 Pages About Us Our Team Pricing 404 Services Blog Single Post Contact Contact..."
          />
          <BlogMainBottomCard Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-9.png"
          Title ="Top 10 Tools for Social Media Management"
          Name="John Doe"
          Date="May 15, 2021"
          Detail="Home Home 1 Home 2 Pages About Us Our Team Pricing 404 Services Blog Single Post Contact Contact..."
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
