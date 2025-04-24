import dynamic from "next/dynamic";
const ProfessionalSignup = dynamic(
  () => import("@/components/auth/professionalsignup")
);

export default function Login() {
  return <ProfessionalSignup></ProfessionalSignup>;
}
