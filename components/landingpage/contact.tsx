import { Button } from "@/design-system";

export default function Contact() {
  return (
    <main
      className="w-full h-[470px] flex flex-col justify-center items-center gap-[24px] my-[12px]"
      style={{
        background: "url('contact-ez.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-primary text-center text-wrap font-bold font-noto-serif max-w-[800px] text-4xl">
        Take the First Step Towards a Healthier You
      </p>
      <p className="text-primary text-center text-wrap font-poppins max-w-[768px] font-[400] text-sm">
        Join EZ Fit Life Today and Transform Your Life with Expert Guidance,
        Personalized Programs, and a Supportive Community. Your Fitness Journey
        Starts Now!
      </p>
      <div className="w-[520px] flex flex-col justify-center items-center gap-[12px]">
        <div className="w-full flex gap-[12px]">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-primary-bg gap-[16px] h-[45px] rounded-[12px] font-poppins text-sm pl-4 outline-none"
          />
          <Button>Join Now</Button>
        </div>
        <p className="text-muted font-[400] text-xs">
          By clicking Sign Up you're confirming that you agree with our Terms
          and Conditions.
        </p>
      </div>
    </main>
  );
}
