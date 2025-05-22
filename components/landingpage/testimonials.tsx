import React from "react";
import { StarFilled } from "@ant-design/icons";
import Image from "next/image";
import { quote } from "@/assets";

const testimonials = [
  {
    name: "James Alan",
    title: "Entrepreneur",
    image: "/profile.svg",
    rating: 5,
    text: "The holistic approach at EZ Fit Plans has improved my overall well-being. The combination of strength training, cardio, and wellness programs.",
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({
  name,
  title,
  image,
  rating,
  text,
  highlighted = false,
}: {
  name: string;
  title: string;
  image: string;
  rating: number;
  text: string;
  highlighted?: boolean;
}) => (
  <div
    className={`relative rounded-tr-[50px] border border-muted ${
      highlighted ? "h-[460px] bg-primary" : "h-[400px]"
    } p-8 flex flex-col items-center text-center transition-all duration-300 gap-[22px]`}
    style={{ minWidth: 320, maxWidth: 400 }}
  >
    <Image
      src={quote}
      alt="quote"
      className="absolute left-2 -top-4 w-[40px] h-[40px]"
    />

    <Image
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full object-cover mb-4 mt-6"
      width={60}
      height={60}
    />
    <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-muted mb-2">{title}</p>
      <div className="flex justify-center mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <StarFilled key={i} style={{ color: "#FF5722" }} />
        ))}
      </div>
    </div>
    <p className="text-muted">{text}</p>
  </div>
);

const TestimonialsSection = () => (
  <section
    className="w-full py-16 flex flex-col items-center"
    id="testimonials"
  >
    <p className="text-4xl text-black font-bold font-noto-serif mb-8">
      Testimonials
    </p>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-end">
      <TestimonialCard {...testimonials[0]} />
      <TestimonialCard {...testimonials[0]} highlighted />
      <TestimonialCard {...testimonials[0]} />
    </div>
  </section>
);

export default TestimonialsSection;
