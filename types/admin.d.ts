export interface IClient {
  id: string;
  name: string;
  email: string;
  assignedPlans: string[];
  lastActivity: string;
}

export interface IAdminDashboardAnalytics {
  title: string;
  value: number;
  change: {
    value: number;
    isPositive: boolean;
  };
}

//plan oversight
export interface IClientCompliance {
  id: string;
  name: string;
  email: string;
  assignedPlans: string[];
  lastActivity?: string;
  category?: string;
  plans?: string[];
  compliance?: string[];
}

export interface IApprovalRequest {
  id: string;
  name: string;
  email: string;
  category: string[];
}

//verification flow
export interface ICoachVerification {
  id: string;
  name: string;
  email: string;
  password: string;
  certification: {
    approved: boolean;
    reviewed: boolean;
    denied: boolean;
  };
  reverification: boolean;
}

//analytics and reports
export interface IAdminAnalytics {
  id: string;
  name: string;
  email: string;
  complianceScore: {
    score: number;
    total: number;
  };
}
