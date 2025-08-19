// app/components/PlayersSection.tsx
import React from "react";
import players from "../../constants/players";

const PlayersSection = () => {
    return (
        <section className="pt-24 pb-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0ea5a4]">
                        Our Players
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-black/80">
                        Meet the talented athletes we represent — from rising stars to
                        established professionals making their mark on the global stage.
                    </p>
                </div>

                {/* Players Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {players.map((player, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
                            style={{
                                animationDelay: `${idx * 100}ms`,
                                animationDuration: "800ms",
                            }}
                        >
                            {/* Player Image */}
                            <div className="relative w-full h-64 overflow-hidden">
                                <img
                                    src={player.image || "/placeholder-player.jpg"}
                                    alt={player.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 inline-block bg-[#ef4444] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {player.role}
                </span>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-1 p-6">
                                {/* Name & Age */}
                                <div className="mb-4">
                                    <h3 className="tracking-tight text-2xl font-bold text-[#0ea5a4]">
                                        {player.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">Age: {player.age}</p>
                                </div>

                                {/* Current Club */}
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-1">Current Club</h4>
                                    <p className="text-black/80">{player.club}</p>
                                </div>

                                {/* Achievements */}
                                <div className="mt-auto">
                                    <h4 className="font-semibold mb-2">Achievements</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {player.achievements.map((ach, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center rounded-full border px-3 py-1 font-medium text-xs border-gray-200 text-gray-700 bg-gray-100"
                                            >
                        {ach}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlayersSection;
