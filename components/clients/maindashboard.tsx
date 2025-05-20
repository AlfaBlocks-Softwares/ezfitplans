import { arrowuprightwhite } from "@/assets";
import { Button } from "@/design-system";
import Image from "next/image";

const ClientMainDashboard = () => {
  return (
    <section
      className="rounded-[12px] p-8 flex flex-col justify-start items-start w-full h-[88dvh] mt-3"
      style={{
        background: "url('/client-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="w-max flex flex-row justify-start items-start gap-4">
        <div className="w-20 h-20 rounded-[50%] bg-muted"></div>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="font-noto-serif text-primary font-bold text-2xl">
            Welcome, {}
          </p>
          <p className="font-poppins text-primary font-[400] text-sm">
            Current Subscription: {}
          </p>
        </div>
      </header>

      <div className="w-full h-full flex justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-poppins text-primary font-[400] text-sm text-center">
            No Active Plan{" "}
          </p>
          <p className="font-noto-serif text-primary font-bold text-2xl">
            Stronger, fitter, healthier - all you need is the right plan. Let's
            get started!
          </p>
          <div className="flex justify-center items-center gap-1">
            <Button>
              <div className="w-full flex justify-center items-center gap-[8px]">
                <p className="font-bold font-poppoins text-[14px]">
                  Buy a Diet Plan
                </p>
                <Image
                  src={arrowuprightwhite}
                  alt="arrow"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </Button>
            <Button
              variant={"secondary"}
              className="!bg-transparent !border-1 !border-primary !text-primary"
            >
              <div className="w-full flex justify-center items-center gap-[8px]">
                <p className="font-bold font-poppoins text-[14px]">
                  Buy a Work Out Plan
                </p>
                <Image
                  src={arrowuprightwhite}
                  alt="arrow"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMainDashboard;
