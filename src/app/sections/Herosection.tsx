import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Herosection = () => {
  return (
    <section className="min-h-[70vh] max-h-[45rem]">
      <div className="absolute w-full h-full inset-0 -z-10 ">
        <div className="bg-gradient-to-t from-background to-background/30 w-full h-full "></div>
        <Image
          src={"/heroBackground.jpeg"}
          className="object-cover relative -z-20 opacity-20"
          alt="Hero Background"
          fill
        />
      </div>
      <main className="flex justify-center items-center flex-col gap-10 min-h-[inherit]">
        <h1 className="text-2xl text-center text-balance font-bold leading-tight">
          The <span className="text-primary">Fastest</span> Way To{" "}
          <span className="text-primary">Profitability</span> for Beginner
          Traders
        </h1>
        <div className="flex gap-12 flex-col items-center">
          <p className="tracking-wider ">
            Become financially independent, early in the game.
          </p>
          <Button className="gap-2">
            Save My Seat <Icons.LinkArrow />
          </Button>
        </div>
        <div className="flex gap-4 items-center">
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
      </main>
    </section>
  );
};
