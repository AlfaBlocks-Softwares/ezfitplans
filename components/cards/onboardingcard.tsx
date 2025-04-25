interface Props {
  children: React.ReactNode;
}

export const OnboardingCard: React.FC<Props> = ({ children }) => {
  return (
    <main
      className="p-[44px] w-screen h-screen"
      style={{
        background: "url('login-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-onboarding-bg rounded-[32px] w-[700px] h-full flex flex-col justify-between items-center">
        {children}
      </div>
    </main>
  );
};
