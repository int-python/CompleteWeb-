import React from "react";
import BlogMainBottomCard from "../../ReComp/BlogMainBottomCard";
import "./SingleServiceWorks.css";

function SingleServiceWorks() {
  return (
    <div className="singleServiceWorks">
      <div className="singleServiceWorks_top">
        <p className="singleServiceWorks_topHeading">Our Recent Works</p>
        <p className="singleServiceWorks_topDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
        </p>
      </div>
      <div className="singleServiceWorks_bottom">
        <div className="singleServiceWorks_bottomRow">
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-9.png"
            Title="Totam Rem Aperiam"
            Name="Web Development"
           />
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/blog-4-1.png"
            Title="Sodales Sagittis Magna"
            Name="SEO Marketing"
          />
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-3.png"
            Title="Dolorem Eum Fugiat"
            Name="UI/UX Design"
          />
        </div>
        <div className="singleServiceWorks_bottomRow">
        <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-3.png"
            Title="Ullam Corporis Suscipit"
            Name="Content Management"
          />
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-2.png"
            Title="Architecto Beatae Vitae"
            Name="Social Media Marketing"
          />
          <BlogMainBottomCard
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-9.png"
            Title="Quidem Rerum Facilis"
            Name="Web Development"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleServiceWorks;
