import FirstRankCard from "./FirstRankCard";
import SecondRankCard from "./SecondRankCard";
import ThirdRankCard from "./ThirdRankCard";
import Card from "./Card";
import Timer from "./Timer";
import LBTable from "./LBTable";
import ButtonRight from "./ButtonRIght";
import ButtonLeft from "./ButtonLeft";

// Synthetic leaderboard data
const leaderboardData = [
    { username: "ethan99", wagered: 2521000.75, prize: 2000 },
    { username: "zo**", wagered: 2315000.0, prize: 1500 },
    { username: "xi**", wagered: 2104000.25, prize: 1000 },
    { username: "ra**", wagered: 1989000.1, prize: 750 },
    { username: "mi**", wagered: 1873200.65, prize: 500 },
];

export const Leaderboard = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#111111] pb-10 gap-20 font-archivo ">
            <section className="relative w-full h-[1400px] md:h-[900px]  ">
                {/* BACKGROUND IMAGE */}
                <img src="/leaderboard/bg.png" alt="bg" className=" w-full h-full object-cover" />

                {/* CONTENT WRAPPER (on top of bg) */}
                <div className="absolute  top-10 left-[50%] -translate-x-1/2 flex flex-col items-center px-4 gap-15 ">
                    <div className="flex flex-col items-center gap-0">
                        {/* TITLE IMAGE */}
                        <div className="relative">
                            <div className="absolute w-[698px] h-[73px] bg-[#4F26E3] opacity-35 blur-[75.12px] top-1/2 -translate-y-1/2"></div>
                            <img src="/leaderboard/title-logo.png" alt="Leaderboard" className="max-md:scale-160" />
                        </div>

                        {/* CODE + JOIN STAKE ROW */}
                        <div className="flex flex-col md:flex-row items-center gap-4 ">
                            <ButtonLeft />
                            <ButtonRight />
                        </div>
                    </div>
                    {/* RANK CARDS */}
                    <div className="flex flex-col md:flex-row  justify-center gap-10 mt-5">
                        <SecondRankCard />
                        <div className="-mt-8 ">
                            <FirstRankCard />
                        </div>
                        <ThirdRankCard />
                    </div>

                    {/* TIMER SECTION */}
                    <div className="flex flex-col items-center gap-2 -mt-10 ">
                        <p className="text-[14px] md:text-[17px] uppercase tracking-[0.15em] text-gray-300 font-bold font-archivo">
                            Leaderboard ends in
                        </p>
                        <Timer />
                    </div>
                </div>
            </section>
            {/* LEADERBOARD TABLE */}
            <LBTable lbData={leaderboardData} />

            {/* winner ttitle and cards */}
            <div className="flex flex-col gap-10 font-archivo items-center">
                <div className="flex flex-col uppercase items-center justify-center gap-0 leading-tight">
                    <h1 className="text-[27px] md:text-[51px] text-white font-extrabold font-outfit">
                        recent{" "}
                        <span className="bg-[linear-gradient(to_top,#0917DE_0%,#596AFF_100%)] bg-clip-text text-transparent ">
                            winners
                        </span>
                    </h1>
                    <p className="text-[#C4C4C4] text-[14px] md:text-[20px] font-semibold text-center px-5">
                        CLICK THE CARDS BELOW TO SEE THE FULL LIST OF WINNERS
                    </p>
                </div>
                <div className="flex md:flex-row flex-col gap-8 text-white">
                    <Card userName="steve" />
                    <Card userName="luies" />
                    <Card userName="lexy" />
                </div>
            </div>
        </div>
    );
};
