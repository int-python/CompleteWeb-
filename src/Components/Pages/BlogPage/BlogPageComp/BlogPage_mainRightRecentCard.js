import React from 'react'
import './BlogPage_mainRightRecentCard.css'
import BlogPage_mainRightRecentCardInnerCard from './BlogPage_mainRightRecentCardInnerCard'

function BlogPage_mainRightRecentCard() {
    return (
        <div className="blogPage_mainRightRecentCard">
            <p className="blogPage_mainRightRecentCard_heading">Recent Posts</p>
            <BlogPage_mainRightRecentCardInnerCard 
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-3.png"
            Heading="Why Digital Marketing is important?"
            Date="27 Jul 2020"
            />
            <BlogPage_mainRightRecentCardInnerCard 
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Blog-2.png"
            Heading="What is SEO and How It Works?"
            Date="22 Jul 2020"
            />
            <BlogPage_mainRightRecentCardInnerCard 
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/Asset-9.png"
            Heading="Top 10 Tools for Social Media Management"
            Date="22 Jul 2020"
            />
            <BlogPage_mainRightRecentCardInnerCard 
            Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/blog-4-1.png"
            Heading="5 Easy Ways to Improve Your Business"
            Date="22 Jul 2020"
            />
        </div>
    )
}

export default BlogPage_mainRightRecentCard
