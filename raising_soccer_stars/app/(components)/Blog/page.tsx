// src/components/Blog.jsx
import React from 'react';
import BlogHeader from "@/app/ui/Components/BlogHeader";
import FeaturedPost from "@/app/ui/Components/FeaturedPost";
import PostCard from "@/app/ui/Components/PostCard";
import Newsletter from "@/app/ui/Components/Newsletter";
// import BlogHeader from './BlogHeader';
// import FeaturedPost from './FeaturedPost';
// import PostCard from './PostCard';
// import Newsletter from './Newsletter';

const posts = [
    {
        id: 1,
        title: 'The Rise of Nigerian Football: A New Era of Global Recognition',
        badges: ['Featured', 'Industry Insights'],
        date: 'March 15, 2024',
        readTime: '5 min read',
        description:
            'Exploring how Nigerian players are making their mark on the international stage and what this means for upcoming talent.',
    },
    {
        id: 2,
        title: 'Contract Negotiation Tips: What Every Player Should Know',
        badges: ['Career Advice'],
        date: 'March 10, 2024',
        readTime: '7 min read',
        description:
            'Essential guidance for players entering contract negotiations, from understanding clauses to maximizing your worth.',
    },
    {
        id: 3,
        title: "Youth Development: Building Tomorrow's Soccer Stars",
        badges: ['Youth Development'],
        date: 'March 5, 2024',
        readTime: '6 min read',
        description:
            'The importance of proper youth development programs and how young players can maximize their potential.',
    },
    {
        id: 4,
        title: 'Transfer Window Insights: Navigating the Market',
        badges: ['Transfers'],
        date: 'February 28, 2024',
        readTime: '8 min read',
        description:
            'Understanding the transfer market dynamics and how players can position themselves for successful moves.',
    },
    {
        id: 5,
        title: 'Mental Health in Professional Soccer: Breaking the Silence',
        badges: ['Player Wellness'],
        date: 'February 20, 2024',
        readTime: '10 min read',
        description:
            'Addressing the mental health challenges faced by professional players and the support systems available.',
    },
    {
        id: 6,
        title: "Women's Soccer in Africa: Breaking Barriers",
        badges: ["Women's Soccer"],
        date: 'February 15, 2024',
        readTime: '6 min read',
        description:
            'Celebrating the growth of women’s soccer across Africa and the opportunities emerging for female players.',
    },
];
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