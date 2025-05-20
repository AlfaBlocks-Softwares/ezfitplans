"use client";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StarRating from "./starrating";
import { Button, ErrorLabel, Input } from "@/design-system";

const schema = z.object({
  rating: z.number().min(1, "Please select a rating"),
  review: z.string().min(1, "Please write a review"),
});

type FormData = z.infer<typeof schema>;

export default function RatingForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { rating: 0 },
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1000px] w-full h-[80%] bg-[#000000CC] flex flex-col items-start justify-start rounded-[12px] p-8">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col items-center justify-start gap-14"
        >
          <div className="max-w-[400px] w-full flex flex-col items-center justify-start gap-5">
            <h4 className="font-noto-serif text-4xl text-primary font-bold text-center  ">
              Plan Name
            </h4>
            <div className="w-full h-1.5 bg-muted rounded-full">
              <div
                className="h-1.5 bg-secondary-bg rounded-full"
                style={{ width: `${80}%` }}
              ></div>
            </div>
          </div>

          <div className="max-w-[400px] w-full flex flex-col items-start justify-start gap-5">
            <div className="w-full flex gap-3">
              {/* {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt={name}
                  className="w-[50px] h-[50px] object-cover"
                />
              ) : ( */}
              <div className="bg-muted rounded-[50%] w-[50px] h-[50px]"></div>
              {/* )} */}
              <div className="flex flex-col justify-start items-start gap-1">
                <h4 className="font-noto-serif text-lg text-primary font-bold">
                  John Doe
                </h4>
                <p className="font-poppins text-xs text-primary font-[400]">
                  Successfull Diet Planner
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <StarRating name="rating" />
              {errors?.rating && (
                <ErrorLabel message={errors.rating.message ?? ""} />
              )}
            </div>
          </div>

          <Input
            placeholder="Write a review"
            {...register("review")}
            className="!w-full border-1 border-primary placeholder:text-primary text-primary"
          />
          {errors?.review && (
            <ErrorLabel message={errors.review.message ?? ""} />
          )}

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
}
