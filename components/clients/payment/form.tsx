import { Button, Checkbox } from "@/design-system";

export default function PaymentForm() {
  return (
    <main className="w-full bg-primary rounded-[12px] px-3 py-8 flex flex-row justify-start items-start mt-3 gap-8">
      <div className="flex flex-col justify-start items-start gap-8 w-[450px]">
        <h1 className="font-noto-serif text-2xl text-black font-bold">
          Choose Plan
        </h1>

        <div className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex justify-start items-start gap-2">
            <Checkbox
              showBorder={true}
              label="Basic ($10/month)"
              labelClassName="!font-poppins !text-sm !font-[400] !text-black"
            />
          </div>
          <div className="w-full flex justify-start items-start gap-2">
            <Checkbox
              showBorder={true}
              label="Basic ($10/month)"
              labelClassName="!font-poppins !text-sm !font-[400] !text-black"
            />
          </div>
        </div>

        <div className="w-full flex justify-start items-start gap-2">
          <Button>Auto-Renewal On</Button>
          <Button variant={"outline"}>Auto-Renewal Off</Button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-8 w-[450px]">
        <h1 className="font-noto-serif text-2xl text-black font-bold">
          Payment Methods
        </h1>

        <div className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex justify-start items-start gap-2">
            <Checkbox
              showBorder={true}
              label="Credit/Debit Card"
              labelClassName="!font-poppins !text-sm !font-[400] !text-black"
            />
          </div>
          <div className="w-full flex justify-start items-start gap-2">
            <Checkbox
              showBorder={true}
              label="Paypal / Stripe"
              labelClassName="!font-poppins !text-sm !font-[400] !text-black"
            />
          </div>
        </div>

        <Button>Download Receipt</Button>
      </div>
    </main>
  );
}
