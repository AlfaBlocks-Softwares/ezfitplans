import NotificationCard from "./card";

export default function NotificationsPage() {
  return (
    <main className="bg-primary rounded-[12px] px-3 py-8 w-full min-h-[88dvh] flex flex-col justify-start items-start mt-3 gap-4">
      <h1 className="font-noto-serif text-4xl text-black font-bold">
        All Notifications
      </h1>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <NotificationCard
          title="Workout Plan"
          notifications={[
            "Workout Reminder: 5 min ago",
            "Complete your workout: 10 min ago",
          ]}
        />
        <NotificationCard
          title="Meal Plan"
          notifications={[
            "Meal Reminder: 5 min ago",
            "Log your meal: 15 min ago",
          ]}
        />
        <NotificationCard
          title="Progress Updates"
          notifications={[
            "Weight goal achieved: 1 hour ago",
            "New milestone reached: 2 hours ago",
          ]}
        />
        <NotificationCard
          title="Coach Messages"
          notifications={[
            "New message from coach: 30 min ago",
            "Schedule updated: 1 hour ago",
          ]}
        />
        <NotificationCard
          title="Workout Plan"
          notifications={[
            "Workout Reminder: 5 min ago",
            "Complete your workout: 10 min ago",
          ]}
        />
        <NotificationCard
          title="Meal Plan"
          notifications={[
            "Meal Reminder: 5 min ago",
            "Log your meal: 15 min ago",
          ]}
        />
        <NotificationCard
          title="Progress Updates"
          notifications={[
            "Weight goal achieved: 1 hour ago",
            "New milestone reached: 2 hours ago",
          ]}
        />
        <NotificationCard
          title="Coach Messages"
          notifications={[
            "New message from coach: 30 min ago",
            "Schedule updated: 1 hour ago",
          ]}
        />
      </div>
    </main>
  );
}
