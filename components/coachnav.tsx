"use client";
import {
  arrowdown,
  logo,
  notifications,
  profile,
  search,
  settings,
} from "@/assets";
import { CoachDashboardNavItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, Menu } from "antd";

const TITLE = "EZ Fit Plans";

const CoachNavBar = () => {
  return (
    <nav className="bg-primary rounded-[12px] border-1 border-muted p-[12px] w-full h-[70px] flex justify-between items-center">
      <div className="flex justify-center items-center gap-[14px]">
        <Image src={logo} alt="logo" className="w-[30px] h-[30px]" />
        <p className="font-noto-serif font-bold text-2xl text-secondary">
          {TITLE}
        </p>
      </div>
      <ul className="flex justify-start items-center gap-[30px]">
        {CoachDashboardNavItems?.map((itm) =>
          itm?.subItems && itm.subItems.length > 0 ? (
            <Dropdown
              key={itm?.title}
              menu={{
                items: itm.subItems.map((sub: any) => ({
                  key: sub.title,
                  label: (
                    <Link
                      href={sub.path ?? ""}
                      className="font-poppins text-sm text-black cursor-pointer"
                    >
                      {sub.title}
                    </Link>
                  ),
                })),
              }}
              trigger={["click"]}
            >
              <li className="w-max font-noto-serif font-bold text-lg text-black cursor-pointer flex justify-center items-center gap-[10px]">
                {itm?.title}
                <Image
                  src={arrowdown}
                  alt="arrow-down"
                  className="w-[24px] h-[24px]"
                />
              </li>
            </Dropdown>
          ) : (
            <Link href={itm?.path ?? ""} key={itm?.title}>
              <li className="font-noto-serif font-bold text-lg text-black">
                {itm?.title}
              </li>
            </Link>
          )
        )}
      </ul>
      <div className="flex justify-center items-center gap-[16px]">
        <Image
          src={notifications}
          className="w-[24px] h-[24px]"
          alt="notifications"
        />
        <Image src={search} className="w-[24px] h-[24px]" alt="search" />
        <Image src={settings} className="w-[24px] h-[24px]" alt="settings" />
        <Image src={profile} className="w-[40px] h-[40px]" alt="profile" />
      </div>
    </nav>
  );
};

export default CoachNavBar;
