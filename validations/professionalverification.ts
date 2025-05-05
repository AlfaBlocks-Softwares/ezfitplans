import { z } from "zod";

export const professionalSignupVerificationSchema = z.object({
  code: z
    .number({ invalid_type_error: "Verification Code must be a number" })
    .min(1000, "Verification Code must be 4 digits")
    .max(9999, "Verification Code must be 4 digits")
    .refine((val) => !isNaN(val), { message: "Verification Code is required" }),
});

export type ProfessionalSignupVerifyFormSchema = z.infer<
  typeof professionalSignupVerificationSchema
>;
