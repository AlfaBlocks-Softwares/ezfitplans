interface Props {
  children: React.ReactNode;
}

export const OnboardingCard: React.FC<Props> = ({ children }) => {
  return (
    <main
      className="py-[20px] px-[44px] w-screen h-screen"
      style={{
        background: "url('/loginbg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-onboarding-bg rounded-[32px] w-[700px] h-[95dvh] overflow-y-scroll hide-scrollbar">
        {children}
      </div>
    </main>
  );
};
