"use client";

import { motion, Variants } from "framer-motion";

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 0.6,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20">
      <motion.div
        className="max-w-7xl mx-auto w-full flex flex-col gap-14 sm:gap-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-end md:text-center max-w-5xl md:mx-auto"
          variants={slideInFromLeft}
        >
          <motion.h3
            className="text-white font-medium text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight lg:leading-[64px] mb-4"
            variants={fadeInUp}
          >
            Powerful features to streamline your debugging workflow
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base font-normal leading-6 text-[#C1C3C9] max-md:text-balance"
            variants={fadeInUp}
          >
            DevPlus is packed with features designed to make debugging easier
            and more efficient. Explore some of the key capabilities below.
          </motion.p>
        </motion.div>
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeInUp}
        ></motion.div>
      </motion.div>
    </section>
  );
}
