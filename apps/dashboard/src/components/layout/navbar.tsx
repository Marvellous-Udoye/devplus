"use client";

import { motion, useAnimation } from "framer-motion";
import { Box } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const controls = useAnimation();

  return (
    <motion.nav
      className="py-4 md:py-6 text-white border-b border-white/0 bg-white/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4 px-4">
        <motion.h3
          onHoverStart={() => controls.start({ rotate: 12, scale: 1.1 })}
          onHoverEnd={() => controls.start({ rotate: -12, scale: 1 })}
          className="flex gap-2 items-center text-2xl sm:text-3xl font-medium leading-8 sm:leading-10 tracking-[-0.5px] sm:tracking-[-0.64px] cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            animate={controls}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Box size={32} className="-rotate-12" />
          </motion.div>
          <span className="hidden sm:inline-block">DevPlus</span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button className="p-4 sm:p-6 cursor-pointer text-sm sm:text-base md:text-[18px] rounded-full border border-[#3AB9DB] [background:linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] hover:scale-105 transition-transform duration-200">
            Get Extension
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
