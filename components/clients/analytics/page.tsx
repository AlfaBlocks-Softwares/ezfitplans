interface ICaloriesCard {
  title: string;
  value: string;
  chart: number[];
}

const CaloriesCard = ({ title, value, chart }: ICaloriesCard) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-semibold">{value} kcl</p>
      <div className="flex items-end gap-1 h-24">
        {chart.map((value, index) => (
          <div
            key={index}
            className="w-6 bg-teal-500 rounded-t"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>
    </div>
  );
};

const caloriesIntakeData = {
  title: "Calories Intake",
  value: "122",
  chart: [30, 45, 60, 75, 40, 20, 35],
};

const caloriesBurnedData = {
  title: "Calories Burned",
  value: "722",
  chart: [65, 45, 80, 90, 75, 85, 70],
};

const Analytics = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <CaloriesCard
        title={caloriesIntakeData.title}
        value={caloriesIntakeData.value}
        chart={caloriesIntakeData.chart}
      />
      <CaloriesCard
        title={caloriesBurnedData.title}
        value={caloriesBurnedData.value}
        chart={caloriesBurnedData.chart}
      />
    </div>
  );
};

export default function AnalyticsPage() {
  return <main className="w-full h-full flex flex-col gap-2 my-2"></main>;
}
