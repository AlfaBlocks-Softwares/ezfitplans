"use client";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Checkbox } from "@/design-system";
import { Select } from "antd";

const schema = z.object({
  planName: z.string().min(1, "Required"),
  difficulty: z.string().min(1, "Required"),
  goal: z.string().min(1, "Required"),
  structure: z.string().min(1, "Required"),
  name: z.string().min(1, "Required"),
  type: z.string().min(1, "Required"),
  muscleGroup: z.string().min(1, "Required"),
  setsReps: z.string().min(1, "Required"),
  restTime: z.string().min(1, "Required"),
  equipment: z.string().min(1, "Required"),
  demo: z.string().optional(),
  coachNotes: z.string().optional(),
});

type FormType = z.infer<typeof schema>;

const difficultyOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const goalOptions = [
  { value: "strength", label: "Strength" },
  { value: "endurance", label: "Endurance" },
  { value: "weightloss", label: "Weight Loss" },
];

const structureOptions = [
  { value: "fullbody", label: "Full Body" },
  { value: "split", label: "Split" },
];

export default function WorkoutPlanForm() {
  const methods = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormType) => {
    // handle form submit
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 my-3"
      >
        <div className="w-full flex flex-col gap-3">
          <div className="h-max flex flex-col gap-4 bg-primary rounded-xl border-1 border-muted p-6">
            <label>Workout Plan Name</label>
            <Input
              {...register("planName")}
              variant="dashboard"
              error={errors.planName?.message}
              placeholder="Tricep Dips"
            />
            <div className="flex gap-2">
              <Controller
                name="difficulty"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={difficultyOptions}
                    defaultValue={"beginner"}
                    placeholder="Difficulty Level"
                    className="!w-full !rounded-[12px]  !text-black"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
              <Controller
                name="goal"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={goalOptions}
                    placeholder="Plan Goal"
                    defaultValue={"strength"}
                    className="w-full"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
              <Controller
                name="structure"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={structureOptions}
                    placeholder="Workout Structure"
                    defaultValue={"fullbody"}
                    className="w-full"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </div>
          </div>
          <div className="h-max flex flex-col gap-4 bg-primary rounded-xl border-1 border-muted p-6 mt-3">
            <label className="font-bold font-noto-serif text-2xl">
              Progress Tracking
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black">
                  Weight Progress: "Lost 3kg in 2 weeks"
                </p>
                <div className="flex gap-4">
                  <p className="text-sm">Reps: 10</p>
                  <p className="text-sm">Sets: 20</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  label="Enable Tracking"
                  showBorder={true}
                  labelClassName="!text-black"
                />
              </div>
              <Button variant="outline">Track Workout</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 bg-primary rounded-xl border-1 border-muted p-6">
          <label className="font-bold font-noto-serif text-2xl">
            Exercise Details
          </label>
          <div className="grid grid-cols-2 gap-4">
            <Input
              {...register("name")}
              variant="dashboard"
              error={errors.name?.message}
              placeholder="Name"
            />
            <Input
              {...register("type")}
              variant="dashboard"
              error={errors.type?.message}
              placeholder="Type"
            />
            <Input
              {...register("muscleGroup")}
              variant="dashboard"
              error={errors.muscleGroup?.message}
              placeholder="Target Muscle Group"
            />
            <Input
              {...register("setsReps")}
              variant="dashboard"
              error={errors.setsReps?.message}
              placeholder="Sets & Reps/Duration"
            />
            <Input
              {...register("restTime")}
              variant="dashboard"
              error={errors.restTime?.message}
              placeholder="Rest Time Between Sets"
            />
            <Input
              {...register("equipment")}
              variant="dashboard"
              error={errors.equipment?.message}
              placeholder="Equipment Needed"
            />
            <Input
              {...register("demo")}
              variant="dashboard"
              error={errors.demo?.message}
              placeholder="Demo Video/Image"
            />
            <Input
              {...register("coachNotes")}
              variant="dashboard"
              error={errors.coachNotes?.message}
              placeholder="Coach Notes"
            />
          </div>
          <div className="justify-between col-span-2 flex gap-4 mt-4">
            <Button type="button">Create a workout plan</Button>
            <Button variant="outline" type="button">
              Save for future use
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
