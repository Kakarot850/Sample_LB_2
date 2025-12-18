import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ButtonRight from "../leaderboard/ButtonRIght";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoGift } from "react-icons/io5";
import { SiKick } from "react-icons/si";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
    {
        name: "leaderboard",
        to: "/",
        icon: <HiMiniTrophy className="size-[15px]" />,
    },
    {
        name: "bonus",
        to: "/bonus",
        icon: <IoGift className="size-[17px]" />,
    },
    {
        name: "stream",
        to: "/stream",
        icon: <SiKick className="size-[15px]" />,
    },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="w-full sticky top-0 z-20 bg-[#111111] py-3 md:py-4 px-4 md:px-8 border-b border-gray-800 opacity-100">
            <nav className="flex flex-row justify-between md:justify-around mx-auto max-w-7xl items-center">
                <Link to="/" onClick={closeMobileMenu}>
                    <img src="/footer/logo.svg" alt="logo" className="w-[70px] md:w-[100px] h-auto" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex flex-row uppercase gap-6 text-white font-bold">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className="relative flex flex-row items-center gap-2 pb-1 transition-all text-white"
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Text should ALWAYS be white */}
                                    <span>{item.name}</span>

                                    {/* Icon color changes only when active */}
                                    <span className={isActive ? "text-[#FF383C]" : "text-slate-500"}>{item.icon}</span>

                                    {/* Underline only when active */}
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-b-2 border-[#FF383C] w-6"></div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <ButtonRight />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white text-3xl focus:outline-none z-30"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-[60px] left-0 w-full bg-[#111111] border-b border-gray-800 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <ul className="flex flex-col gap-4 p-6 text-white font-bold uppercase">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={closeMobileMenu}
                            className="relative flex flex-row items-center gap-3 py-2 transition-all text-white text-lg"
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Icon color changes only when active */}
                                    <span className={isActive ? "text-[#FF383C]" : "text-slate-500"}>
                                        {React.cloneElement(item.icon, { className: "size-[20px]" })}
                                    </span>

                                    {/* Text should ALWAYS be white */}
                                    <span className={isActive ? "text-[#FF383C]" : ""}>{item.name}</span>

                                    {/* Border indicator when active */}
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 border-l-4 border-[#FF383C] h-8"></div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                    <div className="">
                        <ButtonRight />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
