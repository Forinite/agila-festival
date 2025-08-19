'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Phone, Mail, Menu, X } from 'lucide-react';
// // app/ui/Components/Navbar.tsx
// "use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/players', label: 'Players' },
        { href: '/contract', label: 'Contract' },
        { href: '/bio', label: 'Bio' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact Us' },
        { href: '/get-started', label: 'Get Started' },
    ];

    return (
        <header className="w-full sticky top-0 z-50 bg-teal-500 dark:bg-teal-600 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-20">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-32 md:h-16 md:w-44 flex items-center">
                    <Image
                        src="/ASTAlogo.jpg"
                        alt="Absolute Trust Soccer Agency Logo"
                        fill
                        priority
                        className="object-contain"
                        onError={(e) => (e.currentTarget.src = '/placeholder-logo.png')}
                    />
                </Link>

                {/* Contact Info (Desktop) */}
                <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-full border border-gray-200/30 bg-white/10 dark:bg-gray-800/10 shadow-sm">
                    <a
                        href="tel:+2349131148498"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-200 dark:hover:text-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
                    >
                        <Phone size={14} />
                        +234 913 114 8498
                    </a>
                    <a
                        href="mailto:info@atsan.com.ng"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-200 dark:hover:text-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
                    >
                        <Mail size={14} />
                        info@atsan.com.ng
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex gap-6 font-semibold text-base font-serif items-center"
                    aria-label="Main navigation"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative text-white hover:text-gray-200 dark:hover:text-gray-300 transition-colors duration-200 group ${
                                pathname === item.href ? 'text-gray-200 dark:text-gray-300' : ''
                            }`}
                            aria-current={pathname === item.href ? 'page' : undefined}
                        >
                            {item.label}
                            <span
                                className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-teal-400 ${
                                    pathname === item.href ? 'w-full' : ''
                                }`}
                            ></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden w-12 h-12 rounded-md flex flex-col items-center justify-center bg-teal-400 dark:bg-teal-500 text-white hover:bg-teal-300 dark:hover:bg-teal-400 shadow-md transition"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                >
                    <Menu className="w-5" />
                    <span className="text-xs">Menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[9999] transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } animate-in slide-in-from-right`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Slide Panel */}
                <div className="absolute right-0 top-0 h-full w-4/5 sm:w-80 bg-teal-500 dark:bg-teal-600 shadow-2xl flex flex-col">
                    {/* Close Button */}
                    <button
                        className="flex items-center justify-end p-4 bg-teal-400 dark:bg-teal-500 text-white hover:bg-teal-300 dark:hover:bg-teal-400 transition"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        aria-expanded={menuOpen}
                    >
                        <X size={26} />
                    </button>

                    {/* Mobile Nav Links */}
                    <nav className="flex flex-col" aria-label="Mobile navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-semibold p-4 border-b border-gray-200/30 text-white hover:bg-teal-400 dark:hover:bg-teal-500 transition ${
                                    pathname === item.href ? 'bg-teal-400 dark:bg-teal-500' : ''
                                }`}
                                onClick={() => setMenuOpen(false)}
                                aria-current={pathname === item.href ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}