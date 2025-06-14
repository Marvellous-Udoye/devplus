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
      href: "https://github.com/Marvellous-Udoye",
      icon: <Github size={24} />,
    },
  ];

  return (
    <section className="py-6 bg-[rgba(255,255,255,0.05)]">
      <div className="max-w-md w-full mx-auto flex flex-col gap-12 sm:gap-16 px-4 text-center">
        <div>
          <h3 className="text-[#4E9ECB] text-2xl sm:text-3xl font-medium leading-tight tracking-[-0.64px]">
            Devplus
          </h3>
          <p className="text-[#C1C3C9] mt-2 mb-6 sm:mb-8 text-sm sm:text-base font-normal leading-6">
            Your super dev tool
          </p>
          <div className="flex gap-6 justify-center">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-[#98A2B3] hover:text-[#4E9ECB] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-[#888B92] text-sm sm:text-base font-medium leading-6">
          ©{year} Devplus. All rights reserved.
        </p>
      </div>
    </section>
  );
}
