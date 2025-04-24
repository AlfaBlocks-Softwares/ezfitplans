import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("@/components/auth/loginform"));

export default function Login() {
  return <LoginPage></LoginPage>;
}
