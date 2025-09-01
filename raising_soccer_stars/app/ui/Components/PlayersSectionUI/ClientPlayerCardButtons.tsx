"use client";

import React, { useState } from "react";
import { PlayerType } from "@/app/lib/types/player";
import PlayerModal from "@/app/ui/Components/PlayerModal";

interface ClientPlayerCardButtonsProps {
    player: PlayerType;
    isListView: boolean;
}

const ClientPlayerCardButtons: React.FC<ClientPlayerCardButtonsProps> = ({ player, isListView }) => {
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerType | null>(null);
    const [initialTab, setInitialTab] = useState<"bio" | "videos" | "documents">("bio");

    // Handle button/icon click with stopPropagation
    const handleButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        tab: "bio" | "videos" | "documents"
    ) => {
        e.stopPropagation();
        setSelectedPlayer(player);
        setInitialTab(tab);
    };

    return (
        <>
            {isListView ? (
                <div className="group relative">
                    <button
                        className="text-[#0ea5a4] hover:text-[#0c8b8a] transition-colors duration-300"
                        onClick={(e) => handleButtonClick(e, "bio")}
                        data-testid={`player-list-profile-button-${player.id}`}
                        aria-label={`View profile for ${player.name}`}
                    >
                        {/*<svg*/}
                        {/*    className="w-4 h-4 sm:w-5 sm:h-5"*/}
                        {/*    fill="none"*/}
                        {/*    stroke="currentColor"*/}
                        {/*    viewBox="0 0 24 24"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*>*/}
                        {/*    <path*/}
                        {/*        strokeLinecap="round"*/}
                        {/*        strokeLinejoin="round"*/}
                        {/*        strokeWidth="2"*/}
                        {/*        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*/}
                        {/*    />*/}
                        {/*</svg>*/}

                        <div className={'text-xs md:text-sn px-2 py-1 rounded-sm bg-teal-500 text-white cursor-pointer hover:scale-110 transition-all'}> <span className={'md:inline hidden'}>View</span> Profile</div>
                    </button>
                    <span className="absolute hidden group-hover:block bg-gray-800 text-white text-[10px] sm:text-xs rounded py-0.5 px-1.5 sm:-top-8 -top-5 right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 whitespace-nowrap">
            View Profile
          </span>
                </div>
            ) : (
                <div className="mt-auto flex flex-wrap gap-2 sm:gap-3">
                    {player.documents?.length ? (
                        <button
                            className="flex-1 text-xs sm:text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                            onClick={(e) => handleButtonClick(e, "documents")}
                            data-testid={`player-card-documents-button-${player.id}`}
                        >
                            Docs
                        </button>
                    ) : null}
                    {player.videos?.length ? (
                        <button
                            className="flex-1 text-xs sm:text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                            onClick={(e) => handleButtonClick(e, "videos")}
                            data-testid={`player-card-videos-button-${player.id}`}
                        >
                            Videos
                        </button>
                    ) : null}
                    <button
                        className="flex-1 text-xs sm:text-sm bg-[#0ea5a4] text-white px-3 py-2 rounded-lg hover:bg-[#0c8b8a] transition-colors duration-300"
                        onClick={(e) => handleButtonClick(e, "bio")}
                        data-testid={`player-card-profile-button-${player.id}`}
                    >
                        View Profile
                    </button>
                </div>
            )}
            {selectedPlayer && (
                <PlayerModal
                    player={selectedPlayer}
                    onClose={() => setSelectedPlayer(null)}
                    initialTab={initialTab}
                />
            )}
        </>
    );
};

export default ClientPlayerCardButtons;