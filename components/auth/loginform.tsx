import { apple, arrowupright, facebook, google } from "@/assets";
import { Button, Checkbox, OnboardingCard } from "@/design-system";
import { Input } from "@/design-system";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <OnboardingCard>
      <form className="w-full h-full flex flex-col justify-between items-center py-[80px]">
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <p className="font-noto-serif font-bold text-4xl text-primary text-center">
            Every Meal, Every Workout, Every Choice - It All Counts!
          </p>
          <p className="font-poppins font-[400] text-muted text-center">
            Good to see you again. Let;s get begin
          </p>
        </div>

        <div className="flex flex-col gap-[24px] w-[450px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Email
            </p>
            <Input
              placeholder="Email"
              className="placeholder:text-muted text-muted"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400] text-primary text-[14px]">
              Password
            </p>
            <Input
              placeholder="Password"
              className="placeholder:text-muted text-muted"
            />
          </div>

          <div className="w-full flex justify-between items-start gap-[8px]">
            <Checkbox />
            <Link
              href={"/forget"}
              className="font-poppins font-[400] text-primary text-[14px]"
            >
              Forget Password
            </Link>
          </div>
        </div>

        <div className="w-[330px] p-[4px] flex justify-between items-center rounded-[12px] bg-secondary-bg">
          <Button type="submit" variant={"secondary"}>
            <div className="w-[100px] flex justify-center items-center gap-[8px]">
              <p className="font-bold font-poppoins text-[16px]">Login</p>
              <Image
                src={arrowupright}
                alt="arrow"
                className="w-[24px] h-[24px]"
              />
            </div>
          </Button>
          <Link href={"/clientsignup"}>
            <Button
              type="submit"
              className="self-start text-center w-[150px] font-bold text-[16px]"
            >
              Signup
            </Button>
          </Link>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-[48px]">
          <div className="w-[400px] flex justify-center items-center">
            <p className="w-full border-1 border-muted"></p>
            <p className="w-full text-[14px] font-[400] font-poppins text-center text-primary">
              Or continue with
            </p>
            <p className="w-full border-1 border-muted"></p>
          </div>

          <div className="w-full flex justify-center items-center gap-[28px]">
            <div className="w-[60px] h-[60px] rounded-[50%] bg-primary-bg flex justify-center items-center">
              <Image src={google} alt="google" className="w-[48px] h-[48px]" />
            </div>
            <div className="w-[60px] h-[60px] rounded-[50%] bg-primary-bg flex justify-center items-center">
              <Image src={apple} alt="apple" className="w-[48px] h-[48px]" />
            </div>
            <div className="w-[60px] h-[60px] rounded-[50%] bg-primary-bg flex justify-center items-center">
              <Image
                src={facebook}
                alt="facebook"
                className="w-[48px] h-[48px]"
              />
            </div>
          </div>
        </div>
      </form>
    </OnboardingCard>
  );
};

export default LoginPage;
