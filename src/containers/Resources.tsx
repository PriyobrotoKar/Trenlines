import { getSection } from "@/actions/getSection";
import Animate from "@/components/Animate";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const Resources = async () => {
  const data = await getSection("resources");
  if (!data) {
    return null;
  }
  const content = data.content as Record<string, any>;

  return (
    <div id="resources" className="mb-28 md:mb-80 relative">
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center mb-10 md:mb-32"
      >
        <h2 className=" text-sm md:text-base text-muted-foreground opacity-60 tracking-widest">
          FREE VALUE
        </h2>
        <p className="md:text-2xl tracking-wide text-lg ">Resources</p>
      </Animate>
      <Animate
        hidden={{ opacity: 0 }}
        visible={{ opacity: 1 }}
        stagger
        options={{ offsetDelay: 0.7 }}
        className="w-screen  -top-[40%] md:-top-40 lg:-top-52 left-1/2 -translate-x-1/2 h-[50rem] absolute -z-10"
      >
        <Image src={"/gradient2.svg"} alt="Gradient2" className="" fill />
      </Animate>

      <a href="https://www.youtube.com/@Trenlines">
        <Animate
          hidden={{ opacity: 0, transform: "translateY(20px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          stagger
          className="tracking-wider lg:w-[85%] mx-auto"
        >
          <div className="bg-[url('/live.png')] bg-no-repeat relative leading-snug bg-cover h-[14rem] md:h-[20rem] lg:h-[25rem] before:absolute before:bg-gradient-to-tl overflow-hidden before:from-accent before:to-40% before:to-transparent before:inset-0 before:w-full before:h-full  rounded-3xl flex flex-col justify-end p-4 md:p-10 items-end [&>*]:z-10">
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
      </a>

      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%" }}
        className="will-change-auto flex justify-center flex-wrap gap-4 md:gap-8 lg:gap-10 mt-14 "
        childClassNames=""
      >
        {content.affliates.map(
          (
            card: {
              image: string;
              logo: string;
              properties: { color: string; link: string; code: string };
            },
            i: number
          ) => {
            return (
              <Link scroll={false} key={i} href={card.properties.link}>
                <CardContainer className="md:flex-[1_0_auto]     relative   h-full rounded-xl overflow-hidden flex flex-col justify-between  items-center gap-2">
                  <CardBody className="p-4 md:p-8 aspect-[3/4]   w-[9rem] md:w-[12rem] lg:w-[17rem]">
                    <div
                      style={{
                        background: `linear-gradient(200deg,${card.properties.color} -33%,transparent 25%)`,
                      }}
                      className="bg-gradient-to-bl z-10 from-accent to-transparent w-full h-full absolute inset-0 "
                    ></div>
                    <div
                      style={{
                        background: `linear-gradient(0deg,${card.properties.color} ,transparent 60%)`,
                      }}
                      className="bg-gradient-to-t z-10 from-accent to-transparent w-full h-full absolute inset-0 "
                    ></div>
                    <Animate
                      hidden={{ opacity: 0, scale: 1.06 }}
                      visible={{ opacity: 1, scale: 1 }}
                      stagger
                      options={{ margin: "0%" }}
                      className="absolute w-full h-full inset-0 "
                      childClassNames="h-full"
                    >
                      <Image
                        src={card.image}
                        alt="CardBG"
                        width={300}
                        height={500}
                        className="w-full h-full object-cover -z-10 will-change-transform"
                      />
                    </Animate>
                    <div className="z-20 relative h-full flex justify-between items-center flex-col">
                      <p className="font-light text-center text-[0.63rem] md:text-sm text-primary/80 tracking-wider">
                        {card.properties.code}
                      </p>
                      <Image
                        src={card.logo}
                        alt="Resource"
                        width={200}
                        height={100}
                      />
                    </div>
                  </CardBody>
                </CardContainer>
              </Link>
            );
          }
        )}
      </Animate>
    </div>
  );
};

export { Resources };
