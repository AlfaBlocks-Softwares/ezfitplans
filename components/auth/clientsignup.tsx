import {
  apple,
  arrowupright,
  arrowuprightwhite,
  facebook,
  google,
} from "@/assets";
import { Button } from "@/design-system";
import { Input } from "@/design-system";
import Image from "next/image";
import { OnboardingCard } from "../cards";

const ClientSignup = () => {
  return (
    <OnboardingCard>
      <form className="w-full h-full flex flex-col justify-center items-center gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <p className="font-noto-serif font-bold text-4xl text-primary text-center">
            Your Wellness, Your Way
          </p>
          <p className="font-poppins font-[400] text-muted text-center">
            Create an account to continue
          </p>
        </div>

        <div className="w-[350px] p-[12px] flex justify-center items-center gap-[30px] rounded-[12px] bg-secondary-bg">
          <p className="w-[150px] text-[14px] font-bold font-poppins text-secondary bg-primary-bg h-[45px] rounded-[12px] text-center flex justify-center items-center cursor-pointer">
            Client Signup
          </p>
          <p className="w-[150px] text-[14px] font-bold font-poppins text-primary bg-secondary-bg cursor-pointer">
            Professional Signup
          </p>
        </div>

        <div className="flex flex-col gap-[24px] w-[450px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Name
            </p>
            <Input
              placeholder="Enter your name"
              className="placeholder:text-muted text-muted"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Email
            </p>
            <Input
              placeholder="Enter your email"
              className="placeholder:text-muted text-muted"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Password
            </p>
            <Input
              placeholder="Enter your password"
              className="placeholder:text-muted text-muted"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Confirm Password
            </p>
            <Input
              placeholder="Confirm your password"
              className="placeholder:text-muted text-muted"
            />
          </div>
        </div>

        <Button type="submit">
          <div className="w-full flex justify-center items-center gap-[8px]">
            <p className="font-bold font-poppoins text-[14px]">Continue</p>
            <Image
              src={arrowuprightwhite}
              alt="arrow"
              className="w-[24px] h-[24px]"
            />
          </div>
        </Button>

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

export default ClientSignup;
