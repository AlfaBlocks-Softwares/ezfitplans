import RatingForm from "./ratingform";

export default function Rating() {
  return (
    <main
      className="bg-primary rounded-[12px] px-3 py-8 w-full h-[88dvh] flex flex-col justify-center items-center mt-3 gap-12"
      style={{
        background: "url('/rating.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <RatingForm />
    </main>
  );
}
