import Animate from "@/components/Animate";
import Player from "@/components/ReactPlayer";
import { cn } from "@/lib/utils";
import React from "react";

export const YoutubeEmbed = async ({ className }: { className?: string }) => {
  const url =
    "https://yt-api.p.rapidapi.com/channel/videos?id=UCosl0QbU2kWlxVP5pbuGSsQ";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.YOUTUBE_API_KEY!,
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return (
    <section
      className={cn(
        " flex justify-center items-center md:my-10 w-full px-6",
        className
      )}
    >
      {/* <Animate
        hidden={{ opacity: 0, transform: "translateY(20px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 1 }}
        className="w-full"
      > */}
      <Player videoId={result.data[0].videoId} />
      {/* </Animate> */}
    </section>
  );
};
