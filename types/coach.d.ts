export interface IExpiringPlan {
  name: string;
  expiresOn?: string;
}

export interface IFinancialOverview {
  earnings: number;
  pendingPayments: number;
}

export interface INotifications {
  unreadMessages: number;
}

export interface IDashboardData {
  expiringPlans: ExpiringPlan[];
  financialOverview: FinancialOverview;
  notifications: Notifications;
}

export interface IUser {
  name: string;
  profile?: StaticImageData;
  isOnline: boolean;
  messages: Array<{
    message: string;
    time: string;
    send: boolean;
    receive: boolean;
  }>;
}

export interface IClientForCoach {
  id: string;
  name: string;
  email: string;
  assignedPlan: string[] | string;
  adherence: string;
  lastActivityDate: string;
  lastActivityCheckIn: string;
  pendingCheckIn: string;
}

export interface IAssignedPlan {
  key: string;
  clientName: string;
  email: string;
  assignedPlan: string | string[];
  startDate: string;
  endDate: string;
  status: "Active" | "Expired" | "Cancelled";
}
