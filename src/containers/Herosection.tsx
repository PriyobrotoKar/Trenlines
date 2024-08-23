import Animate from "@/components/Animate";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { YoutubeEmbed } from "./YoutubeEmbed";
import { getSection } from "@/actions/getSection";
import { JsonObject } from "@prisma/client/runtime/library";

export const Herosection = async () => {
  const data = await getSection("heroSection");

  if (!data) {
    return null;
  }

  console.log(data.content);

  const content = data.content as Record<string, string>;

  return (
    <section className="min-h-[70vh] ">
      <div className="absolute w-full h-full inset-0 -z-10 ">
        <div className="bg-gradient-to-t from-background to-background/30 w-full h-full "></div>
        <Image
          src={"/heroBackground.jpeg"}
          className="object-cover relative -z-20 opacity-10"
          alt="Hero Background"
          fill
        />
      </div>
      <main className="min-h-[inherit]">
        <Animate
          hidden={{ opacity: 0, transform: "translateY(10px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          stagger
          className="flex justify-center items-center flex-col gap-8 lg:gap-12 min-h-[inherit]"
          childClassNames="w-full"
        >
          <h1 className="text-xl md:text-2xl text-center  font-bold leading-tight">
            The <span className="text-primary">Fastest</span> Way To{" "}
            <span className="text-primary">Profitability</span> for Beginner
            Traders
          </h1>
          <p className="tracking-wider text-center text-md md:text-base">
            Become financially independent, early in the game.
          </p>
          <Animate
            hidden={{ opacity: 0, transform: "translateY(10px)" }}
            visible={{ opacity: 1, transform: "translateY(0)" }}
            stagger
            options={{ margin: "0%", staggerDelay: 0.8 }}
            className="flex flex-col-reverse md:flex-col   md:gap-20 justify-center items-center"
            childClassNames="w-full "
          >
            <Animate
              hidden={{ opacity: 0, transform: "translateY(10px)" }}
              visible={{ opacity: 1, transform: "translateY(0)" }}
              stagger
              options={{ margin: "0%", staggerDelay: 0.5 }}
              className="text-center space-y-8"
            >
              <YoutubeEmbed className="flex md:hidden" />
              <a href={content.ctaLink}>
                <Button className="gap-2">
                  {content.ctaLabel} <Icons.LinkArrow />
                </Button>
              </a>
              <div className="flex gap-4 justify-center items-center">
                <div className="inline-flex">
                  {[...Array(4).fill("/people1.svg")].map((img, i) => {
                    return (
                      <Image
                        src={img}
                        className="-ml-2"
                        style={{
                          filter: `brightness(${0.5 + (0.5 / 3) * i})`,
                        }}
                        alt="People"
                        key={i}
                        width={26}
                        height={26}
                      />
                    );
                  })}
                </div>
                <div className="text-sm font-light">
                  <span className="font-bold">100+</span> worldwide enrolled
                </div>
              </div>
            </Animate>
            <YoutubeEmbed className="hidden md:flex" />
          </Animate>
        </Animate>
      </main>
    </section>
  );
};
