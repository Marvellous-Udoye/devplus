"use client";

import { motion, Variants } from "framer-motion";
import { BugPlay, PlugZap, Share2 } from "lucide-react";
import Card from "../custom/card";

export const extensionFeatures = [
  {
    icon: PlugZap,
    title: "One-Click DevTools",
    description:
      "Instantly hook into browser DevTools for faster overlay debugging.",
  },
  {
    icon: BugPlay,
    title: "Live Debug Mode",
    description: "Watch and tweak components as they update in real-time.",
  },
  {
    icon: Share2,
    title: "Unified App Bridge",
    description: "Sync data across apps with one connected debugging channel.",
  },
];

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
            Development-Mode Console That Actually Works
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base font-normal leading-6 text-[#C1C3C9] max-md:text-balance"
            variants={fadeInUp}
          >
            DevPlus activates only in development mode, overlaying a live
            console that shows React states, network requests, performance
            timings, and AI-powered debugging assistance.
          </motion.p>
        </motion.div>
        <motion.div className="max-w-5xl w-full mx-auto" variants={fadeInUp}>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {extensionFeatures.map(({ icon, title, description }, index) => (
              <Card
                key={title}
                icon={icon}
                title={title}
                description={description}
                variants={fadeInUp}
                custom={index}
                variant="feature"
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
