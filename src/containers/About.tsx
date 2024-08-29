import { getSection } from "@/actions/getSection";
import Animate from "@/components/Animate";
import Card from "@/components/Card";
import FollowerCount from "@/components/FollowerCount";
import Image from "next/image";
import React from "react";

const getInstagramFollowers = async () => {
  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=trenlines";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.INSTAGRAM_API_KEY!,
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const followerCount = result.data.follower_count / 1000;

  return followerCount;
};

export const About = async () => {
  const data = await getSection("mentor");
  if (!data) {
    return null;
  }
  const content = data.content as Record<string, string>;

  const followerCount = await getInstagramFollowers();
  return (
    <section
      id="about"
      className="flex justify-between relative  items-center  flex-col h-[20rem] md:h-[40rem]  lg:h-[48rem] my-28 md:my-80"
    >
      <Animate
        hidden={{ opacity: 0 }}
        visible={{ opacity: 1 }}
        stagger
        options={{ offsetDelay: 0.7 }}
        className="absolute w-svw h-[60rem] -top-full md:-top-64 left-1/2 -translate-x-1/2"
      >
        <Image src={"/gradient.svg"} alt="gradient" fill className="-z-10 " />
      </Animate>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center"
      >
        <p className="font-light text-sm md:text-base text-muted-foreground opacity-60 tracking-widest">
          FULL TIME TRADER
        </p>
        <h1 className="text-lg md:text-2xl">Know your Mentor</h1>
      </Animate>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 0.5 }}
        className="lg:w-[85%]"
      >
        <Card className="flex gap-2 p-6 md:p-8  md:gap-6 justify-between items-end w-full">
          <div className="relative">
            <Animate
              hidden={{ opacity: 0, transform: "translateY(0px)" }}
              visible={{ opacity: 1, transform: "translateY(0)" }}
              stagger
              options={{ margin: "0%", staggerDelay: 0 }}
            >
              <div className="absolute w-32 md:w-80 h-fit -translate-y-[50%]  inset-0 md:left-10">
                <div className="w-full h-full bg-gradient-to-t from-card absolute to-50% to-transparent z-10"></div>
                <Image
                  className=""
                  src={"/samgilkes.png"}
                  alt="Sam Gilkes"
                  width={400}
                  height={400}
                />
              </div>
            </Animate>
            <h2 className="text-xl md:text-2xl lg:text-3xl z-10 relative font-bold max-w-sm leading-[1]">
              Sam Gilkes.
            </h2>
            <p className="text-primary text-[0.65rem] md:text-base relative z-10 leading-tight tracking-wide">
              Founder, Trenlines
            </p>
          </div>
          <div className="text-right space-y-4">
            <div>
              <FollowerCount initial={0} final={followerCount} />
              <div className="text-[0.53rem] md:text-sm">
                Followers on Instagram
              </div>
            </div>
            <p className="max-w-64 md:max-w-lg text-[0.53rem] md:text-sm lg:text-base  tracking-wider leading-snug">
              {content.introduction}
            </p>
          </div>
        </Card>
      </Animate>
    </section>
  );
};
