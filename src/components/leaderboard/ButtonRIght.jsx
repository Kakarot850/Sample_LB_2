import React from "react";

const ButtonRight = () => {
    return (
        <div className="relative hover:scale-105 transition-transform duration-200 cursor-pointer ">
            <div>
                <svg width="143" height="38" viewBox="0 0 143 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_158_604)">
                        <mask id="path-1-inside-1_158_604" fill="white">
                            <path d="M0 5.7C0 2.55198 2.55198 0 5.7 0H137.3C140.448 0 143 2.55198 143 5.7V32.3C143 35.448 140.448 38 137.3 38H5.7C2.55198 38 0 35.448 0 32.3V5.7Z" />
                        </mask>
                        <path
                            d="M0 5.7C0 2.55198 2.55198 0 5.7 0H137.3C140.448 0 143 2.55198 143 5.7V32.3C143 35.448 140.448 38 137.3 38H5.7C2.55198 38 0 35.448 0 32.3V5.7Z"
                            fill="white"
                            fill-opacity="0.07"
                        />
                        <g opacity="0.24" filter="url(#filter0_f_158_604)">
                            <ellipse cx="69" cy="35" rx="57" ry="35" fill="#E11313" />
                        </g>
                    </g>
                    <path
                        d="M0 0H143H0ZM143 32.3C143 36.0003 140 39 136.3 39H6.7C2.99969 39 0 36.0003 0 32.3C0 34.8957 2.55198 37 5.7 37H137.3C140.448 37 143 34.8957 143 32.3ZM0 38V0V38ZM143 0V38V0Z"
                        fill="url(#paint0_linear_158_604)"
                        fill-opacity="0.81"
                        mask="url(#path-1-inside-1_158_604)"
                    />
                    <defs>
                        <filter
                            id="filter0_f_158_604"
                            x="-40.3"
                            y="-52.3"
                            width="218.6"
                            height="174.6"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="26.15" result="effect1_foregroundBlur_158_604" />
                        </filter>
                        <linearGradient
                            id="paint0_linear_158_604"
                            x1="0"
                            y1="19"
                            x2="143"
                            y2="19"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#EA1E21" stop-opacity="0.25" />
                            <stop offset="0.5" stop-color="#FF0000" />
                            <stop offset="1" stop-color="#EA1E21" stop-opacity="0.25" />
                        </linearGradient>
                        <clipPath id="clip0_158_604">
                            <path
                                d="M0 5.7C0 2.55198 2.55198 0 5.7 0H137.3C140.448 0 143 2.55198 143 5.7V32.3C143 35.448 140.448 38 137.3 38H5.7C2.55198 38 0 35.448 0 32.3V5.7Z"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="absolute inset-0 uppercase flex items-center justify-center gap-2 text-white text-[11px] font-extrabold tracking-0 font-archivo">
                <img src="/leaderboard/roobet-logo.svg" alt="code icon" className="w-[22px] h-[22px]" />
                join Roobet
            </div>
        </div>
    );
};

export default ButtonRight;
