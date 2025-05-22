import {
  IClientForCoach,
  IDashboardData,
  IDashboardNavItems,
  IUser,
} from "@/types";
export const CoachDashboardNavItems: IDashboardNavItems[] = [
  {
    title: "Dashboard",
    path: "/coach/dashboard",
    subItems: [
      {
        title: "Dashboard",
        path: "/coach/dashboard",
      },
      {
        title: "Diet Plan Daily View",
        path: "/coach/diet-plan-daily",
      },
      {
        title: "Diet Plan Weekly View",
        path: "/coach/diet-plan-weekly",
      },
      {
        title: "Workout Plan",
        path: "/coach/work-out-plan",
      },
      {
        title: "Assigned Plans",
        path: "/coach/assigned-plans",
      },
      {
        title: "Rating",
        path: "/coach/reviews",
      },
      {
        title: "Food & Recipes List",
        path: "/coach/food",
      },
    ],
  },
  {
    title: "Messages",
    path: "/coach/messages",
  },
  {
    title: "Profile",
    path: "/coach/profile",
  },
];

export const ClientDashboardNavItems: IDashboardNavItems[] = [
  {
    title: "Dashboard",
    path: "/coach/dashboard",
    subItems: [
      {
        title: "Dashboard",
        path: "/client/dashboard",
      },
      {
        title: "Assigned Plans",
        path: "/client/assigned-plans",
      },
      {
        title: "List of Coaches",
        path: "/client/coach",
      },
      {
        title: "Booking",
        path: "/client/booking",
      },
      {
        title: "Medical Disclaimer",
        path: "/client/medical-disclaimer",
      },
      {
        title: "Privacy Policy",
        path: "/client/privacy",
      },
      {
        title: "Terms & Conditions",
        path: "/client/terms",
      },
      {
        title: "Rating",
        path: "/client/rating",
      },
    ],
  },
  {
    title: "Notifications",
    path: "/client/notifications",
  },
  {
    title: "Community",
    path: "/client/community",
    subItems: [
      {
        title: "Community",
        path: "/client/community",
      },
      {
        title: "Join Community",
        path: "/client/community/join",
      },
      {
        title: "Popular Challenges",
        path: "/client/community/challenges",
      },
      {
        title: "Post",
        path: "/client/community/post",
      },
      {
        title: "Top Contributors",
        path: "/client/community/top-contributors",
      },
    ],
  },
  {
    title: "Profile",
    path: "/client/profile",
  },
];

export const CoachDashboardData: IDashboardData = {
  expiringPlans: [
    {
      name: "Keto Diet Plan",
      expiresOn: "2023-10-15",
    },
    {
      name: "Workout Plan",
      expiresOn: "2023-10-15",
    },
  ],
  financialOverview: {
    earnings: 5000,
    pendingPayments: 1500,
  },
  notifications: {
    unreadMessages: 3,
  },
};

export const usersDataForMessage: IUser[] = [
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
  {
    name: "James",
    isOnline: true,
    messages: [
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
      {
        message:
          "Vestibulum viverra lacus, congue scelerisque neque. Viverra cursus nisi, in purus dolor at. Nec sed eget scelerisque imperdiet consectetur.",
        time: "12:37",
        send: true,
        receive: false,
      },
      {
        message:
          "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisi nibh eu.",
        time: "10:45",
        send: false,
        receive: true,
      },
    ],
  },
];

export const sampleClients: IClientForCoach[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    assignedPlan: "Diet Plan",
    adherence: "70%",
    lastActivityDate: "12-02-2025",
    lastActivityCheckIn: "12-02-2025",
    pendingCheckIn: "12-02-2025",
  },
  {
    id: "2",
    name: "Alan",
    email: "alan@example.com",
    assignedPlan: "Workout Plan",
    adherence: "10%",
    lastActivityDate: "12-02-2025",
    lastActivityCheckIn: "12-02-2025",
    pendingCheckIn: "12-02-2025",
  },
  {
    id: "3",
    name: "James",
    email: "james@example.com",
    assignedPlan: "Diet Plan",
    adherence: "90%",
    lastActivityDate: "12-02-2025",
    lastActivityCheckIn: "12-02-2025",
    pendingCheckIn: "12-02-2025",
  },
  {
    id: "4",
    name: "Alice",
    email: "alice@example.com",
    assignedPlan: ["Diet Plan", "Workout Plan"],
    adherence: "70%",
    lastActivityDate: "12-02-2025",
    lastActivityCheckIn: "12-02-2025",
    pendingCheckIn: "12-02-2025",
  },
  {
    id: "5",
    name: "John Doe",
    email: "john@example.com",
    assignedPlan: ["Diet Plan", "Workout Plan"],
    adherence: "70%",
    lastActivityDate: "12-02-2025",
    lastActivityCheckIn: "12-02-2025",
    pendingCheckIn: "12-02-2025",
  },
  {
    id: "6",
    name: "John Doe",
    email: "john@example.com",
    assignedPlan: ["Diet Plan", "Workout Plan"],
    adherence: "70%",
    lastActivityDate: "12-02-2025",
    lastActivityCheckIn: "12-02-2025",
    pendingCheckIn: "12-02-2025",
  },
];
