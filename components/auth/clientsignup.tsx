"use client";
import { apple, arrowuprightwhite, eye, facebook, google } from "@/assets";
import { Button } from "@/design-system";
import { Input } from "@/design-system";
import Image from "next/image";
import { OnboardingCard } from "../cards";
import Link from "next/link";
import { ROUTES } from "@/Routes/routes";
import React, { useState } from "react";
import { ClientSignupFormSchema, clientSignupSchema } from "@/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorLabel from "@/design-system/errorlabel";
import { omit } from "lodash";
interface IPasswordType {
  password: "password" | "text";
  confirmPassword: "password" | "text";
}

const ClientSignup = () => {
  const [togglePasswordInputType, setTogglePasswordInputType] =
    useState<IPasswordType>({
      password: "password",
      confirmPassword: "password",
    });

  const handleToggle = (field: keyof IPasswordType) => {
    setTogglePasswordInputType((prev) => ({
      ...prev,
      [field]: prev[field] === "password" ? "text" : "password",
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientSignupFormSchema>({
    resolver: zodResolver(clientSignupSchema),
  });

  const onSubmit = (data: ClientSignupFormSchema) => {
    const payload = omit(data, ["confirmPassword"]);
    console.log("Login Data", payload);
  };

  return (
    <OnboardingCard>
      <form
        className="w-full h-full flex flex-col justify-center items-center gap-6 [@media(max-height:800px)]:gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <p className="font-noto-serif font-bold text-4xl text-primary text-center">
            Your Wellness, Your Way
          </p>
          <p className="font-poppins font-[400] text-muted text-center">
            Create an account to continue
          </p>
        </div>

        <div className="w-[350px] p-[12px] flex justify-center items-center gap-[30px] rounded-[12px] bg-secondary-bg">
          <Link href={ROUTES.clientsignup} className="w-[150px] ">
            <p className="text-[14px] font-bold font-poppins text-secondary bg-primary-bg h-[45px] rounded-[12px] text-center flex justify-center items-center cursor-pointer">
              Client Signup
            </p>
          </Link>
          <Link href={ROUTES.professionalsignup} className="w-[150px]">
            <p className="text-[14px] font-bold font-poppins text-primary bg-secondary-bg cursor-pointer">
              Professional Signup
            </p>
          </Link>
        </div>

        <div className="flex flex-col w-[450px] gap-4">
          <div className="flex flex-col justify-start items-start gap-[2px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Name
            </p>
            <Input
              {...register("name")}
              name="name"
              placeholder="Enter your name"
              className="placeholder:text-muted text-muted"
              error={errors?.name?.message}
            />
            {errors?.name?.message && (
              <ErrorLabel message={errors?.name?.message} />
            )}
          </div>
          <div className="flex flex-col justify-start items-start gap-[2px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Email
            </p>
            <Input
              {...register("email")}
              name="email"
              placeholder="Enter your email"
              className="placeholder:text-muted text-muted"
              error={errors?.email?.message}
            />
            {errors?.email?.message && (
              <ErrorLabel message={errors?.email?.message} />
            )}
          </div>

          <div className="flex flex-col justify-start items-start gap-[2px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Password
            </p>
            <Input
              {...register("password")}
              name="password"
              type={togglePasswordInputType.password}
              placeholder="Enter your password"
              className="placeholder:text-muted text-muted"
              error={errors?.password?.message}
            >
              <Image
                src={eye}
                alt="eye"
                className={`w-[24px] h-[24px] absolute right-4 bottom-3 cursor-pointer`}
                onClick={() => handleToggle("password")}
              />
            </Input>
            {errors?.password?.message && (
              <ErrorLabel message={errors?.password?.message} />
            )}
          </div>

          <div className="flex flex-col justify-start items-start gap-[2px]">
            <p className="font-poppins font-[400]  text-primary text-[14px]">
              Confirm Password
            </p>
            <Input
              {...register("confirmPassword")}
              name="confirmPassword"
              type={togglePasswordInputType.confirmPassword}
              placeholder="Confirm your password"
              className="placeholder:text-muted text-muted"
              error={errors?.confirmPassword?.message}
            >
              <Image
                src={eye}
                alt="eye"
                className={`w-[24px] h-[24px] absolute right-4 bottom-3 cursor-pointer}`}
                onClick={() => handleToggle("confirmPassword")}
              />
            </Input>
            {errors?.confirmPassword?.message && (
              <ErrorLabel message={errors?.confirmPassword?.message} />
            )}
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

        <div className="w-full flex flex-col justify-center items-center [@media(max-height:800px)]:gap-4 gap-12">
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
