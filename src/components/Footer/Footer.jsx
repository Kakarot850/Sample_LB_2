import React from "react";

const Footer = () => {
    return (
        <div className="w-full px-4 md:px-8">
            <footer className="relative w-full bg-[#111111] text-white rounded-t-3xl mt-10 p-6 md:p-10 border border-[#404c52] overflow-">
                <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-8 md:gap-0 relative z-10">
                    {/* LOGO + COPYRIGHT */}
                    <div className="space-y-2">
                        <div className="w-24 md:w-32 h-8 md:h-10 scale-130 rounded-md flex items-center justify-center">
                            <img src="/footer/logo.svg" alt="logo" className="w-[70px] md:w-[100px] h-auto" />
                        </div>

                        <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6 font-semibold">
                            © 2025 Coderydurz.gg
                        </p>
                        <p className="text-xs md:text-sm text-gray-400 font-semibold">All Rights Reserved</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-40">
                        {/* PAGES */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">
                                PAGES
                            </h3>
                            <ul className="space-y-2">
                                <li className="text-[#FF383C] cursor-pointer hover:text-green-300 transition font-semibold text-xs md:text-base">
                                    Leaderboard
                                </li>
                                <li className="text-gray-400 cursor-pointer hover:text-white font-semibold text-xs md:text-base">
                                    Bonuses
                                </li>
                                <li className="text-gray-400 cursor-pointer hover:text-white flex items-center gap-1 font-semibold text-xs md:text-base">
                                    Stream <img src="/footer/link.svg" alt="link" className="w-3 md:w-4 h-3 md:h-4" />
                                </li>
                            </ul>
                        </div>

                        {/* SOCIALS */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">
                                SOCIALS
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-center gap-2 text-gray-400 font-semibold text-xs md:text-base">
                                    <a
                                        href="https://x.com/rydurz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition"
                                    >
                                        <img
                                            src="/footer/twitter.svg"
                                            alt="twitter"
                                            className="w-4 md:w-5 h-4 md:h-5"
                                        />
                                        Twitter
                                    </a>
                                </li>

                                <li className="flex items-center gap-2 text-gray-400 font-semibold text-xs md:text-base">
                                    <a
                                        href="https://x.com/coderydurzhub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition"
                                    >
                                        <img
                                            src="/footer/twitter.svg"
                                            alt="twitter"
                                            className="w-4 md:w-5 h-4 md:h-5"
                                        />
                                        Twitter (Prizes)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* PARTNERS */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">
                                PARTNERS
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-1 text-gray-400 font-semibold text-xs md:text-base">
                                    Roobet <img src="/footer/link.svg" alt="link" className="w-3 md:w-4 h-3 md:h-4" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
