"use client";
import { footerItems, socailMediaLinks } from "@/constants";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TITLE = "EZ FIT PLANS";
const SUB_TITLE = "Fitness Matters";

export default function Footer() {
  const leftSectionControls = useAnimation();
  const rightSectionControls = useAnimation();

  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.4,
      },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      leftSectionControls.start("visible");
      rightSectionControls.start("visible");
    } else {
      leftSectionControls.start("hidden");
      rightSectionControls.start("hidden");
    }
  }, [isInView, leftSectionControls, rightSectionControls]);

  return (
    <div
      ref={footerRef}
      className="w-full flex flex-col justify-center items-center"
    >
      <main className="w-full mb-spacing-4xl grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        <motion.div
          className="w-full flex flex-col justify-start items-start gap-[20px]"
          initial="hidden"
          animate={leftSectionControls}
          variants={leftVariant}
        >
          <p className="text-4xl text-start text-smoky font-noto-serif font-bold">
            {TITLE}
          </p>
          <p className="text-sm text-smoky break-words text-start">
            {SUB_TITLE}
          </p>
          <div className="w-full flex justify-start items-start gap-[12px]">
            {socailMediaLinks?.map((itm) => (
              <Link
                href={itm?.link}
                className="w-[24px] h-[24px]"
                key={itm?.key}
              >
                <Image src={itm?.icon} alt="social"></Image>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start lg:justify-end items-start gap-[20px] flex-wrap lg:flex-nowrap"
          initial="hidden"
          animate={rightSectionControls}
          variants={rightVariant}
        >
          {footerItems?.map((itm, index) => (
            <div
              className="flex flex-col justify-start items-start gap-[12px] pr-[16px] "
              key={index}
            >
              <span className="text-[24px] font-bold text-smoky">
                {itm?.title}
              </span>
              <div className="flex flex-col justify-start items-start gap-[12px]">
                {itm?.subItems?.map((sub, index) => (
                  <a
                    href={sub?.link}
                    className="text-[14px] text-smoky font-inter"
                    key={index}
                  >
                    {sub?.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      <div className="w-full border-t-2 border-muted mt-[95px]"></div>

      <motion.p
        className="self-center text-center text-smoky mt-[30px] lg:mt-[48px] font-inter"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, duration: 1, staggerChildren: 0.5 },
        }}
      >
        Copyrights@ezfitplans. All rights reserved
      </motion.p>
    </div>
  );
}
