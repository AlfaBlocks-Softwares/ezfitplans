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

export const foodItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.string(),
  calories: z.number().min(0),
  protein: z.number().min(0),
  fats: z.number().min(0),
  carbs: z.number().min(0),
});

export const mealSchema = z.object({
  type: z.enum(["breakfast", "lunch", "snack", "dinner"]),
  foods: z.array(foodItemSchema),
});

export const dayPlanSchema = z.object({
  id: z.string(),
  meals: z.record(
    z.enum(["breakfast", "lunch", "snack", "dinner"]),
    mealSchema
  ),
});

export const dietPlanSchema = z.array(dayPlanSchema);
