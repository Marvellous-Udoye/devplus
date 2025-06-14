import { Button } from "../ui/button";

export default function Cta() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[687px] w-full mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h3 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-snug sm:leading-tight md:leading-16 lg:leading-20 mb-4">
            Level Up Debugging
          </h3>
          <p className="text-sm sm:text-base font-normal leading-6 text-[#C1C3C9] max-md:text-balanc">
            Get started with Devplus - debug with ease.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <Button className="p-5 sm:p-8 cursor-pointer text-sm sm:text-base md:text-[18px] rounded-full border border-[#3AB9DB] [background:linear-gradient(93deg,_#1BB4BC_-2.39%,_#5F5DE7_51.79%,_#8174FD_90.03%),_linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),_linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.00)_100%)]">
            Get Extension
          </Button>
          <Button className="p-5 sm:py-8 px-6 sm:px-9 md:px-10 cursor-pointer text-sm sm:text-base md:text-[18px] rounded-full border border-[#3AB9DB] [background:linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
