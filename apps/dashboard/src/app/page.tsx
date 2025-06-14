"use client";

import { motion } from "framer-motion";
import Ribbon from "@/components/custom/ribbon";
import Cta from "@/components/layout/cta";
import Features from "@/components/layout/features";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import UseCases from "@/components/layout/use-cases";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="relative max-w-[1440px] w-full mx-auto flex flex-col gap-10 bg-[#232323] overflow-hidden">
      <motion.div
        className="absolute left-[30%] top-[3%] -translate-x-1/2 -translate-y-1/4 pointer-events-none z-0"
        style={{
          width: "clamp(200px, 40vw, 433.788px)",
          height: "clamp(300px, 60vh, 636.579px)",
          borderRadius: "50%",
          background: "linear-gradient(180deg, #2603FB 0%, #AA9CFF 100%)",
          filter: "blur(95px)",
          transform: "rotate(76.66deg)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.div
        className="absolute left-[5%] top-[8%] -translate-x-1/2 -translate-y-1/4 pointer-events-none z-0"
        style={{
          width: "clamp(300px, 50vw, 697.406px)",
          height: "clamp(400px, 70vh, 818.518px)",
          borderRadius: "50%",
          background: "linear-gradient(262deg, #8B43E6 4.87%, #06FFF0 87.02%)",
          filter: "blur(134px)",
          transform: "rotate(54.351deg)",
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      <motion.div
        className="absolute -left-[30%] top-[15%] -translate-x-1/2 -translate-y-1/4 pointer-events-none z-0"
        style={{
          width: "clamp(250px, 40vw, 450.249px)",
          height: "clamp(300px, 60vh, 587.072px)",
          borderRadius: "50%",
          background: "linear-gradient(180deg, #03FBCE 0%, #06FFF0 100%)",
          filter: "blur(177px)",
          transform: "rotate(76.66deg)",
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.9 }}
      />

      <motion.div
        className="relative z-10 flex flex-col gap-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <Navbar />
        <Hero />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col gap-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "clamp(-80px, -5vh, -49px)",
            right: "clamp(-250px, -15vw, -208.679px)",
            width: "clamp(300px, 45vw, 490.219px)",
            height: "clamp(300px, 45vw, 690.219px)",
            borderRadius: "50%",
            background: "linear-gradient(180deg, #1C9AA8 0%, #4B4FDD 100%)",
            filter: "blur(250px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        <motion.div variants={fadeInUp}>
          <Ribbon />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Features />
        </motion.div>
      </motion.div>

      <motion.div {...fadeInUp}>
        <Ribbon />
      </motion.div>

      <motion.div {...fadeInUp}>
        <UseCases />
      </motion.div>

      <motion.div
        className="relative z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "105%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(76.66deg)",
            width: "clamp(180px, 25vw, 277.641px)",
            height: "clamp(250px, 40vh, 407.435px)",
            borderRadius: "50%",
            background: "linear-gradient(180deg, #2603FB 0%, #AA9CFF 100%)",
            filter: "blur(95px)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "115%",
            left: "35%",
            transform: "translate(-50%, -50%) rotate(76.66deg)",
            width: "clamp(180px, 22vw, 288.177px)",
            height: "clamp(250px, 35vh, 375.749px)",
            borderRadius: "50%",
            background: "linear-gradient(180deg, #03FBCE 0%, #06FFF0 100%)",
            filter: "blur(177px)",
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "125%",
            left: "60%",
            transform: "translate(-50%, -50%) rotate(-22.538deg)",
            width: "clamp(150px, 20vw, 221.806px)",
            height: "clamp(150px, 20vw, 221.806px)",
            borderRadius: "50%",
            background: "linear-gradient(180deg, #2603FB 0%, #5B23D3 100%)",
            filter: "blur(177px)",
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Cta />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Footer />
      </motion.div>
    </main>
  );
}
