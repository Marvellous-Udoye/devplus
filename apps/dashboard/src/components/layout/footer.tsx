"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "Email",
      href: "mailto:marveldoc17@gmail.com",
      icon: <Mail size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/marvellous-udoye/",
      icon: <Linkedin size={24} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Marvellous-Udoye/devplus",
      icon: <Github size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const socialHover = {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  };

  return (
    <section className="py-6 bg-[rgba(255,255,255,0.05)]">
      <motion.div
        className="max-w-md w-full mx-auto flex flex-col gap-12 sm:gap-16 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={fadeInUp}>
          <motion.h3
            className="text-[#4E9ECB] text-2xl sm:text-3xl font-medium leading-tight tracking-[-0.64px]"
            variants={fadeInUp}
          >
            Devplus
          </motion.h3>
          <motion.p
            className="text-[#C1C3C9] mt-2 mb-6 sm:mb-8 text-sm sm:text-base font-normal leading-6"
            variants={fadeInUp}
          >
            Your super dev tool
          </motion.p>
          <motion.div
            className="flex gap-6 justify-center"
            variants={containerVariants}
          >
            {socials.map((social, index) => (
              <motion.div
                key={social.name}
                variants={socialIconVariants}
                whileHover={socialHover}
                custom={index}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="text-[#98A2B3] hover:text-[#4E9ECB] transition-colors inline-block"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-[#888B92] text-sm sm:text-base font-medium leading-6"
          variants={fadeInUp}
        >
          ©{year} Devplus. All rights reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
