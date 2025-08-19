// src/components/PostMeta.tsx
import React from 'react';


const PostMeta = ({ date, readTime }) => {
    return (
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
        </div>
    );
};

export default PostMeta;