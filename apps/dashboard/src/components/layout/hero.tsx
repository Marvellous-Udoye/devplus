"use client";

import { motion, Variants } from "framer-motion";
import VideoPlayer from "../custom/video-player";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section>
      <motion.div
        className="max-w-[1148px] w-full mx-auto flex flex-col gap-14 sm:gap-20 px-4 mb-6 py-10 sm:text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-snug sm:leading-tight lg:leading-[72px] tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Find Bugs Instantly
              <br className="hidden xl:block" /> With a Visual, Real-Time Debug
              Panel
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#C1C3C9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Real-time overlay that simplify debugging and speed up development
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <VideoPlayer />
        </motion.div>
      </motion.div>
    </section>
  );
}
