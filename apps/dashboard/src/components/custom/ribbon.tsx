import { Box } from "lucide-react";
import { Fragment } from "react";

const qualities = ["Devplus", "Devplus", "Devplus"];

export default function Ribbon() {
  return (
    <div className="overflow-x-clip">
      <div className="bg-[rgba(255,255,255,0.05)]">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8 sm:gap-10 md:gap-14 pr-4 py-4 sm:py-5 md:py-[18px] animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {qualities.map((quality, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-6 sm:gap-10 md:gap-14 text-white/60"
                  >
                    <span className="uppercase font-light text-lg sm:text-xl md:text-2xl">
                      {quality}
                    </span>
                    <Box className="size-6 sm:size-7 md:size-8 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
