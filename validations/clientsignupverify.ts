import { z } from "zod";

export const clientSignupVerificationSchema = z.object({
  code: z.number().min(4, "Verfication Code must be 4 digit"),
});

export type clientSignupVerifyFormSchema = z.infer<
  typeof clientSignupVerificationSchema
>;
