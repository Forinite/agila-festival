// components/Header.tsx
'use client'

// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, Menu } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/players", label: "Players" },
        { href: "/contract", label: "Contract" },
        { href: "/bio", label: "Bio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact Us" },
        { href: "/get-started", label: "Get Started" },
    ];

    return (
        <header className="bg-gray-200 w-full z-50  sticky top-0 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 h-[100px] relative">
                {/* Logo */}
                <div className="relative h-[100px] w-[180px] " >
                    <Image
                        src="/ASTAlogo.jpg"
                        alt="Absolute Trust Soccer Agency Logo"
                        fill
                        className="object-contain "
                    />
                </div>

                {/* Contact Info */}
                <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-orange-50 rounded-full border border-orange-200 shadow-sm">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                        <Phone size={14} className="text-orange-500" />
                        +234 913 114 8498
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Mail size={14} className="text-orange-500" />
                        info@atsan.com.ng
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden  md:flex flex-wrap gap-8 font-bold text-sm font-serif   min-w-[350px]  py-4 h-full items-center justify-start">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative text-black hover:text-orange-600 transition-colors duration-200"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-orange-600 transition-all duration-300 hover:w-full"></span>
                        </Link>
                    ))}
                </nav>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden w-[50px] h-[50px] bg-blue-700 text-white font-bold rounded-md flex items-center justify-center shadow-md hover:bg-blue-800 hover:shadow-lg transition mr-4  flex-col  text-[11px]"
                    onClick={() => setMenuOpen(true)}
                >
                    <Menu className={'w-5'} />
                    Menu
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[9999] transform transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/[0.1] "
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div className="absolute right-0 top-0 h-full w-[75%] sm:w-[300px] bg-gray-900/[0.9] text-white shadow-2xl flex flex-col">
                    <div
                        className="bg-blue-900/[0.9] text-white text-3xl p-4 cursor-pointer hover:bg-blue-800 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </div>
                    <div className="flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-semibold p-4 border-b border-black hover:text-orange-500 hover:bg-gray-800 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
