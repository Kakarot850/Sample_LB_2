import React from "react";

const Footer = () => {
    return (
        <div className="w-full px-8 ">
            <footer className="relative w-full bg-[#111111]  text-white rounded-t-3xl mt-10 p-10 border border-[#404c52] overflow-">
                <div className="max-w-6xl mx-auto flex flex-row justify-between relative z-10">
                    {/* LOGO + COPYRIGHT */}
                    <div className="space-y-2">
                        <div className="w-32 h-10 scale-130 rounded-md flex items-center justify-center">
                            <img src="/footer/logo.svg" alt="logo" className="w-[100px] h-auto" />
                        </div>

                        <p className="text-sm text-gray-400 mt-6 font-semibold">© 2025 Coderydurz.gg</p>
                        <p className="text-sm text-gray-400 font-semibold">All Rights Reserved</p>
                    </div>

                    <div className="flex flex-row justify-between gap-40">
                        {/* PAGES */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 tracking-wide">PAGES</h3>
                            <ul className="space-y-2">
                                <li className="text-[#FF383C] cursor-pointer hover:text-green-300 transition font-semibold">
                                    Leaderboard
                                </li>
                                <li className="text-gray-400 cursor-pointer hover:text-white font-semibold">Bonuses</li>
                                <li className="text-gray-400 cursor-pointer hover:text-white flex items-center gap-1 font-semibold">
                                    Stream <img src="/footer/link.svg" alt="link" />
                                </li>
                            </ul>
                        </div>

                        {/* SOCIALS */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 tracking-wide">SOCIALS</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-400 font-semibold">
                                    <a href="https://x.com/rydurz" target="_blank" rel="noopener noreferrer">
                                        <img src="/footer/twitter.svg" alt="twitter" />
                                        Twitter
                                    </a>
                                </li>

                                <li className="flex items-center gap-2 text-gray-400 font-semibold">
                                    <a href="https://x.com/coderydurzhub" target="_blank" rel="noopener noreferrer">
                                        <img src="/footer/twitter.svg" alt="twitter" />
                                        Twitter (Prizes)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* PARTNERS */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 tracking-wide">PARTNERS</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-1 text-gray-400 font-semibold">
                                    Roobet <img src="/footer/link.svg" alt="link" />
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
