import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="flex justify-between  items-center  flex-col  h-[48rem] my-40">
      <Image
        src={"/gradient.svg"}
        alt="gradient"
        fill
        className="-z-10   w-full translate-y-[130svh]"
      />
      <div className="text-center">
        <p className="font-light text-muted-foreground opacity-60 tracking-widest">
          FULL TIME TRADER
        </p>
        <h1 className="text-2xl">Know your Mentor</h1>
      </div>
      <Card className="flex gap-6 justify-between max-w-screen-lg">
        <div className="relative">
          <div className="absolute h-fit -translate-y-1/2  inset-0">
            <div className="w-full h-full bg-gradient-to-t from-card absolute to-30% to-transparent z-10"></div>
            <Image
              className=""
              src={"/samgilkes.png"}
              alt="Sam Gilkes"
              width={400}
              height={400}
            />
          </div>
          <h2 className="text-3xl z-10 relative font-bold max-w-sm leading-tight">
            Sam Gilkes.
          </h2>
          <p className="text-primary relative z-10">Founder, Trenlines</p>
        </div>
        <div className="text-right space-y-4">
          <div>
            <div className="text-2xl font-bold">
              44.8<span className="text-xl">K</span>
            </div>
            <div className="text-sm">Followers on Instagram</div>
          </div>
          <p className="max-w-lg  tracking-wider leading-snug">
            &quot;I&apos;m Sam Gilkes, former lawyer, turned trader. Focused on
            improving my skills daily and providing free value to the whole of
            #TeamTrenlines!&quot;
          </p>
        </div>
      </Card>
    </section>
  );
};
