import Animate from "@/components/Animate";
import Image from "next/image";
import React, { Fragment } from "react";

const cards = [
  {
    code: "TRUSTED BROKER",
    bg: "/broker.png",
    logo: "/brokerlogo.svg",
    accentColor: "#6D98FD",
  },
  {
    code: "USE CODE SG",
    bg: "/broker.png",
    logo: "/brokerlogo.svg",
    accentColor: "#6D98FD",
  },
  {
    code: "USE CODE SG",
    bg: "/broker.png",
    logo: "/brokerlogo.svg",
    accentColor: "#6D98FD",
  },
];

const Resources = async () => {
  return (
    <div className="mb-40">
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center mb-32"
      >
        <h2 className="font-light text-sm md:text-base text-primary opacity-60 tracking-widest">
          FREE VALUE
        </h2>
        <p className="md:text-2xl tracking-wide text-lg ">Resources</p>
      </Animate>

      <Animate
        hidden={{ opacity: 0, transform: "translateY(20px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="tracking-wider "
      >
        <div className="bg-[url('/live.png')] bg-no-repeat relative leading-snug bg-cover h-[14rem] md:h-[20rem] lg:h-[25rem] before:absolute before:bg-gradient-to-tl overflow-hidden before:from-accent before:to-transparent before:inset-0 before:w-full before:h-full  rounded-xl flex flex-col justify-end p-4 md:p-10 items-end [&>*]:z-10">
          <p className="font-light text-sm md:text-base text-primary">FREE</p>
          <h2 className="text-xl md:text-2xl">Daily Streams</h2>
          <div className="flex gap-4 md:gap-6 tracking-normal items-center font-light text-[0.63rem] md:text-sm">
            <div>
              New York Session{" "}
              <span className="bg-foreground text-background rounded-full px-1.5 md:px-2.5 py-0.5">
                1pm
              </span>
            </div>
            <div>
              London Session Stream{" "}
              <span className="bg-foreground text-background rounded-full px-1.5 md:px-2.5 py-0.5">
                8am
              </span>
            </div>
          </div>
        </div>
      </Animate>

      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%" }}
        className="flex justify-center flex-wrap gap-4 md:gap-10 mt-14 w-full"
        childClassNames="md:flex-1 max-w-[9rem] md:max-w-full   relative h-[12rem] md:h-[18rem] lg:h-[24rem] rounded-xl overflow-hidden flex flex-col justify-between p-8 items-center gap-2"
      >
        {cards.map((card, i) => {
          return (
            <Fragment key={i}>
              <div className="bg-gradient-to-t z-10 from-accent to-transparent w-full h-full absolute inset-0 "></div>
              <Animate
                hidden={{ opacity: 0, scale: 1.06 }}
                visible={{ opacity: 1, scale: 1 }}
                stagger
                options={{ margin: "0%" }}
                className="absolute w-full h-full inset-0 "
              >
                <Image
                  src={card.bg}
                  alt="CardBG"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover -z-10 will-change-transform"
                />
              </Animate>
              <div className="z-10 h-full flex justify-between items-center flex-col">
                <p className="font-light text-center text-[0.63rem] md:text-sm text-primary/80 tracking-wider">
                  {card.code}
                </p>
                <Image
                  src={card.logo}
                  alt="Resource"
                  width={200}
                  height={100}
                />
              </div>
            </Fragment>
          );
        })}
      </Animate>
    </div>
  );
};

export { Resources };
