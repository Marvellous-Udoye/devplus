"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface VideoPlayerProps {
  videoLink?: string;
  className?: string;
  heading?: string;
  loop?: boolean;
  disableRelatedVideos?: boolean;
}

export default function VideoPlayer({
  videoLink,
  className = "",
  loop = false,
  disableRelatedVideos = false,
}: VideoPlayerProps) {
  const sectionRef = useRef(null);

  if (!videoLink) {
    return (
      <section
        ref={sectionRef}
        className="w-full overflow-hidden max-h-[703px]"
      >
        <div
          className={`relative aspect-video w-full min-h-[320px] max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-[inset_-4px_4px_60px_0_rgba(0,0,0,0.5)] ${className}`}
        >
          <div className="absolute inset-0 backdrop-blur-lg bg-black/60 flex items-center justify-center z-10">
            <motion.div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

            <div className="text-center relative z-10 p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span
                    className="text-green-400 text-sm font-medium tracking-wider"
                    style={{ fontFamily: "Azeret Mono" }}
                  >
                    IN PROGRESS
                  </span>
                </div>

                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "Azeret Mono" }}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.1)",
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 10px rgba(255,255,255,0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  DEMO COMING SOON
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6"
                  style={{ fontFamily: "Azeret Mono" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Building the custom dev console that will revolutionize how
                  you debug React apps
                </motion.p>
              </motion.div>

              <motion.div
                className="flex justify-center items-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0,
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  />
                </div>

                <span
                  className="text-xs sm:text-sm text-gray-400 tracking-wide"
                  style={{ fontFamily: "Azeret Mono" }}
                >
                  Chrome Extension • React DevTools • AI-Powered
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  let url = videoLink;
  if (loop) {
    const videoId = videoLink.split("/embed/")[1].split("?")[0];
    url += `?loop=1&playlist=${videoId}`;
  }
  if (disableRelatedVideos) {
    url += loop ? "&rel=0" : "?rel=0";
  }

  return (
    <section ref={sectionRef} className="w-full overflow-hidden max-h-[703px]">
      <div
        className={`relative aspect-video w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-[inset_-4px_4px_60px_0_rgba(0,0,0,0.5)] ${className}`}
      >
        <div className="absolute inset-0 bg-[rgba(240,240,240,0.1)] z-10 pointer-events-none" />
        <iframe
          src={url}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
}
