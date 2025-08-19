// src/components/BlogHeader.tsx
import React from 'react';

const BlogHeader = ({ title = 'Soccer Insights & News', subtitle = 'Stay updated with the latest trends, insights, and stories from the world of professional soccer and player development.' }) => {
    return (
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-500 mb-6">
                {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
};

export default BlogHeader;