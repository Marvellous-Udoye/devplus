import VideoPlayer from "../custom/video-player";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[1148px] w-full mx-auto flex flex-col gap-14 sm:gap-20 px-4 mb-6 py-10 text-center">
        <div>
          <h1 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-snug sm:leading-tight lg:leading-[72px] tracking-tight mb-6">
            Real-time, customizable debug dashboard for devs
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#C1C3C9] max-md:text-balance">
            Devplus is a web extension that provides a real-time, customizable
            debug dashboard for developers. It helps developers debug their apps
            faster and more efficiently.
          </p>
        </div>
        <VideoPlayer />
      </div>
    </section>
  );
}
