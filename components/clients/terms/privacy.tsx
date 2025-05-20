import { Checkbox } from "@/design-system";

export default function ClientsPrivacy() {
  const liClass = "text-sm font-poppins font-[400] text-black text-start";

  return (
    <div className="bg-primary rounded-[12px] p-4 w-full mt-3 min-h-[88dvh]">
      <p className="text-4xl font-noto-serif font-bold text-black text-start mb-8">
        Privacy Policy
      </p>

      <p className="text-sm font-poppins font-[400] text-black text-start my-5">
        Welcome to EZ Fit Plans! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you use our platform.
      </p>

      <div className="space-y-8">
        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            Information We Collect
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={liClass}>
              Personal Information: Name, email, phone number, and profile
              details.
            </li>
            <li className={liClass}>
              Health & Fitness Data: Workout history, meal plans, progress
              tracking.
            </li>
            <li className={liClass}>
              Device & Usage Data: IP address, browser type, and session
              activity.
            </li>
            <li className={liClass}>
              Payment Information: Processed securely through third-party
              providers (Stripe, PayPal, etc.).
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            How We Use Your Information
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-sm font-poppins font-[400] text-black text-start">
              To Provide Services: Personalize workout and meal plans.
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              To Improve User Experience: Analyze engagement and platform usage.
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              To Ensure Security: Monitor for fraud, suspicious activity, and
              account safety.
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              To Communicate Updates: Send plan reminders, promotions, and
              support messages.
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              To Comply with Legal Obligations: Maintain data security and
              comply with regulations.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            Third–Party Data Sharing
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-sm font-poppins font-[400] text-black text-start">
              Payment Processors: Secure transactions (Stripe, PayPal, etc.).
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              Analytics Tools: Improve user experience (Google Analytics, etc.).
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              Marketing Platforms: Deliver personalized ads (only if you
              opt-in).
            </li>
            <li className="text-sm font-poppins font-[400] text-black text-start">
              We Do NOT Sell Personal Data to third parties.
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-start items-center gap-3 mt-5">
          <Checkbox
            label="By using EZ Fit Plans, you agree to this policy"
            showBorder={true}
            labelClassName="!text-sm !text-start !font-poppins !text-black !font-[400]"
          />
        </div>
      </div>
    </div>
  );
}
