import Animate from "@/components/Animate";
import Card from "@/components/Card";
import FollowerCount from "@/components/FollowerCount";
import Image from "next/image";
import React from "react";

export const About = async () => {
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
  console.log(result.data.follower_count);

  return (
    <section className="flex justify-between relative  items-center  flex-col h-[25rem] md:h-[40rem]  lg:h-[48rem] my-40">
      <div className="absolute w-svw h-[60rem] -top-64 left-1/2 -translate-x-1/2">
        <Image src={"/gradient.svg"} alt="gradient" fill className="-z-10 " />
      </div>
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
      >
        <Card className="flex gap-2  md:gap-6 justify-between items-end max-w-screen-lg">
          <div className="relative">
            <Animate
              hidden={{ opacity: 0, transform: "translateY(0px)" }}
              visible={{ opacity: 1, transform: "translateY(0)" }}
              stagger
              options={{ margin: "0%", staggerDelay: 0 }}
            >
              <div className="absolute h-fit -translate-y-[50%]  inset-0">
                <div className="w-full h-full bg-gradient-to-t from-card absolute to-30% to-transparent z-10"></div>
                <Image
                  className=""
                  src={"/samgilkes.png"}
                  alt="Sam Gilkes"
                  width={400}
                  height={400}
                />
              </div>
            </Animate>
            <h2 className="text-xl md:text-2xl lg:text-3xl z-10 relative font-bold max-w-sm leading-tight">
              Sam Gilkes.
            </h2>
            <p className="text-primary text-sm md:text-base relative z-10">
              Founder, Trenlines
            </p>
          </div>
          <div className="text-right space-y-4">
            <div>
              <FollowerCount
                initial={followerCount - 10}
                final={followerCount}
              />
              <div className="text-[0.73rem] md:text-sm">
                Followers on Instagram
              </div>
            </div>
            <p className="max-w-64 md:max-w-lg text-[0.53rem] md:text-sm lg:text-base  tracking-wider leading-snug">
              &quot;I&apos;m Sam Gilkes, former lawyer, turned trader. Focused
              on improving my skills daily and providing free value to the whole
              of #TeamTrenlines!&quot;
            </p>
          </div>
        </Card>
      </Animate>
    </section>
  );
};
