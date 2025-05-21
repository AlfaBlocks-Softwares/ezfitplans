import { Herobg, HeroMainPic, search } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="my-[12px] w-full min-h-[90dvh] flex flex-col justify-start items-center gap-[12px]">
      <Image
        src={Herobg}
        alt="ellipse"
        className="absolute top-0 left-0 w-1/2 h-screen z-[10] scale-x-150"
      />
      <div className="relative w-[80%] lg:w-full  lg:max-w-[780px]">
        <Image
          src={search}
          alt=""
          className="absolute top-[10px] left-[10px]"
        />
        <input
          type="text"
          placeholder="Search"
          className="rounded-[12px] border-2 border-muted h-[45px] w-full pl-[50px]"
        />
      </div>
      <div className="w-full h-full flex flex-col xl:flex-row justify-between items-center">
        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center gap-[60px]">
          <div className="flex flex-col gap-[12px] justify-center items-center">
            <p className="text-4xl font-bold text-black font-noto-serif text-center">
              Achieve Your Health Goals with Expert Guidance!
            </p>
            <p className="text-sm font-[400] text-black font-poppins text-center">
              Join the EZ fit plans community and transform your fitness
              journey. Our expert coaches and personalized programs are designed
              to help you achieve your goals and exceed your expectations. Ready
              to make a change?
            </p>
          </div>
          <div className="w-[300px] p-[12px] flex justify-center items-center gap-[30px] rounded-[12px] bg-secondary-bg z-[9999]">
            <Link href="/clientsignup" className="cursor-pointer">
              <p className="w-[100px] text-[14px] font-bold font-poppins text-secondary bg-primary-bg h-[45px] rounded-[12px] text-center flex justify-center items-center cursor-pointer">
                Join now
              </p>
            </Link>
            <Link href="/professionalsignup" className="cursor-pointer">
              <p className="w-[150px] text-[14px] font-bold font-poppins text-primary bg-secondary-bg cursor-pointer">
                Sign Up as a coach
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
          <div
            className="w-full flex justify-center items-center"
            style={{
              backgroundImage: "url(./hero.svg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundSize: "100% 100%",
            }}
          >
            <Image
              src={HeroMainPic}
              alt="hero"
              className="w-[280px] sm:w-[490px] h-[400px] sm:h-[600px] sm:mb-[70px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
