export interface ClientProfile {
  name: string;
  age: number;
  gender: "Male" | "Female";
  email: string;
  fitnessGoal: string;
  connectedWearable: string;
}

export interface IClientAssignedPlan {
  assignedPlan: string;
  duration: string;
  progress: number;
  coach: string;
}
