import dynamic from "next/dynamic";
const ClientSignup = dynamic(() => import("@/components/auth/clientsignup"));

export default function Login() {
  return <ClientSignup></ClientSignup>;
}
