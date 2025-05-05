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
