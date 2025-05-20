import React from "react";
import ContributorCard from "./card";

const contributors = [
  {
    name: "John Doe",
    level: "Intermediate",
    isTopContributor: true,
    profileImageUrl: "",
    progress: 75,
  },
  {
    name: "Jane Smith",
    level: "Beginner",
    isTopContributor: false,
    profileImageUrl: "",
    progress: 45,
  },
  {
    name: "Alice Johnson",
    level: "Advanced",
    isTopContributor: true,
    profileImageUrl: "",
    progress: 90,
  },
  {
    name: "John Doe",
    level: "Intermediate",
    isTopContributor: true,
    profileImageUrl: "",
    progress: 75,
  },
  {
    name: "Jane Smith",
    level: "Beginner",
    isTopContributor: false,
    profileImageUrl: "",
    progress: 45,
  },
  {
    name: "Alice Johnson",
    level: "Advanced",
    isTopContributor: true,
    profileImageUrl: "",
    progress: 90,
  },
];

const TopContributionsList = () => {
  return (
    <main className="bg-primary rounded-[12px] px-3 py-8 w-full min-h-[88dvh] flex flex-col justify-start items-center mt-3 gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contributors.map((itm, index) => (
          <ContributorCard key={index} {...itm} />
        ))}
      </div>
    </main>
  );
};

export default TopContributionsList;
