"use client";

import { motion } from "framer-motion";
import { Box } from "lucide-react";
import { Fragment } from "react";

const qualities = ["DevPlus", "DevPlus", "DevPlus"];

export default function Ribbon() {
  return (
    <motion.div
      className="overflow-x-clip"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-[rgba(255,255,255,0.05)]">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-none gap-8 sm:gap-10 md:gap-14 pr-4 py-4 sm:py-5 md:py-[18px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...new Array(4)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {qualities.map((quality, qualityIndex) => (
                  <motion.div
                    key={qualityIndex}
                    className="inline-flex items-center gap-6 sm:gap-10 md:gap-14 text-white/60 whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (index * qualities.length + qualityIndex) * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="uppercase font-light text-lg sm:text-xl md:text-2xl">
                      {quality}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box className="size-6 sm:size-7 md:size-8 -rotate-12" />
                    </motion.div>
                  </motion.div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
