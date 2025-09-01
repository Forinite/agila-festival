"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { PlayerType } from "@/app/lib/types/player";

interface PlayerModalProps {
    player: PlayerType;
    onClose: () => void;
    initialTab: "bio" | "videos" | "documents";
}

const PlayerModal: React.FC<PlayerModalProps> = ({ player, onClose, initialTab }) => {
    const [tab, setTab] = useState<"bio" | "videos" | "documents">(initialTab);

    // Handle backdrop click to close modal
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Ensure modal is rendered in a portal to avoid parent constraints
    return createPortal(
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] w-screen h-screen"
            onClick={handleBackdropClick}
            data-testid="player-modal-backdrop"
        >
            <div
                className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                data-testid="player-modal-content"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#0ea5a4]">{player.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-lg"
                        data-testid="player-modal-close"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b">
                    {["bio", "videos", "documents"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t as "bio" | "videos" | "documents")}
                            className={`pb-2 text-sm sm:text-base ${
                                tab === t ? "border-b-2 border-[#0ea5a4] font-semibold text-[#0ea5a4]" : "text-gray-600"
                            }`}
                            data-testid={`player-modal-tab-${t}`}
                        >
                            {t[0].toUpperCase() + t.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {tab === "bio" && (
                    <div data-testid="player-modal-bio">
                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                            <img
                                src={player.image || "/placeholder-player.jpg"}
                                alt={player.name}
                                className="w-48 h-48 rounded-lg object-cover"
                            />
                            <div>
                                <p><strong>Role:</strong> {player.role}</p>
                                <p><strong>Age:</strong> {player.age}</p>
                                <p><strong>Club:</strong> {player.club}</p>
                                <p><strong>Nationality:</strong> {player.nationality}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">{player.bio}</p>
                        <h4 className="font-semibold mt-4 mb-2">Achievements</h4>
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
                )}

                {tab === "videos" && (
                    <div data-testid="player-modal-videos">
                        <h4 className="font-semibold mb-4">Highlight Videos</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {player.videos?.length ? (
                                player.videos.map((v, i) => (
                                    <div key={i} className="relative pb-[56.25%]">
                                        <iframe
                                            src={v}
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            allowFullScreen
                                            title={`Video ${i + 1} for ${player.name}`}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No videos available.</p>
                            )}
                        </div>
                    </div>
                )}

                {tab === "documents" && (
                    <div data-testid="player-modal-documents">
                        <h4 className="font-semibold mb-4">Documents</h4>
                        {player.documents?.length ? (
                            <ul className="space-y-2">
                                {player.documents.map((doc, i) => (
                                    <li key={i}>
                                        <a
                                            href={doc.url}
                                            download
                                            className="text-[#0ea5a4] hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {doc.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No documents available.</p>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body // Render at the root of the DOM
    );
};

export default PlayerModal;