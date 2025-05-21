export interface IDietPlan {
  day: string;
  daytime: string;
  title: string;
  calories: number;
  feedback: string;
}

export interface INutritionalItem {
  food: string;
  amount: string;
  calories: number;
  protein: number;
  fats: number;
  carbohydrates: number;
}

export type MealType = "breakfast" | "lunch" | "snack" | "dinner";

export interface FoodItem {
  id: string;
  name: string;
  amount: string;
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
}

export interface Meal {
  type: MealType;
  foods: FoodItem[];
}

export interface DayPlan {
  id: string;
  meals: Record<MealType, Meal>;
}
