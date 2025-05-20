import { z } from "zod";

export const MAX_FILE_SIZE_MB = 1;

export const ClientCommunityPostValidations = z.object({
  message: z.string().min(10, "Message is required"),
  file: z
    .any()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
      message: "File must be less than or equal to 1MB",
    })
    .optional(),
});

export type ClientCommunityPostValidationsType = z.infer<
  typeof ClientCommunityPostValidations
>;
