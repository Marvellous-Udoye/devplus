"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { Button } from "../ui/button";

export default function Cta() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  };

  const buttonTap = {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-[687px] w-full mx-auto flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <motion.h3
            className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-snug sm:leading-tight md:leading-16 lg:leading-20 mb-4"
            variants={titleVariants}
          >
            Level Up Debugging
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base font-normal leading-6 text-[#C1C3C9] max-md:text-balanc"
            variants={fadeInUp}
          >
            Get started with Devplus - debug with ease.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-8"
          variants={fadeInUp}
        >
          <motion.div
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Button className="p-5 sm:p-8 cursor-pointer text-sm sm:text-base md:text-[18px] rounded-full border border-[#3AB9DB] [background:linear-gradient(93deg,_#1BB4BC_-2.39%,_#5F5DE7_51.79%,_#8174FD_90.03%),_linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),_linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.00)_100%)]">
              Get Extension
            </Button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Button className="p-5 sm:py-8 px-6 sm:px-9 md:px-10 cursor-pointer text-sm sm:text-base md:text-[18px] rounded-full border border-[#3AB9DB] [background:linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
