import Ribbon from "@/components/custom/ribbon";
import Cta from "@/components/layout/cta";
import Features from "@/components/layout/features";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import UseCases from "@/components/layout/use-cases";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full mx-auto flex flex-col gap-10 bg-[#232323]">
      <Navbar />
      <Hero />
      <Ribbon />
      <Features />
      <Ribbon />
      <UseCases />
      <Cta />
      <Footer />
    </main>
  );
}
