"use client";
import { Input } from "@/design-system";
import { LoginFormSchema, loginSchema } from "@/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorLabel } from "@/design-system";

const ClientProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormSchema) => {
    console.log("Login Data", data);
  };
  return (
    <form
      className="w-full h-full flex flex-col justify-center items-center p-3 gap-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="font-noto-serif font-bold text-4xl text-primary text-center">
        It always seems impossible until it's done: A reminder that you're
        almost there and you'll feel great when you're done
      </p>

      <div className="w-full grid grid-cols-3 gap-6">
        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="font-poppins font-[400]  text-primary text-[14px]">
            Name
          </p>
          <Input
            {...register("email")}
            name="email"
            placeholder="name"
            className="placeholder:text-muted text-muted"
            error={errors?.email?.message}
          />
          {errors?.email?.message && (
            <ErrorLabel message={errors?.email?.message} />
          )}
        </div>

        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="font-poppins font-[400] text-primary text-[14px]">
            Age
          </p>
          <Input
            {...register("password")}
            type="password"
            name="password"
            placeholder="age"
            className="placeholder:text-muted text-muted"
            error={errors?.password?.message}
          />
          {errors?.password?.message && (
            <ErrorLabel message={errors?.password?.message} />
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="font-poppins font-[400]  text-primary text-[14px]">
            Gender
          </p>
          <Input
            {...register("email")}
            name="email"
            placeholder="Gender"
            className="placeholder:text-muted text-muted"
            error={errors?.email?.message}
          />
          {errors?.email?.message && (
            <ErrorLabel message={errors?.email?.message} />
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="font-poppins font-[400]  text-primary text-[14px]">
            Email
          </p>
          <Input
            {...register("email")}
            name="email"
            placeholder="Email"
            className="placeholder:text-muted text-muted"
            error={errors?.email?.message}
          />
          {errors?.email?.message && (
            <ErrorLabel message={errors?.email?.message} />
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="font-poppins font-[400]  text-primary text-[14px]">
            Fitness Goal
          </p>
          <Input
            {...register("email")}
            name="email"
            placeholder="Fitness Goal"
            className="placeholder:text-muted text-muted"
            error={errors?.email?.message}
          />
          {errors?.email?.message && (
            <ErrorLabel message={errors?.email?.message} />
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="font-poppins font-[400]  text-primary text-[14px]">
            Connected Wearable
          </p>
          <Input
            {...register("email")}
            name="email"
            placeholder="Connected Wearable"
            className="placeholder:text-muted text-muted"
            error={errors?.email?.message}
          />
          {errors?.email?.message && (
            <ErrorLabel message={errors?.email?.message} />
          )}
        </div>
      </div>
    </form>
  );
};

export default ClientProfileForm;
