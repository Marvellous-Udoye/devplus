import Ribbon from "@/components/custom/ribbon";
import Features from "@/components/layout/features";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full mx-auto flex flex-col gap-10 bg-[#232323]">
      <Navbar />
      <Hero />
      <Ribbon />
      <Features />
      <Ribbon />
    </main>
  );
}
