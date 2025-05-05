import { z } from "zod";

export const professionalSignupSchema = z.object({
  certification: z
    .string()
    .refine((value) => value, "Please enter certification"),
  specialization: z
    .string()
    .refine((value) => value, "Please enter specialization"),
  pricing: z
    .number({ invalid_type_error: "Pricing must be a number" })
    .min(0, "Pricing must be positive number")
    .refine((val) => !isNaN(val), { message: "Pricing is required" }),
  bio: z.string().refine((value) => value, "Please enter bio"),
});

export type ProfessionalSignupFormSchema = z.infer<
  typeof professionalSignupSchema
>;
