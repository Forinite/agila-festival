// src/components/Blog.jsx
import React from 'react';
import BlogHeader from "@/app/ui/Components/BlogHeader";
import FeaturedPost from "@/app/ui/Components/FeaturedPost";
import PostCard from "@/app/ui/Components/PostCard";
import Newsletter from "@/app/ui/Components/Newsletter";
import {posts} from "@/app/constants/blogpage";


const Blog = () => {
    return (
        <div className="pt-24 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <BlogHeader />
                <FeaturedPost post={posts[0]} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))}
                </div>
                <Newsletter />
            </div>
        </div>
    );
};

export default Blog;