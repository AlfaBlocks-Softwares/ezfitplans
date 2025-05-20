import { Button } from "@/design-system";
import ClientProfileForm from "./clientprofileform";

const ClientProfile = () => {
  return (
    <>
      <section
        className="rounded-[12px] p-8 flex flex-col justify-start items-start w-full h-full min-h-[88dvh] mt-3"
        style={{
          background: "url('/client-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex justify-between items-center">
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
          <Button>Edit</Button>
        </div>

        <div className="py-10 w-[750px] max-w-[750px] h-full min-h-[480px] flex flex-col justify-center items-center gap-6 bg-[#000E0AE5] rounded-xl px-3 mt-8">
          <ClientProfileForm />
        </div>
      </section>
      <section className="my-3 w-full h-full flex flex-col justify-start items-start gap-3">
        <p className="font-noto-serif font-bold text-2xl text-black">
          Weight History
        </p>
      </section>
    </>
  );
};

export default ClientProfile;
