import { getSection } from "@/actions/getSection";
import Animate from "@/components/Animate";
import Card from "@/components/Card";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Vip = async () => {
  const vipData = await getSection("vipProgram");
  const heroData = await getSection("heroSection");
  const headerData = await getSection("header");
  if (!vipData || !heroData || !headerData) {
    return null;
  }
  const vipContent = vipData.content as Record<string, any>;
  const heroContent = heroData.content as Record<string, any>;
  const headerContent = headerData.content as Record<string, string>;

  const content = { ...vipContent, ...heroContent, ...headerContent };

  return (
    <section id="outcomes">
      <div className="text-center mb-10 md:mb-64">
        <Animate
          hidden={{ opacity: 0, transform: "translateY(10px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          stagger
        >
          <h2 className=" text-sm md:text-base  text-primary opacity-60 tracking-widest">
            TRENLINES VIP
          </h2>
          <p className="text-lg md:text-2xl tracking-wide">Course Outcomes</p>
        </Animate>
      </div>
      <div className="relative flex flex-col ">
        <Animate
          hidden={{ opacity: 0 }}
          visible={{ opacity: 1 }}
          stagger
          options={{ staggerDelay: 10 }}
          className="w-screen -top-[20%] md:-top-1/2 lg:-top-52 left-1/2 -translate-x-1/2 h-[50rem] absolute -z-10"
        >
          <Image src={"/gradient.svg"} alt="CourseGradient" fill />
        </Animate>
        <Animate
          hidden={{ opacity: 0, scale: 0.95 }}
          visible={{ opacity: 1, scale: 1 }}
          stagger
          options={{ offsetDelay: 0.5 }}
          className="grid order-3  w-48 mx-auto mt-20 md:mt-0 auto-rows-min  md:grid-cols-2 md:w-[45rem] lg:w-[56rem] xl:w-[68rem]  md:absolute md:left-1/2 md:-top-36 lg:-top-[5.5rem]  md:-translate-x-1/2 gap-y-20 md:gap-y-20 xl:gap-y-32"
        >
          {content.features.map(
            (
              {
                title,
                subtitle,
                icon,
              }: { title: string; subtitle: string; icon: string },
              i: number
            ) => {
              return (
                <div
                  key={title}
                  className={cn(
                    "md:max-w-48 xl:max-w-52 h-full flex gap-2 my-auto flex-col justify-center items-center  text-center ",
                    i % 2 && "ml-auto",
                    i == 0 && "md:translate-x-20 xl:translate-x-24",
                    i == 1 && "md:-translate-x-20 xl:-translate-x-24"
                  )}
                >
                  <Icon iconName={icon} className="text-primary" size={50} />
                  <h3 className="md:text-base xl:text-lg leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm leading-tight  font-light text-muted-foreground">
                    {subtitle}
                  </p>
                </div>
              );
            }
          )}
        </Animate>
        <Animate
          hidden={{ opacity: 0, transform: "translateY(10px)" }}
          visible={{ opacity: 1, transform: "translateY(0)" }}
          stagger
          options={{ margin: "0%", offsetDelay: 0.3 }}
          className="mx-auto w-fit"
        >
          <Image
            src={"/samgilkes2.png"}
            alt="Course Outcomes"
            width={600}
            height={600}
            className="w-64 md:w-[25rem] lg:w-[42rem]  mx-auto"
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
                <Image
                  src={content.image}
                  className="mx-auto md:mx-0"
                  alt="Logo"
                  width={60}
                  height={60}
                />
                <span className="flex-grow tracking-wider text-sm md:text-md xl:text-base font-light">
                  TRENLINES VIP
                </span>
              </div>
              <p className="max-w-xl text-[0.53rem] md:text-sm xl:text-md">
                {content.description}
              </p>
            </div>
            <div className="text-center font-light z-10">
              <div className="line-through text-[0.6rem] md:text-sm">
                Starting {content.pricing.initial} / m
              </div>
              <div className="md:text-xl xl:text-2xl text-primary font-bold tracking-wide">
                {content.pricing.discount}
              </div>
              <a href={content.ctaLink}>
                <Button>Enroll Now</Button>
              </a>

              <div className="mt-2 md:mt-4 flex gap-2 justify-center items-center">
                <Icon
                  iconName="SecurityLockIcon"
                  className="size-4 md:size-6"
                  size={20}
                />
                <p className="text-[0.53rem] md:text-sm ">Secured Payment</p>
              </div>
            </div>
          </Card>
        </Animate>
      </div>
    </section>
  );
};

export { Vip };
