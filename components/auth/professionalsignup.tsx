import { apple, arrowuprightwhite, facebook, google } from "@/assets";
import { Button, OnboardingCard } from "@/design-system";
import { Input } from "@/design-system";
import Image from "next/image";

const ProfessionalSignup = () => {
  return (
    <OnboardingCard>
      <form className="w-full h-full flex flex-col justify-between items-center py-[80px]">
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <p className="font-noto-serif font-bold text-4xl text-primary text-center">
            Your Wellness, Your Way
          </p>
          <p className="font-poppins font-[400] text-muted text-center">
            Create an account to continue
          </p>
        </div>

        <div className="w-[350px] p-[12px] flex justify-center items-center gap-[30px] rounded-[12px] bg-secondary-bg">
          <p className="w-[150px] text-[14px] font-bold font-poppins text-primary bg-secondary-bg cursor-pointer text-center">
            Client Signup
          </p>
          <p
            className="w-[150px] text-[14px] font-bold font-poppins text-secondary
        bg-primary-bg h-[45px] rounded-[12px] text-center flex justify-center
        items-center cursor-pointer"
          >
            Professional Signup
          </p>
        </div>

        <div className="flex flex-col gap-[24px] w-[450px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Certificates
            </p>
            <Input
              placeholder="Add Certification"
              className="placeholder:text-muted text-muted"
            />
          </div>

          <div className="w-full flex justify-between items-start gap-[50px]">
            <Input
              placeholder="Specialization"
              className="placeholder:text-muted text-muted"
            />
            <Input
              placeholder="Pricing Model"
              className="placeholder:text-muted text-muted"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="font-poppins font-[400] text-primary text-[14px]">
              Bio
            </p>
            <Input
              placeholder="Enter your bio"
              className="placeholder:text-muted text-muted"
            />
          </div>
        </div>

        <Button type="submit">
          <div className="w-full flex justify-center items-center gap-[8px]">
            <p className="font-bold font-poppoins text-[14px]">Next</p>
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

export default ProfessionalSignup;
