import { logo } from "@/assets";
import { navItems } from "@/constants/nav";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-[12px] flex justify-between items-center  h-[70px] border-b-1 border-b-muted ">
      <div className="flex justify-start items-center gap-[14px] !z-[9999]">
        <Image src={logo} alt="logo" className="w-[30px] h-[30px] !z-[9999]" />
        <p className="font-bold text-2xl font-noto-serif text-secondary cursor-pointer">
          EZ Fit Plans
        </p>
      </div>
      <ul className="flex items-center gap-[36px]">
        {navItems?.map((itm, index) => (
          <li key={index}>
            <Link
              href={itm?.path}
              className="font-bold font-poppins text-sm text-black"
            >
              {itm?.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
