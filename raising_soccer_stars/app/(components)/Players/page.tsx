// app/components/PlayersSection.tsx
"use client";
// app/components/PlayersSection.tsx
import React, { useState, useMemo } from "react";
import {PlayerType} from "@/app/lib/types/player";
import players from "@/app/constants/players";



// Player type definition


const PlayersSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        role: "",
        nationality: "",
        club: "",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerType | null>(null);
    const playersPerPage = 12;

    // Filter and search logic
    const filteredPlayers = useMemo(() => {
        return players.filter((player) => {
            const matchesSearch = player.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesRole = filters.role ? player.role === filters.role : true;
            const matchesNationality = filters.nationality
                ? player.nationality === filters.nationality
                : true;
            const matchesClub = filters.club ? player.club === filters.club : true;
            return matchesSearch && matchesRole && matchesNationality && matchesClub;
        });
    }, [searchTerm, filters]);

    // Pagination logic
    const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
    const paginatedPlayers = filteredPlayers.slice(
        (currentPage - 1) * playersPerPage,
        currentPage * playersPerPage
    );

    // Unique filter options
    const roles = [...new Set(players.map((p) => p.role))];
    const nationalities = [...new Set(players.map((p) => p.nationality))];
    const clubs = [...new Set(players.map((p) => p.club))];

    return (
        <section className="pt-24 pb-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0ea5a4]">
                        Our Players
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-black/80">
                        Discover our roster of talented athletes, from rising stars to global
                        icons, shaping the future of football.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search players by name..."
                        className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5a4]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="p-3 rounded-lg border border-gray-300"
                        value={filters.role}
                        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                    >
                        <option value="">All Positions</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <select
                        className="p-3 rounded-lg border border-gray-300"
                        value={filters.nationality}
                        onChange={(e) =>
                            setFilters({ ...filters, nationality: e.target.value })
                        }
                    >
                        <option value="">All Nationalities</option>
                        {nationalities.map((nationality) => (
                            <option key={nationality} value={nationality}>
                                {nationality}
                            </option>
                        ))}
                    </select>
                    <select
                        className="p-3 rounded-lg border border-gray-300"
                        value={filters.club}
                        onChange={(e) => setFilters({ ...filters, club: e.target.value })}
                    >
                        <option value="">All Clubs</option>
                        {clubs.map((club) => (
                            <option key={club} value={club}>
                                {club}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Players Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedPlayers.map((player) => (
                        <div
                            key={player.id}
                            className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            {/* Player Image */}
                            <div className="relative w-full h-56 overflow-hidden">
                                <img
                                    src={player.image || "/placeholder-player.jpg"}
                                    alt={player.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <span className="absolute top-4 left-4 bg-[#ef4444] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {player.role}
                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#0ea5a4] mb-2">
                                    {player.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">Age: {player.age}</p>
                                <p className="text-sm text-gray-500 mb-4">
                                    Club: {player.club}
                                </p>
                                <button
                                    className="w-full bg-[#0ea5a4] text-white py-2 rounded-lg hover:bg-[#0c8b8a] transition-colors"
                                    onClick={() => setSelectedPlayer(player)}
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center gap-2">
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`px-4 py-2 rounded-lg ${
                                    currentPage === page
                                        ? "bg-[#0ea5a4] text-white"
                                        : "bg-gray-200"
                                }`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

             {/*Player Modal */}
            {selectedPlayer && (
                <PlayerModal
                    player={selectedPlayer}
                    onClose={() => setSelectedPlayer(null)}
                />
            )}
        </section>
    );
};

// Player Modal Component
const PlayerModal = ({
                         player,
                         onClose,
                     }: {
    player: PlayerType;
    onClose: () => void;
}) => {
    const [activeTab, setActiveTab] = useState<"bio" | "videos" | "documents">(
        "bio"
    );

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#0ea5a4]">{player.name}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b">
                    <button
                        className={`pb-2 ${
                            activeTab === "bio" ? "border-b-2 border-[#0ea5a4] font-semibold" : ""
                        }`}
                        onClick={() => setActiveTab("bio")}
                    >
                        Bio
                    </button>
                    <button
                        className={`pb-2 ${
                            activeTab === "videos" ? "border-b-2 border-[#0ea5a4] font-semibold" : ""
                        }`}
                        onClick={() => setActiveTab("videos")}
                    >
                        Videos
                    </button>
                    <button
                        className={`pb-2 ${
                            activeTab === "documents" ? "border-b-2 border-[#0ea5a4] font-semibold" : ""
                        }`}
                        onClick={() => setActiveTab("documents")}
                    >
                        Documents
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === "bio" && (
                    <div>
                        <div className="flex gap-6 mb-6">
                            <img
                                src={player.image || "/placeholder-player.jpg"}
                                alt={player.name}
                                className="w-48 h-48 rounded-lg object-cover"
                            />
                            <div>
                                <p>
                                    <strong>Role:</strong> {player.role}
                                </p>
                                <p>
                                    <strong>Age:</strong> {player.age}
                                </p>
                                <p>
                                    <strong>Club:</strong> {player.club}
                                </p>
                                <p>
                                    <strong>Nationality:</strong> {player.nationality}
                                </p>
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
                {activeTab === "videos" && (
                    <div>
                        <h4 className="font-semibold mb-4">Highlight Videos</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {player.videos.length > 0 ? (
                                player.videos.map((video, i) => (
                                    <div key={i} className="relative pb-[56.25%]">
                                        <iframe
                                            src={video}
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            allowFullScreen
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No videos available.</p>
                            )}
                        </div>
                    </div>
                )}
                {activeTab === "documents" && (
                    <div>
                        <h4 className="font-semibold mb-4">Documents</h4>
                        {player.documents.length > 0 ? (
                            <ul className="space-y-2">
                                {player.documents.map((doc, i) => (
                                    <li key={i}>
                                        <a
                                            href={doc.url}
                                            download
                                            className="text-[#0ea5a4] hover:underline"
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
        </div>
    );
};

export default PlayersSection;