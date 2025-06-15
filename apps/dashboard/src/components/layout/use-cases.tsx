"use client";

import { motion, Variants } from "framer-motion";

export default function UseCases() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20">
      <motion.div
        className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col self-center justify-self-center max-w-[648px]"
          variants={itemVariants}
        >
          <motion.h3
            className="text-white font-medium text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight lg:leading-[64px] mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Say goodbye to tab switching while debugging.{" "}
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base font-normal leading-6 text-[#C1C3C9] max-md:text-balance max-w-5xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            DevPlus centralizes everything you need right on your dev screen —
            all in one unified overlay, so you can debug smarter and faster.
          </motion.p>
        </motion.div>

        <div className="w-full"></div>
      </motion.div>
    </section>
  );
}
