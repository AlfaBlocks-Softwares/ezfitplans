import UserAverageReviews from "./averagereviews";
import ReviewCard from "./clientsreviews";

const userData = {
  name: "John Doe",
  title: "Successful Diet Pioneer",
  rating: 4.9,
  totalReviews: 277,
  ratingDistribution: {
    5: 75, // percentage for 5 stars
    4: 18, // percentage for 4 stars
    3: 5, // percentage for 3 stars
    2: 1, // percentage for 2 stars
    1: 1, // percentage for 1 stars
  },
};

const reviewsData = [
  {
    id: 1,
    name: "James",
    type: "workout plan client",
    rating: 5,
    comment: "Great coach. Outstanding plans.",
  },
  {
    id: 2,
    name: "James",
    type: "workout plan client",
    rating: 5,
    comment:
      "Coach [Name] is simply the best! Their workout and nutrition plan was customized to my needs, and I saw amazing results in just a few weeks. They are incredibly supportive, motivating, and always available to answer my questions. Highly recommend!",
  },
  {
    id: 3,
    name: "James",
    type: "workout plan client",
    rating: 5,
    comment:
      "I expected more personalized guidance. The workouts were okay, but I didn't feel they were fully tailored to my fitness level. Communication could have been better.",
  },
  {
    id: 4,
    name: "James",
    type: "workout plan client",
    rating: 5,
    comment: "Great coach. Outstanding plans.",
  },
];

export default function CoachReviews() {
  return (
    <main className="w-full h-full flex flex-col gap-4 justify-start items-start my-3 min-h-[88dvh]">
      <section className="w-full h-full rounded-lg bg-primary p-4 flex flex-col gap-4 justify-start items-start border-1 border-muted">
        <UserAverageReviews user={userData} />
      </section>
      <section className="w-full h-full rounded-lg bg-primary p-8 flex flex-col gap-4 justify-start items-start border-1 border-muted">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
    </main>
  );
}
