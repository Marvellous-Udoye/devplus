"use client";

import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

type CardVariant = "feature" | "usecase";

type UnifiedCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  variants: Variants;
  custom?: number;
  variant?: CardVariant;
};

export default function Card({
  icon: Icon,
  title,
  description,
  variants,
  custom,
  variant = "feature",
}: UnifiedCardProps) {
  const isFeatureVariant = variant === "feature";

  return (
    <motion.div
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/8 transition-all duration-300 group cursor-pointer"
      variants={variants}
      custom={custom}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {isFeatureVariant ? (
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-white" />
            <h4 className="text-white font-semibold text-lg group-hover:text-white/90 transition-colors duration-300">
              {title}
            </h4>
          </div>
          <p className="text-sm text-[#C1C3C9] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
            {description}
          </p>
        </div>
      ) : (
        <div className="p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm md:text-base max-md:mb-2 mb-1 group-hover:text-white/90 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-xs font-normal text-[#C1C3C9] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
