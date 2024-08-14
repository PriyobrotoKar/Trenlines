import Animate from "@/components/Animate";
import Card from "@/components/Card";
import FollowerCount from "@/components/FollowerCount";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="flex justify-between relative  items-center  flex-col  h-[48rem] my-40">
      <div className="absolute w-screen h-[60rem] -top-64 -ml-4">
        <Image src={"/gradient.svg"} alt="gradient" fill className="-z-10 " />
      </div>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center"
      >
        <p className="font-light text-muted-foreground opacity-60 tracking-widest">
          FULL TIME TRADER
        </p>
        <h1 className="text-2xl">Know your Mentor</h1>
      </Animate>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 0.5 }}
      >
        <Card className="flex gap-6 justify-between items-end max-w-screen-lg">
          <div className="relative">
            <Animate
              hidden={{ opacity: 0, transform: "translateY(0px)" }}
              visible={{ opacity: 1, transform: "translateY(0)" }}
              stagger
              options={{ margin: "0%", staggerDelay: 0 }}
            >
              <div className="absolute h-fit -translate-y-[40%]  inset-0">
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
            <h2 className="text-3xl z-10 relative font-bold max-w-sm leading-tight">
              Sam Gilkes.
            </h2>
            <p className="text-primary relative z-10">Founder, Trenlines</p>
          </div>
          <div className="text-right space-y-4">
            <div>
              <FollowerCount initial={20} final={44.8} />
              <div className="text-sm">Followers on Instagram</div>
            </div>
            <p className="max-w-lg  tracking-wider leading-snug">
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
