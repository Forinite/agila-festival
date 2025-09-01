//app/ui/Components/PlayersSectionUI/ClientPagination.tsx
"use client";

import React from "react";

interface ClientPaginationProps {
    totalPlayers: number;
    playersPerPage?: number;
    onPageChange: (page: number) => void;
    currentPage: number;
}

const ClientPagination: React.FC<ClientPaginationProps> = ({
                                                               totalPlayers,
                                                               playersPerPage = 10,
                                                               onPageChange,
                                                               currentPage,
                                                           }) => {
    const totalPages = Math.ceil(totalPlayers / playersPerPage);
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    const visiblePages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    return totalPages > 1 ? (
        <div className="mt-12 flex justify-center items-center gap-2 sm:gap-3">
            <button
                className="px-3 sm:px-4 py-2 bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300 transition-colors duration-300 text-sm sm:text-base"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                data-testid="pagination-prev"
            >
                ←
            </button>
            {startPage > 1 && (
                <span className="px-3 py-2 text-gray-500 text-sm sm:text-base">...</span>
            )}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${
                        currentPage === page
                            ? "bg-[#0ea5a4] text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                    } transition-colors duration-300`}
                    onClick={() => onPageChange(page)}
                    data-testid={`pagination-page-${page}`}
                >
                    {page}
                </button>
            ))}
            {endPage < totalPages && (
                <span className="px-3 py-2 text-gray-500 text-sm sm:text-base">...</span>
            )}
            <button
                className="px-3 sm:px-4 py-2 bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300 transition-colors duration-300 text-sm sm:text-base"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                data-testid="pagination-next"
            >
                →
            </button>
        </div>
    ) : null;
};

export default ClientPagination;