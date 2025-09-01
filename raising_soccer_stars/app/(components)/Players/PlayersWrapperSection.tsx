"use client";

import React, { useState, useMemo, useCallback } from "react";
import { PlayerType } from "@/app/lib/types/player";
import players from "@/app/constants/players";
import ClientSearchAndFilters from "@/app/ui/Components/PlayersSectionUI/ClientSearchAndFilters";
import ClientPagination from "@/app/ui/Components/PlayersSectionUI/ClientPagination";
import PlayersSection from "./PlayersSection";
import {Grid2X2Check, Grid2X2Plus, Grid3X3, List, LucideGrid2X2, LucideGrid3x2, LucideGrid3x3} from "lucide-react";

const PlayersSectionWrapper: React.FC = () => {
    const [filteredPlayers, setFilteredPlayers] = useState<PlayerType[]>(players);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState<"card" | "list">("card");
    const playersPerPage = 10;

    // Memoize players to ensure stable reference
    const memoizedPlayers = useMemo(() => players, []);

    // Memoize onFilterChange
    const handleFilterChange = useCallback(
        (newFilteredPlayers: PlayerType[]) => {
            setFilteredPlayers(newFilteredPlayers);
            setCurrentPage(1); // Reset to page 1 on filter change
        },
        []
    );

    // Compute paginated players
    const paginatedPlayers = useMemo(() => {
        const startIndex = (currentPage - 1) * playersPerPage;
        return filteredPlayers.slice(startIndex, startIndex + playersPerPage);
    }, [filteredPlayers, currentPage]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
            {/* Heading */}
            <div className="text-center mb-12 animate-in fade-in duration-1000">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0ea5a4]">
                    Our Players
                </h1>
                <p className="text-base text-gray-600 max-w-xl mx-auto">
                    Discover our roster of talented athletes, from rising stars to global icons, shaping the future of football.
                </p>
            </div>


            <ClientSearchAndFilters
                players={memoizedPlayers}
                onFilterChange={handleFilterChange}
            />

            {/* View Toggle */}
            <div className="flex justify-end mb-6">
                <div className="flex gap-2">
                    <button
                        className={`px-4 py-2 rounded-md text-sm sm:text-base ${
                            viewMode === "card"
                                ? "bg-[#0ea5a4] text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        } transition-colors duration-300`}
                        onClick={() => setViewMode("card")}
                        data-testid="view-toggle-card"
                    >
                        <LucideGrid3x3 />
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md text-sm sm:text-base ${
                            viewMode === "list"
                                ? "bg-[#0ea5a4] text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        } transition-colors duration-300`}
                        onClick={() => setViewMode("list")}
                        data-testid="view-toggle-list"
                    >
                        <List />
                    </button>
                </div>
            </div>



            <PlayersSection initialPlayers={paginatedPlayers} viewMode={viewMode} />
            <ClientPagination
                totalPlayers={filteredPlayers.length}
                playersPerPage={playersPerPage}
                onPageChange={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default PlayersSectionWrapper;