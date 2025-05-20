import React from "react";
import ChallengeCard from "./challengecard";

const challenges = [
  {
    title: '🏋️ "30-Day Squat Challenge" - Build lower body strength!',
    startDate: "12-03-2025",
    endDate: "12-03-2025",
  },
  {
    title: '💧 "Hydration Challenge" - Drink more water daily',
    startDate: "12-03-2025",
    endDate: "12-03-2025",
  },
  {
    title: '🚶 "10k Steps Challenge" - Track and beat your daily step goal!',
    startDate: "12-03-2025",
    endDate: "12-03-2025",
  },
];

const ChallengeList = () => {
  return (
    <main className="bg-primary rounded-[12px] px-3 py-8 w-full min-h-[88dvh] flex flex-col justify-start items-center mt-3 gap-12">
      <p className="w-full text-4xl font-noto-serif font-bold text-black text-start">
        Popular Challenges
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </main>
  );
};

export default ChallengeList;
