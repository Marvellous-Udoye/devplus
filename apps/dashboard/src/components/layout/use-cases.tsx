"use client";

import { motion, Variants } from "framer-motion";
import { Brain, Monitor, Zap } from "lucide-react";
import Card from "../custom/card";

export default function UseCases() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const useCases = [
    {
      icon: Monitor,
      title: "Real-time State Monitoring",
      description:
        "Track React states, props, and component lifecycles without leaving your page. See exactly what's happening in your app as it happens.",
    },
    {
      icon: Zap,
      title: "Network Request Debugging",
      description:
        "Monitor API calls, response times, and payloads in a clean overlay. Filter by domain and catch issues before they reach production.",
    },
    {
      icon: Brain,
      title: "AI-Powered Error Analysis",
      description:
        "Get intelligent suggestions for stack traces and error messages. Let AI help you identify patterns and suggest solutions.",
    },
  ];

  return (
    <section className="py-20">
      <motion.div
        className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col self-center justify-self-center max-w-[648px] lg:flex-1"
          variants={itemVariants}
        >
          <motion.h3
            className="text-white font-medium text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight lg:leading-[64px] mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Say goodbye to tab switching while debugging
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base font-normal leading-6 text-[#C1C3C9] max-md:text-balance max-w-5xl mx-auto md:mx-0 mb-8"
            variants={itemVariants}
          >
            DevPlus centralizes everything you need right on your dev screen —
            all in one unified overlay, so you can debug smarter and faster.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto lg:w-full lg:flex-1"
          variants={itemVariants}
        >
          <motion.div
            className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="aspect-video p-6">
              <div className="bg-slate-900 rounded-lg h-full border border-white/10 overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-slate-700 rounded px-3 py-1 text-xs text-white/70 ml-4 flex-1">
                    localhost:3000
                  </div>
                </div>

                <div className="p-4 h-full relative">
                  <div className="flex gap-2 mb-4">
                    <div className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded text-xs text-blue-300">
                      App.tsx
                    </div>
                    <div className="bg-slate-700 px-3 py-1 rounded text-xs text-white/50">
                      utils.ts
                    </div>
                    <div className="bg-slate-700 px-3 py-1 rounded text-xs text-white/50">
                      api.ts
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-green-500/10 border-l-2 border-green-500 pl-3 py-1 text-xs text-green-300 font-mono">
                      → React State: {"{user: 'active', posts: 12}"}
                    </div>
                    <div className="bg-blue-500/10 border-l-2 border-blue-500 pl-3 py-1 text-xs text-blue-300 font-mono">
                      → API Call: GET /api/users (234ms)
                    </div>
                    <div className="bg-purple-500/10 border-l-2 border-purple-500 pl-3 py-1 text-xs text-purple-300 font-mono">
                      → Performance: LCP 1.2s, FID 45ms
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-xs">
                    <div className="text-white/80 font-medium mb-1">
                      DevPlus Console
                    </div>
                    <div className="text-green-400">✓ Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
          >
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                variants={itemVariants}
                custom={index}
                variant="usecase"
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
