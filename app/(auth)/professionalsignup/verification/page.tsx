import dynamic from "next/dynamic";
const ProfessionalSignupVerification = dynamic(
  () => import("@/components/auth/professionalsignupverification")
);

export default function Login() {
  return <ProfessionalSignupVerification></ProfessionalSignupVerification>;
}
