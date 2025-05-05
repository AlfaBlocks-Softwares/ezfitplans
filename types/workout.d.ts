export interface IExercise {
  name: string;
  sets: string;
  reps: string;
}

export interface IWorkOutPlan {
  day: string;
  exercise: IExercise[];
  notes: string;
}
