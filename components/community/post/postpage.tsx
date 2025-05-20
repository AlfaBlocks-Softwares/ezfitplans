import PostForm from "./postform";

const questions = [
  { question: "Best PostWorkout Meals?", commentsCount: 20 },
  { question: "Best dietplan?", commentsCount: 20 },
  { question: "Pre-workout snacks?", commentsCount: 15 },
  { question: "Post-leg-day recovery meals?", commentsCount: 8 },
];

export default function PostPage() {
  return (
    <main className="bg-primary rounded-[12px] px-3 py-8 w-full min-h-[88dvh] flex flex-col justify-start items-center mt-3 gap-6">
      <p className="text-4xl font-noto-serif font-bold text-black text-center">
        What's on your mind? Start a discussion!
      </p>
      <section className="w-full flex flex-col justify-center items-center gap-2">
        {questions?.map((item, index) => (
          <PostForm
            key={index}
            question={item.question}
            commentsCount={item.commentsCount}
          />
        ))}
      </section>
    </main>
  );
}
