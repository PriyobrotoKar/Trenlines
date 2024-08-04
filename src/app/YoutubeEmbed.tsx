import Player from "@/components/ReactPlayer";
import React from "react";

const YoutubeEmbed = async () => {
  const url =
    "https://youtube-v3-lite.p.rapidapi.com/search?channelId=UCosl0QbU2kWlxVP5pbuGSsQ&part=id%2Csnippet";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5b4b0280a4msh16a276e82193bb4p15724ajsnef745a051eb0",
      "x-rapidapi-host": "youtube-v3-lite.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result.items[0].id.videoId);

  return (
    <section className="flex justify-center items-center my-10">
      <Player videoId={result.items[0].id.videoId} />
    </section>
  );
};

export default YoutubeEmbed;
