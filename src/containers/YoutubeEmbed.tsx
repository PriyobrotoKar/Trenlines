import Animate from "@/components/Animate";
import Player from "@/components/ReactPlayer";
import React from "react";

export const YoutubeEmbed = async () => {
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
  console.log(result.data[0].videoId);

  return (
    <section className="flex justify-center items-center my-10">
      <Animate
        hidden={{ opacity: 0, transform: "translateY(20px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 1 }}
        className="w-full"
      >
        <Player videoId={result.data[0].videoId} />
      </Animate>
    </section>
  );
};
