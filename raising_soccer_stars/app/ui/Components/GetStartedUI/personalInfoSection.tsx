import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    age: string;
    position: string;
    currentClub: string;
}

interface PersonalInfoSectionProps {
    formData: FormData;
    errors: { [key: string]: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
                                                                     formData,
                                                                     errors,
                                                                     handleChange,
                                                                 }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const positions = [
        { value: 'goalkeeper', label: 'Goalkeeper' },
        { value: 'defender', label: 'Defender' },
        { value: 'midfielder', label: 'Midfielder' },
        { value: 'striker', label: 'Striker' },
        { value: 'winger', label: 'Winger' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle position selection
    const handlePositionSelect = (value: string) => {
        const syntheticEvent = {
            target: { name: 'position', value },
        } as React.ChangeEvent<HTMLSelectElement>;
        handleChange(syntheticEvent);
        setIsDropdownOpen(false);
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsDropdownOpen((prev) => !prev);
        }
        if (event.key === 'Escape') {
            setIsDropdownOpen(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="fullName">
                    Full Name *
                </label>
                <input
                    className={`flex h-12 w-full border bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 rounded-md p-3 ${errors.fullName ? 'border-[#ef4444]' : ''}`}
                    name="fullName"
                    placeholder="Enter your full name"
                    id="fullName"
                    aria-describedby="fullName-description"
                    aria-invalid={!!errors.fullName}
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleChange}
                />
                {errors.fullName && <p className="text-[#ef4444] text-sm">{errors.fullName}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="email">
                        Email *
                    </label>
                    <input
                        type="email"
                        className={`flex h-12 w-full border bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 rounded-md p-3 ${errors.email ? 'border-[#ef4444]' : ''}`}
                        name="email"
                        placeholder="your.email@example.com"
                        id="email"
                        aria-describedby="email-description"
                        aria-invalid={!!errors.email}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.email && <p className="text-[#ef4444] text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        className="flex h-12 w-full border bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 rounded-md p-3"
                        name="phone"
                        placeholder="+234..."
                        id="phone"
                        aria-describedby="phone-description"
                        aria-invalid={!!errors.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="position">
                        Position *
                    </label>
                    <div className="relative" ref={dropdownRef}>
                        <div
                            role="combobox"
                            aria-controls="position-options"
                            aria-expanded={isDropdownOpen}
                            aria-autocomplete="none"
                            tabIndex={0}
                            className={`flex h-12 w-full items-center justify-between border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0ea5a4] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 border-gray-300 rounded-md p-3 cursor-pointer ${errors.position ? 'border-[#ef4444]' : ''}`}
                            id="position"
                            aria-describedby="position-description"
                            aria-invalid={!!errors.position}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            onKeyDown={handleKeyDown}
                        >
              <span>
                {formData.position
                    ? positions.find((p) => p.value === formData.position)?.label || 'Select your position'
                    : 'Select your position'}
              </span>
                            <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </div>
                        {isDropdownOpen && (
                            <ul
                                id="position-options"
                                className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg"
                                role="listbox"
                                aria-labelledby="position"
                            >
                                {positions.map((position) => (
                                    <li
                                        key={position.value}
                                        role="option"
                                        aria-selected={formData.position === position.value}
                                        className={`px-3 py-2 text-sm hover:bg-[#0ea5a4] hover:text-white cursor-pointer ${formData.position === position.value ? 'bg-[#0ea5a4] text-white' : ''}`}
                                        onClick={() => handlePositionSelect(position.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handlePositionSelect(position.value);
                                            }
                                        }}
                                        tabIndex={0}
                                    >
                                        {position.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {errors.position && <p className="text-[#ef4444] text-sm">{errors.position}</p>}
                </div>
                <div className="space-y-2">
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="age">
                        Age *
                    </label>
                    <input
                        type="number"
                        className={`flex h-12 w-full border bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 rounded-md p-3 ${errors.age ? 'border-[#ef4444]' : ''}`}
                        name="age"
                        min="16"
                        max="40"
                        placeholder="18"
                        id="age"
                        aria-describedby="age-description"
                        aria-invalid={!!errors.age}
                        value={formData.age}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.age && <p className="text-[#ef4444] text-sm">{errors.age}</p>}
                </div>
            </div>
            <div className="space-y-2">
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" htmlFor="currentClub">
                    Current Club
                </label>
                <input
                    className="flex h-12 w-full border bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300 rounded-md p-3"
                    name="currentClub"
                    placeholder="Enter your current club (if any)"
                    id="currentClub"
                    aria-describedby="currentClub-description"
                    aria-invalid={!!errors.currentClub}
                    value={formData.currentClub}
                    onChange={handleChange}
                    onBlur={handleChange}
                />
            </div>
        </div>
    );
};

export default PersonalInfoSection;