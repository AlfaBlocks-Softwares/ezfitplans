"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ErrorLabel, Input } from "@/design-system";

const formSchema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters."),
  certification: z.string(),
  specialization: z.string(),
  rates: z.string().min(1, "Rates are required."),
  ratings: z.string(),
  successfulPlans: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function CoachProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "Hi, I'm John Doe, a 5-year experienced Certified Fitness Coach & Nutrition Specialist dedicated to helping individuals transform their bodies and lifestyles",
      certification: "Verified by admin",
      specialization: "Verified by admin",
      rates: "20$ per session",
      ratings: "5 star",
      successfulPlans: "150",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col justify-start items-start gap-3 my-3"
    >
      <div className="w-full h-full min-h-[120px] bg-secondary-bg text-primary p-9 rounded-[12px] flex justify-between items-center">
        <div className="w-max flex flex-row justify-start items-start gap-4">
          <div className="w-full h-full flex justify-start items-center gap-4">
            <div className="w-20 h-20 rounded-[50%] bg-muted"></div>
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="font-noto-serif font-bold text-2xl">
                Welcome, John Doe
              </p>
              <p className="font-poppins font-[400] text-sm">
                Current Subscription: Premium
              </p>
            </div>
          </div>
        </div>
        <Button type={"button"}>Edit</Button>
      </div>

      <div className="w-full min-h-[69dvh] flex justify-center items-center gap-40 rounded-[12px] bg-primary p-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <label className="font-poppins font-[400] text-sm">Bio</label>
          <textarea
            {...register("bio")}
            className="w-[380px] h-[250px] rounded-[12px] p-3 border-1 border-muted"
            rows={6}
          />
          {errors?.bio && <ErrorLabel message={errors.bio.message ?? ""} />}
        </div>

        <div className="grid grid-cols-3 justify-start items-start gap-2">
          {/* Certification */}
          <div>
            <label className="font-poppins font-[400] text-sm text-black">
              Certification
            </label>
            <Input
              {...register("certification")}
              disabled
              variant={"secondary"}
              className="w-full cursor-not-allowed rounded-[12px]"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="font-poppins font-[400] text-sm text-black">
              Specialization
            </label>
            <Input
              {...register("specialization")}
              disabled
              variant={"secondary"}
              className="w-full cursor-not-allowed rounded-[12px]"
            />
          </div>

          {/* Rates */}
          <div>
            <label className="font-poppins font-[400] text-sm text-black">
              Rates
            </label>
            <Input
              {...register("rates")}
              variant={"secondary"}
              className="w-full cursor-not-allowed rounded-[12px]"
            />
            {errors.rates && (
              <ErrorLabel message={errors.rates.message ?? ""} />
            )}
          </div>

          {/* Ratings */}
          <div>
            <label className="font-poppins font-[400] text-sm text-black">
              Ratings
            </label>
            <Input
              {...register("ratings")}
              variant={"secondary"}
              className="w-full rounded-[12px]"
            />
          </div>

          {/* Successful Plans */}
          <div>
            <label className="font-poppins font-[400] text-sm text-black">
              Successful Plans
            </label>
            <Input
              {...register("successfulPlans")}
              disabled
              variant={"secondary"}
              className="w-full cursor-not-allowed rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
