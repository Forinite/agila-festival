import React from "react";
import { PlayerType } from "@/app/lib/types/player";
import ClientPlayerCardButtons from "@/app/ui/Components/PlayersSectionUI/ClientPlayerCardButtons";

interface PlayersSectionProps {
    initialPlayers: PlayerType[];
    viewMode: "card" | "list";
}

const PlayersSection: React.FC<PlayersSectionProps> = ({ initialPlayers, viewMode }) => {
    return (
        <section className="pt-24 pb-20 px-4 sm:px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto ">

                {/* Card View */}
                {viewMode === "card" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {initialPlayers.map((player, index) => (
                            <div
                                key={player.id}
                                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6"
                                style={{ animationDelay: `${index * 100}ms` }}
                                data-testid={`player-card-${player.id}`}
                            >
                                {/* Image */}
                                <div className="relative w-full h-48 sm:h-56 lg:h-64">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <img
                                        src={player.image || "/placeholder-player.jpg"}
                                        alt={player.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <span className="absolute top-3 left-3 bg-[#ef4444] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                    {player.role}
                  </span>
                                </div>

                                {/* Content */}
                                <div className="p-4 sm:p-5 flex flex-col flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#0ea5a4] mb-2">
                                        {player.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Age: {player.age} • Club: {player.club}
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">
                                            Achievements
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {player.achievements.map((ach, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center rounded-full border px-2 sm:px-3 py-1 font-medium text-xs border-gray-200 text-gray-700 bg-gray-100"
                                                >
                          {ach}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <ClientPlayerCardButtons player={player} isListView={false} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* List View */}
                {viewMode === "list" && (
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col divide-y divide-gray-200 animate-in fade-in duration-1000">

                            {/* Header Row (desktop only) */}
                            <div className="hidden md:flex items-center px-4 sm:px-6 py-3 font-semibold text-gray-800 bg-gray-50 text-sm sm:text-base">
                                <div className="w-20 flex-shrink-0">Image</div>
                                <div className="flex-1 min-w-0 pl-4">Name</div>
                                <div className="w-40 truncate">Club</div>
                                <div className="w-14 text-center">Age</div>
                                <div className="w-28 text-center">Actions</div>
                            </div>

                            {/* Player Rows */}
                            {initialPlayers.map((player, index) => (
                                <div
                                    key={player.id}
                                    className="flex items-center px-4 sm:px-6 py-3 bg-white hover:bg-gray-50 transition-colors duration-300 animate-in fade-in slide-in-from-bottom-6"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    data-testid={`player-list-item-${player.id}`}
                                >
                                    {/* Image */}
                                    <div className="w-20 h-20 flex-shrink-0">
                                        <img
                                            src={player.image || "/placeholder-player.jpg"}
                                            alt={player.name}
                                            className="w-full h-full object-cover rounded-md border border-gray-200"
                                        />
                                    </div>

                                    {/* Name + Role */}
                                    <div className="flex-1 min-w-0 pl-3 sm:pl-4">
                                        <p className="font-bold text-[#0ea5a4] text-sm sm:text-base truncate">
                                            {player.name}
                                        </p>
                                        <span className="inline-block text-[#ef4444] text-xs py-0.5 rounded-full">
              {player.role}
            </span>

                                        {/* Mobile-only: age + actions inline */}
                                        <div className="flex items-center justify-between mt-1 md:hidden">
                                            <span className="text-gray-600 text-xs">{player.age}</span>
                                            <ClientPlayerCardButtons player={player} isListView={true} />
                                        </div>
                                    </div>

                                    {/* Club (desktop only) */}
                                    <div className="hidden md:block w-40 text-gray-600 text-xs sm:text-sm truncate">
                                        {player.club}
                                    </div>

                                    {/* Age (desktop only) */}
                                    <div className="hidden md:block w-14 text-center text-gray-600 text-xs sm:text-sm">
                                        {player.age}
                                    </div>

                                    {/* Actions (desktop only) */}
                                    <div className="hidden md:flex w-28 justify-center">
                                        <ClientPlayerCardButtons player={player} isListView={true} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}



            </div>
        </section>
    );
};

export default PlayersSection;