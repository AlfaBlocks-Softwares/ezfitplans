import {
  IAdminAnalytics,
  IAdminDashboardAnalytics,
  IApprovalRequest,
  IClient,
  IClientCompliance,
  ICoachVerification,
} from "@/types";

export const mockClients: IClient[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    assignedPlans: ["Diet Plan"],
    lastActivity: "12-02-2025",
  },
  {
    id: "2",
    name: "Alan",
    email: "alan@example.com",
    assignedPlans: ["Workout Plan"],
    lastActivity: "12-02-2025",
  },
  {
    id: "3",
    name: "James",
    email: "james@example.com",
    assignedPlans: ["Diet Plan"],
    lastActivity: "12-02-2025",
  },
  {
    id: "4",
    name: "Alice",
    email: "alice@example.com",
    assignedPlans: ["Diet Plan", "Workout Plan"],
    lastActivity: "12-02-2025",
  },
];

export const adminDashboardStats: IAdminDashboardAnalytics[] = [
  {
    title: "Total clients",
    value: 1200,
    change: {
      value: 40,
      isPositive: true,
    },
  },
  {
    title: "New clients",
    value: 10,
    change: {
      value: 10,
      isPositive: true,
    },
  },
  {
    title: "Active clients",
    value: 500,
    change: {
      value: 5,
      isPositive: false,
    },
  },
];

//plan oversight
export const mockComplianceClients: IClientCompliance[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    assignedPlans: ["Diet Plan"],
    lastActivity: "12-02-2025",
    plans: ["Diet Plan"],
    compliance: ["Accuracy"],
  },
  {
    id: "2",
    name: "Alan",
    email: "alan@example.com",
    assignedPlans: ["Workout Plan"],
    lastActivity: "12-02-2025",
    plans: ["Workout Plan"],
    compliance: ["Safety"],
  },
  {
    id: "3",
    name: "James",
    email: "james@example.com",
    assignedPlans: ["Diet Plan"],
    lastActivity: "12-02-2025",
    plans: ["Diet Plan"],
    compliance: ["Guidelines"],
  },
  {
    id: "4",
    name: "Alice",
    email: "alice@example.com",
    assignedPlans: ["Diet Plan", "Workout Plan"],
    lastActivity: "12-02-2025",
    plans: ["Diet Plan", "Workout Plan"],
    compliance: ["Safety", "Accuracy"],
  },
];

export const mockAdminApprovals: IApprovalRequest[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    category: ["Diet Planner"],
  },
  {
    id: "2",
    name: "Alan",
    email: "alan@example.com",
    category: ["Workout Planner"],
  },
  {
    id: "3",
    name: "James",
    email: "james@example.com",
    category: ["Client"],
  },
  {
    id: "4",
    name: "Alice",
    email: "alice@example.com",
    category: ["Diet Planner", "Workout Planner"],
  },
];

//verifications
export const mockCoaches: ICoachVerification[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    password: "123_diet!!!",
    certification: {
      approved: true,
      reviewed: true,
      denied: true,
    },
    reverification: false,
  },
  {
    id: "2",
    name: "Alan",
    email: "alan@example.com",
    password: "123_diet!!!",
    certification: {
      approved: true,
      reviewed: true,
      denied: true,
    },
    reverification: false,
  },
  {
    id: "3",
    name: "James",
    email: "james@example.com",
    password: "123_diet!!!",
    certification: {
      approved: true,
      reviewed: true,
      denied: true,
    },
    reverification: false,
  },
  {
    id: "4",
    name: "Alice",
    email: "alice@example.com",
    password: "123_diet!!!",
    certification: {
      approved: true,
      reviewed: true,
      denied: true,
    },
    reverification: false,
  },
];

//analytics and report
export const mockAdminAnalytics: IAdminAnalytics[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    complianceScore: {
      score: 5,
      total: 5,
    },
  },
  {
    id: "2",
    name: "Alan",
    email: "alan@example.com",
    complianceScore: {
      score: 4,
      total: 5,
    },
  },
  {
    id: "3",
    name: "James",
    email: "james@example.com",
    complianceScore: {
      score: 5,
      total: 5,
    },
  },
  {
    id: "4",
    name: "Alice",
    email: "alice@example.com",
    complianceScore: {
      score: 3,
      total: 5,
    },
  },
];
