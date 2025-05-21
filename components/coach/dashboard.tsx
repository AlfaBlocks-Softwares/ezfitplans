import { arrowuprightwhite, search } from "@/assets";
import { CoachDashboardData, sampleClients } from "@/constants";
import { Button, Input } from "@/design-system";
import Image from "next/image";
import React from "react";
import CoachClientManagementTable from "./clientstable";
import Link from "next/link";

const CoachDashboardLandingPage = () => {
  return (
    <main className="py-3 w-full flex flex-col gap-3">
      <header className="px-23 bg-primary rounded-[12px] border-1 border-muted p-3 w-full flex justify-center items-center gap-5">
        <p className="text-start font-noto-serif font-bold text-secondary text-4xl">
          Your coaching hub - manage clients, create plans, and monitor success
          at a glance!
        </p>
        <Button>
          <div className="w-full flex justify-center items-center gap-[8px]">
            <p className="font-bold font-poppoins text-[14px]">
              Invite a new client
            </p>
            <Image
              src={arrowuprightwhite}
              alt="arrow"
              className="w-[24px] h-[24px]"
            />
          </div>
        </Button>
      </header>

      <section className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="bg-primary rounded-[12px] border-1 border-muted w-full p-8 flex justify-start items-start flex-col gap-4">
          <p className="font-noto-serif font-bold text-2xl">Expiring plans</p>
          <div className="flex flex-col justify-start items-start gap-1">
            {CoachDashboardData?.expiringPlans?.map((itm) => (
              <p className="font-poppins font-[400] text-sm">
                {itm.name} - {itm.expiresOn}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-primary rounded-[12px] border-1 border-muted w-full p-8 flex justify-start items-start flex-col gap-4">
          <p className="font-noto-serif font-bold text-2xl">
            Financial Overview
          </p>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="font-poppins font-[400] text-sm">
              Earnings: ${CoachDashboardData?.financialOverview?.earnings}
            </p>
            <p className="font-poppins font-[400] text-sm">
              Pending Payments: $
              {CoachDashboardData?.financialOverview?.pendingPayments}
            </p>
          </div>
        </div>
        <div className="bg-primary rounded-[12px] border-1 border-muted w-full p-8 flex justify-start items-start flex-col gap-4">
          <p className="font-noto-serif font-bold text-2xl">Notifications</p>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="font-poppins font-[400] text-sm">
              Unread Messages:{" "}
              {CoachDashboardData?.notifications?.unreadMessages}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full grid gird-cols-1 lg:grid-cols-2 gap-3">
        <div className="p-3 bg-primary rounded-[12px] border-1 border-muted w-full flex justify-center items-center gap-5">
          <p className="text-start font-noto-serif font-bold text-secondary text-2xl">
            Small progress is still progress - keep going!
          </p>
          <Link href="/coach/create-diet-plan">
            <Button>
              <div className="w-full flex justify-center items-center gap-[8px]">
                <p className="font-bold font-poppoins text-[14px]">
                  Create a diet plan
                </p>
                <Image
                  src={arrowuprightwhite}
                  alt="arrow"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </Button>
          </Link>
        </div>
        <div className="p-3 bg-primary rounded-[12px] border-1 border-muted w-full flex justify-center items-center gap-5">
          <p className="text-start font-noto-serif font-bold text-secondary text-2xl">
            You don't have to be extreme, just consistent.
          </p>
          <Link href="/coach/create-workout-plan">
            <Button>
              <div className="w-full flex justify-center items-center gap-[8px]">
                <p className="font-bold font-poppoins text-[14px]">
                  Create a workout plan
                </p>
                <Image
                  src={arrowuprightwhite}
                  alt="arrow"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </Button>
          </Link>
        </div>
      </section>
      <section className="bg-primary rounded-[12px] border-1 border-muted p-3 w- h-full flex flex-col justify-start items-start gap-3">
        <p className="font-noto-serif font-bold text-2xl text-black">
          Client Management
        </p>
        <div className="w-full flex justify-between items-center">
          <p className="font-noto-serif font-bold text-2xl text-black">
            Total Clients: 50
          </p>

          <div className="w-full relative  max-w-[430px]">
            <Image
              src={search}
              alt="search"
              className="w-[18px] h-[18px] absolute left-4 top-3"
            />
            <Input
              className="pl-10 border-1 border-muted w-full"
              placeholder="Search"
            />
          </div>
        </div>
        <CoachClientManagementTable clients={sampleClients} />
      </section>
    </main>
  );
};

export default CoachDashboardLandingPage;
