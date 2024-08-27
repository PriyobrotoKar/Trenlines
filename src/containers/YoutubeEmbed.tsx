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
      <Player videoId={result.data[0].videoId} />
    </section>
  );
};
