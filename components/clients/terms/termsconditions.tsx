import { Checkbox } from "@/design-system";

export default function TermsOfService() {
  const liClass = "text-sm font-poppins font-[400] text-black text-start";

  return (
    <div className="bg-primary rounded-[12px] p-4 w-full mt-3">
      <p className="text-4xl font-noto-serif font-bold text-black text-start mb-8">
        Term of services
      </p>

      <p className="text-sm font-poppins font-[400] text-black text-start my-5">
        Welcome to EZ Fit Plans! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you use our platform.
      </p>

      <div className="space-y-8">
        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            Eligibility & User Accounts
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={liClass}>
              Users must be at least 18 years old or have parental consent to
              use the platform.
            </li>
            <li className={liClass}>
              Users are responsible for maintaining the confidentiality of their
              accounts.
            </li>
            <li className={liClass}>
              Any fraudulent activity or false information may result in account
              suspension.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            Health & Medical Disclaimer
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={liClass}>
              EZ Fit Plans provides general fitness and nutritional guidance. It
              is not a substitute for professional medical advice.
            </li>
            <li className={liClass}>
              Consult a doctor before starting any new diet or workout plan.
            </li>
            <li className={liClass}>
              The company is not liable for injuries, health complications, or
              adverse effects resulting from the use of our plans.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            Payment, Subscription & Refund Policy
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={liClass}>
              Subscription plans are billed on a recurring basis unless
              canceled.
            </li>
            <li className={liClass}>
              Users can cancel subscriptions at any time, but refunds are only
              issued under certain conditions.
            </li>
            <li className={liClass}>
              If a plan is canceled mid-cycle, users retain access until the end
              of the billing period.
            </li>
            <li className={liClass}>
              EZ Fit Plans reserves the right to change pricing with prior
              notice.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            Content Ownership & Usage
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={liClass}>
              All meal plans, workout guides, and other content are the property
              of EZ Fit Plans.
            </li>
            <li className={liClass}>
              Users may not reproduce, resell, or distribute our content without
              permission.
            </li>
            <li className={liClass}>
              Coaches and professionals retain rights to their original content
              but grant EZ Fit Plans a license to display and promote it.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-noto-serif font-bold text-black text-start mb-3">
            User Conduct & Community Guidelines
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={liClass}>
              Users must engage respectfully within the community forums.
            </li>
            <li className={liClass}>
              Any harassment, hate speech, or inappropriate behavior may result
              in account suspension.
            </li>
            <li className={liClass}>
              Reviews and feedback must be honest and based on real experiences.
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-start items-center gap-3">
          <Checkbox
            label="By using EZ Fit Plans, you agree to these Terms & Conditions."
            showBorder={true}
            labelClassName="text-sm text-start font-poppins !text-black font-[400]"
          />
        </div>
      </div>
    </div>
  );
}
