import CommunityCard from "./communitycard";

const data = [
  {
    title: "Healthy Receipes",
    subtitle: "Find recipes that stay you on track",
    NoOfComments: 30,
  },
  {
    title: "Workout Tips",
    subtitle: "Find workout tips that stay you on track",
    NoOfComments: 30,
  },
  {
    title: "Motivation and success stories",
    subtitle: "Find stories that stay you on track",
    NoOfComments: 30,
  },
];

export default function Communities() {
  return (
    <main className="bg-primary rounded-[12px] px-3 py-8 w-full h-[88dvh] flex flex-col justify-start items-center mt-3 gap-6">
      <p className="text-4xl font-noto-serif font-bold text-black text-center">
        Explore Community
      </p>
      <section className="w-full grid grid-cols-2 xl:grid-cols-3 gap-3">
        {data?.map((itm) => (
          <CommunityCard
            title={itm?.title}
            subtitle={itm?.subtitle}
            NoOfComments={itm?.NoOfComments}
          />
        ))}
      </section>
    </main>
  );
}
