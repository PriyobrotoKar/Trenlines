import Animate from "@/components/Animate";
import Player from "@/components/ReactPlayer";
import React from "react";

export const YoutubeEmbed = async () => {
  const url =
    "https://youtube-v3-lite.p.rapidapi.com/search?channelId=UCosl0QbU2kWlxVP5pbuGSsQ&part=id%2Csnippet";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.YOUTUBE_API_KEY!,
      "x-rapidapi-host": "youtube-v3-lite.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result.items[0].id.videoId);

  return (
    <section className="flex justify-center items-center my-10">
      <Animate
        hidden={{ opacity: 0, transform: "translateY(20px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 1 }}
        className="w-full"
      >
        <Player videoId={result.items[0].id.videoId} />
      </Animate>
    </section>
  );
};
