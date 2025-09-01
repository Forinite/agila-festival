//app/ui/Components/PlayersSectionUI/ClientSearchAndFilters.tsx
"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { PlayerType } from "@/app/lib/types/player";

interface ClientSearchAndFiltersProps {
    players: PlayerType[];
    onFilterChange: (filteredPlayers: PlayerType[]) => void;
}

interface DropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    id: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange, placeholder, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    const handleOptionSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="space-y-1 w-full sm:w-56">
            <label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative" ref={dropdownRef}>
                <div
                    role="combobox"
                    aria-controls={`${id}-options`}
                    aria-expanded={isOpen}
                    tabIndex={0}
                    className="flex h-11 w-full items-center justify-between border bg-white text-sm rounded-full p-3 cursor-pointer border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5a4] shadow-sm hover:bg-gray-50 transition-colors duration-200"
                    id={id}
                    onClick={() => setIsOpen((prev) => !prev)}
                    onKeyDown={handleKeyDown}
                >
                    <span className="line-clamp-1">{value || placeholder}</span>
                    <svg
                        className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isOpen && (
                    <ul
                        id={`${id}-options`}
                        className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg animate-in fade-in duration-200"
                        role="listbox"
                        aria-labelledby={id}
                    >
                        <li
                            role="option"
                            aria-selected={value === ""}
                            className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#0ea5a4] hover:text-white ${value === "" ? "bg-[#0ea5a4] text-white" : ""}`}
                            onClick={() => handleOptionSelect("")}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleOptionSelect("");
                                }
                            }}
                            tabIndex={0}
                        >
                            {placeholder}
                        </li>
                        {options.map((option) => (
                            <li
                                key={option}
                                role="option"
                                aria-selected={value === option}
                                className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#0ea5a4] hover:text-white ${value === option ? "bg-[#0ea5a4] text-white" : ""}`}
                                onClick={() => handleOptionSelect(option)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleOptionSelect(option);
                                    }
                                }}
                                tabIndex={0}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const ClientSearchAndFilters: React.FC<ClientSearchAndFiltersProps> = ({
                                                                           players,
                                                                           onFilterChange,
                                                                       }) => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        role: "",
        nationality: "",
        club: "",
    });

    // Compute filtered players
    const filteredPlayers = useMemo(() => {
        return players.filter((p) => {
            const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
            const matchesRole = filters.role ? p.role === filters.role : true;
            const matchesNationality = filters.nationality ? p.nationality === filters.nationality : true;
            const matchesClub = filters.club ? p.club === filters.club : true;
            return matchesSearch && matchesRole && matchesNationality && matchesClub;
        });
    }, [search, filters, players]);

    // Only call onFilterChange when filteredPlayers changes
    useEffect(() => {
        onFilterChange(filteredPlayers);
    }, [filteredPlayers, onFilterChange]);

    // Unique dropdown options
    const roles = useMemo(() => [...new Set(players.map((p) => p.role))], [players]);
    const nationalities = useMemo(() => [...new Set(players.map((p) => p.nationality))], [players]);
    const clubs = useMemo(() => [...new Set(players.map((p) => p.club))], [players]);

    return (
        <div className="mb-12 flex flex-wrap gap-4 justify-center items-center animate-in fade-in duration-1000">
            <div className="relative w-full sm:w-80">
                <input
                    type="text"
                    placeholder="Search players by name..."
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#0ea5a4] outline-none text-sm sm:text-base bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <Dropdown
                label="Position"
                options={roles}
                value={filters.role}
                onChange={(value) => setFilters((prev) => ({ ...prev, role: value }))}
                placeholder="All Positions"
                id="role-filter"
            />
            <Dropdown
                label="Nationality"
                options={nationalities}
                value={filters.nationality}
                onChange={(value) => setFilters((prev) => ({ ...prev, nationality: value }))}
                placeholder="All Nationalities"
                id="nationality-filter"
            />
            <Dropdown
                label="Club"
                options={clubs}
                value={filters.club}
                onChange={(value) => setFilters((prev) => ({ ...prev, club: value }))}
                placeholder="All Clubs"
                id="club-filter"
            />
        </div>
    );
};

export default ClientSearchAndFilters;