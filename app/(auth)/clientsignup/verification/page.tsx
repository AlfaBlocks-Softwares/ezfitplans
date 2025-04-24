import dynamic from "next/dynamic";
const ClientSignupVerification = dynamic(
  () => import("@/components/auth/clientsignupverify")
);

export default function Login() {
  return <ClientSignupVerification></ClientSignupVerification>;
}
