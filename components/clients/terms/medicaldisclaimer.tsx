import { Button, Checkbox } from "@/design-system";

export default function MedicalDisclaimer() {
  return (
    <div className="bg-primary rounded-[12px] h-[88dvh] p-4 w-full mt-3">
      <p className="text-4xl font-noto-serif font-bold text-black text-start mb-8">
        Medical Disclaimer
      </p>

      <div className="space-y-14">
        <p className="text-sm font-poppins font-[400] text-black text-start">
          The workout and meal plans provided on EZ Fit Plans are for general
          guidance only and should not be considered medical advice. If you have
          any existing health conditions, please consult a healthcare
          professional before proceeding.
        </p>
      </div>

      <Checkbox
        label="I understand that this is not a substitute for medical advice"
        showBorder={true}
        labelClassName="!text-sm !text-start !font-poppins !text-black !font-[400]"
        className="m-6"
      />

      <div className="w-full flex justify-start items-center gap-3 mt-8">
        <Button>Agree and continue</Button>
        <Button className="w-[200px]" variant={"outline"}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
