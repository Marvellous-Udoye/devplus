"use client";

import React, { useRef } from "react";

interface VideoPlayerProps {
  videoLink: string;
  className?: string;
  heading?: string;
  loop?: boolean;
  disableRelatedVideos?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
  className = "",
  loop = false,
  disableRelatedVideos = false,
}) => {
  const sectionRef = useRef(null);

  let url = videoLink;
  if (loop) {
    const videoId = videoLink.split("/embed/")[1].split("?")[0];
    url += `?loop=1&playlist=${videoId}`;
  }
  if (disableRelatedVideos) {
    url += loop ? "&rel=0" : "?rel=0";
  }

  return (
    <section ref={sectionRef} className="w-full">
      <div
        className={`relative aspect-video w-full max-w-[1148px] mx-auto overflow-hidden rounded-[24px] shadow-[inset_-4px_4px_60px_0_rgba(0,0,0,0.5)] ${className}`}
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
};

export default VideoPlayer;
