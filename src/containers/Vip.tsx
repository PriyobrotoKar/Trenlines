import Animate from "@/components/Animate";
import Card from "@/components/Card";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const outcomes = [
  {
    icon: "Mic02Icon",
    title: "Daily Meetings",
    description: "Get into casual calls with your mentor to seek insights",
  },
  {
    icon: "UserGroupIcon",
    title: "Access to Private Networks",
    description:
      "Trade and train amongst profitable mentors to maximize success",
  },
  {
    icon: "WaterfallUp01Icon",
    title: "Assisted Trading",
    description: "Trading expertise and market experience to your fingertips",
  },
  {
    icon: "TeachingIcon",
    title: "1-to-1 Mentorship",
    description: "Private mentorship to become a shredded, profitable trader",
  },
];

const Vip = () => {
  return (
    <section>
      <div className="text-center mb-20 md:mb-64">
        <Animate
          hidden={{ opacity: 0, transform: "translateY(10px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          stagger
        >
          <h2 className="font-light text-sm md:text-base  text-primary opacity-60 tracking-widest">
            TRENLINES VIP
          </h2>
          <p className="text-lg md:text-2xl tracking-wide">Course Outcomes</p>
        </Animate>
      </div>
      <div className="relative flex flex-col ">
        <div className="w-screen -top-[20%] md:-top-1/2  left-1/2 -translate-x-1/2 h-[50rem] absolute -z-10">
          <Image src={"/gradient.svg"} alt="CourseGradient" fill />
        </div>
        <Animate
          hidden={{ opacity: 0, scale: 0.95 }}
          visible={{ opacity: 1, scale: 1 }}
          stagger
          options={{}}
          className="grid order-3 gap-20 w-48 mx-auto mt-20 md:mt-0 auto-rows-min  md:grid-cols-2 md:w-[45rem] lg:w-[56rem] xl:w-[68rem]  md:absolute md:left-1/2 md:-top-36 lg:-top-20 md:-translate-x-1/2 md:gap-y-20 xl:gap-y-32"
        >
          {outcomes.map(({ title, description, icon }, i) => {
            return (
              <div
                key={title}
                className={cn(
                  "md:max-w-48 xl:max-w-52  flex gap-2  flex-col justify-center items-center  text-center ",
                  i % 2 && "ml-auto",
                  i == 0 && "md:translate-x-20 xl:translate-x-32",
                  i == 1 && "md:-translate-x-20 xl:-translate-x-32"
                )}
              >
                <Icon iconName={icon} className="text-primary" size={50} />
                <h3 className="md:text-base xl:text-lg leading-tight">
                  {title}
                </h3>
                <p className="text-sm leading-tight  font-light text-muted-foreground">
                  {description}
                </p>
              </div>
            );
          })}
        </Animate>
        <Animate
          hidden={{ opacity: 0, transform: "translateY(10px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          stagger
          options={{ margin: "0%", offsetDelay: 0.5 }}
          className="mx-auto w-fit"
        >
          <Image
            src={"/samgilkes2.png"}
            alt="Course Outcomes"
            width={600}
            height={600}
            className="w-64 md:w-[25rem] lg:w-[30rem] xl:w-auto mx-auto"
          />
        </Animate>
        <Animate
          hidden={{ opacity: 0, transform: "translateY(10px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          options={{ margin: "0%" }}
        >
          <Card className="flex overflow-hidden relative justify-between gap-4 md:gap-10 items-center ">
            <Image
              src={"/gradient3.svg"}
              alt="Gradient"
              width={900}
              height={600}
              className="absolute right-0 h-full w-full"
            />
            <div className="space-y-4 md:space-y-8 relative z-10">
              <div className="flex gap-4 items-center">
                <Logo.small />
                <span className="flex-grow tracking-wider text-sm md:text-md xl:text-base font-light">
                  TRENLINES VIP
                </span>
              </div>
              <p className="max-w-xl text-[0.53rem] md:text-sm xl:text-md">
                <span className="text-primary">Trenlines</span> is your key to
                success, offering personalized mentorship, exclusive network
                access, assisted trading, and daily mentor meetings to guide you
                in making the most of these opportunities.
              </p>
            </div>
            <div className="text-center font-light z-10">
              <div className="line-through text-[0.6rem] md:text-sm">
                Starting $649.98 / m
              </div>
              <div className="md:text-xl xl:text-2xl text-primary font-bold tracking-wide">
                $389.99
              </div>
              <Button>Enroll Now</Button>
              {/* //TODO: Add secured payment logo */}
              <p className="text-[0.53rem] md:text-sm mt-2 md:mt-4">
                Secured Payment
              </p>
            </div>
          </Card>
        </Animate>
      </div>
    </section>
  );
};

export { Vip };
