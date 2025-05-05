import { z } from "zod";

export const clientSignupSchema = z
  .object({
    name: z.string().refine((value) => value, "Please enter your name"),
    email: z
      .string()
      .email("Please enter valid email")
      .refine((value) => value, "Please enter an email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ClientSignupFormSchema = z.infer<typeof clientSignupSchema>;
