// app/ui/PostCard.tsx
import React from 'react';
import Badge from "@/app/ui/Components/Bagde";
import PostMeta from "@/app/ui/Components/PostMedia";
import Link from "next/link";




interface PostCardProps {
    post: {
        id: string; // Added id for routing
        title: string;
        badges: string[];
        date: string;
        readTime: string;
        description: string;
        image?: string; // Optional image URL
    };
    index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
    return (
        <article
            className="rounded-lg bg-gradient-card shadow-card hover:shadow-hero transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer animate-in slide-in-from-bottom-6"
            style={{ animationDelay: `${index * 100}ms`, animationDuration: '800ms' }}
            aria-label={`Blog post: ${post.title}`}
        >
            <Link href={`/post/${post.id}`} className="block">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={`${post.title} thumbnail`}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                No Image
              </span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        {post.badges.map((badge, i) => (
                            <Badge key={i} text={badge} />
                        ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <PostMeta date={post.date} readTime={post.readTime} />
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mt-3 mb-4 line-clamp-3">
                        {post.description}
                    </p>
                    <button
                        className="inline-flex items-center px-3 py-1 rounded-md bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 hover:text-teal-600 font-semibold text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        aria-label={`Read more about ${post.title}`}
                    >
                        Read More →
                    </button>
                </div>
            </Link>
        </article>
    );
};

export default PostCard;