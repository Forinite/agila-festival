

// src/pages/About.tsx

import React from "react";

interface InfoCardProps {
    title: string;
    description: string;
    delay?: string; // animation delay (e.g., "200ms")
}

function InfoCard({ title, description, delay }: InfoCardProps) {
    return (
        <div
            className="rounded-lg bg-white shadow-md hover:shadow-lg transition-transform duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom-6"
            style={{ animationDelay: delay, animationDuration: "800ms" }}
        >
            <div className="flex flex-col space-y-2 p-6 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0ea5a4] text-center leading-snug">
                    {title}
                </h3>
            </div>
            <div className="p-6 pt-0">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center">
                    {description}
                </p>
            </div>
        </div>
    );
}

import { firstGridCards, secondGridCards } from "@/app/constants/aboutpage";

const AboutPage = () => {
    return (
        <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0ea5a4] mb-4 sm:mb-6">
                        About Absolute Trust Soccer Agency
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto">
                        Founded on the principles of integrity, excellence, and unwavering
                        commitment to our clients' success.
                    </p>
                </div>

                {/* First Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {firstGridCards.map((card, index) => (
                        <InfoCard key={index} {...card} />
                    ))}
                </div>

                {/* Second Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {secondGridCards.map((card, index) => (
                        <InfoCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
}


export default AboutPage

