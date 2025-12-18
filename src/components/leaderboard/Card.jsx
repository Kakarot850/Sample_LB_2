import React from "react";

const Card = ({ userName = "Pikachu" }) => {
    return (
        <div className="relative w-[235px] h-[283px] font-archivo hover:scale-105 cursor-pointer transition-all duration-300 overflow-clip">
            <img src="/winner-card-bg.png" alt="" className="" />
            <div className="absolute inset-0 height-full ">
                <div className="flex flex-col items-center justify-around py-4 h-full relative">
                    {/* <div
                        class="absolute w-[160.6px] h-[100.4px] bottom-0 left-1/2 -translate-x-1/2 
         bg-[#0720FF]
         opacity-80
         blur-[51.415px]
         rounded-full"
                    ></div> */}

                    <div
                        className="absolute top-0 left-0 w-[93px] text-center border-[#2F97D6]  border py-0.5 border-l-0 border-t-0 bg-[linear-gradient(to_top,rgba(7,32,255,0.33)_0%,rgba(112,126,255,0.33)_100%)]
 rounded-tl-xl rounded-br-lg text-[10px]"
                    >
                        JAN 2025
                    </div>
                    <img src="/pig.svg" alt="" className="size-[90px] " />
                    <div className="flex flex-col items-center  gap-0 ">
                        <p className="uppercase font-bold text-[24px] bg-[linear-gradient(to_top,#0917DE_0%,#596AFF_100%)]  bg-clip-text text-transparent flex flex-col items-center gap-2">
                            {userName}
                        </p>
                        {/* winner */}
                        <div className="flex flex-row gap-2 items-baseline">
                            <span className="size-[12px]">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.48863 1.33121e-06C4.37384 1.33121e-06 3.27918 0.0908674 2.21318 0.265282C2.10611 0.282786 2.00874 0.337782 1.93848 0.420449C1.86821 0.503115 1.82962 0.608068 1.82959 0.716563V0.952571C1.32525 1.04832 0.828234 1.16297 0.338533 1.29652C0.244332 1.32224 0.160836 1.37744 0.100264 1.45403C0.0396914 1.53063 0.00522259 1.6246 0.00190111 1.72219C-0.0254535 2.49684 0.243236 3.25282 0.753341 3.83645C1.26345 4.42007 1.97667 4.78752 2.74801 4.86409C3.22461 5.40303 3.84952 5.78952 4.5446 5.97521C4.48733 6.44426 4.34603 6.89914 4.12747 7.31808H3.96403C3.72142 7.31808 3.48875 7.41446 3.3172 7.58601C3.14565 7.75756 3.04927 7.99023 3.04927 8.23284V9.75744H2.59189C2.1711 9.75744 1.82959 10.099 1.82959 10.5197C1.82959 10.7722 2.0345 10.9771 2.28697 10.9771H8.69029C8.8116 10.9771 8.92793 10.9289 9.01371 10.8432C9.09948 10.7574 9.14767 10.641 9.14767 10.5197C9.14767 10.099 8.80616 9.75744 8.38537 9.75744H7.92799V8.23284C7.92799 7.99023 7.83162 7.75756 7.66007 7.58601C7.48852 7.41446 7.25584 7.31808 7.01323 7.31808H6.8498C6.63126 6.89913 6.48996 6.44425 6.43267 5.97521C7.12774 5.78952 7.75265 5.40303 8.22925 4.86409C9.00059 4.78752 9.71382 4.42007 10.2239 3.83645C10.734 3.25282 11.0027 2.49684 10.9754 1.72219C10.972 1.6246 10.9376 1.53063 10.877 1.45403C10.8164 1.37744 10.7329 1.32224 10.6387 1.29652C10.1464 1.1623 9.64902 1.04756 9.14767 0.952571V0.716563C9.14765 0.608068 9.10906 0.503115 9.03879 0.420449C8.96852 0.337782 8.87116 0.282786 8.76408 0.265282C7.68125 0.0883221 6.58583 -0.000396381 5.48863 1.33121e-06ZM0.930078 2.08687C1.22707 2.01247 1.52711 1.94539 1.82959 1.88441V2.43936C1.82959 2.89064 1.91131 3.32241 2.06133 3.72186C1.75443 3.56151 1.49111 3.32897 1.29404 3.04425C1.09697 2.75954 0.972066 2.43058 0.930078 2.08687ZM10.0472 2.08687C10.0053 2.43052 9.88045 2.75883 9.68349 3.04354C9.48653 3.32825 9.22333 3.56083 8.91654 3.72125C9.06595 3.32302 9.14767 2.89064 9.14767 2.43936V1.88441C9.45015 1.94478 9.7502 2.01247 10.0472 2.08687Z"
                                        fill="#0720FF"
                                    />
                                </svg>
                            </span>
                            <p className="uppercase font-bold text-[16px]">winner</p>
                        </div>
                    </div>
                    {/* button */}
                    <div className="rounded-xl  overflow-clip w-[191px] ">
                        <div className="bg-[#212426] w-full ">
                            <p className="flex flex-row justify-center gap-1 items-center bg-[#000000] ">
                                <span className="text-[#FF0004] text-xl ">$</span>3000
                            </p>
                        </div>
                        <button className="uppercase font-medium text-[10px] text-white bg-[linear-gradient(to_top,rgba(7,32,255,1)_0%,rgba(112,126,255,1)_100%)] w-full py-1 hover:scale-105 transition-all duration-200">
                            total prize pool
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
