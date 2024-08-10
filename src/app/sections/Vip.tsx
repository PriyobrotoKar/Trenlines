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
      <div className="text-center mb-32">
        <h2 className="font-light text-primary opacity-60 tracking-widest">
          TRENLINES VIP
        </h2>
        <p className="text-2xl tracking-wide">Course Outcomes</p>
      </div>
      <div className="relative">
        <div className="w-screen -top-1/2 -ml-4 left-1/2 -translate-x-1/2 h-[50rem] absolute -z-10">
          <Image src={"/gradient.svg"} alt="CourseGradient" fill />
        </div>
        <div className="grid grid-cols-2 w-[60rem]  absolute left-1/2 -top-14 -translate-x-1/2 gap-y-20">
          {outcomes.map(({ title, description, icon }, i) => {
            return (
              <div
                key={title}
                className={cn(
                  "max-w-52  flex gap-2 flex-col justify-center items-center  text-center ",
                  i % 2 && "ml-auto",
                  i == 0 && "translate-x-20",
                  i == 1 && "-translate-x-20"
                )}
              >
                <Icon iconName={icon} className="text-primary" size={50} />
                <h3 className=" text-lg leading-tight">{title}</h3>
                <p className="text-sm leading-tight  font-light text-muted-foreground">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto w-fit">
          <Image
            src={"/samgilkes2.png"}
            alt="Course Outcomes"
            width={500}
            height={500}
          />
        </div>
      </div>
      <Card className="flex overflow-hidden relative justify-between gap-10 items-center ">
        <Image
          src={"/gradient3.svg"}
          alt="Gradient"
          width={900}
          height={600}
          className="absolute right-0 h-full w-full"
        />
        <div className="space-y-8 relative z-10">
          <div className="flex gap-4 items-center">
            <Logo.small />
            <span className="tracking-wider font-light">TRENLINES VIP</span>
          </div>
          <p className="max-w-xl text-md">
            <span className="text-primary">Trenlines</span> is your key to
            success, offering personalized mentorship, exclusive network access,
            assisted trading, and daily mentor meetings to guide you in making
            the most of these opportunities.
          </p>
        </div>
        <div className="text-center font-light z-10">
          <div className="line-through text-sm">Starting $649.98 / m</div>
          <div className="text-2xl text-primary font-bold tracking-wide">
            $389.99
          </div>
          <Button>Enroll Now</Button>
          {/* //TODO: Add secured payment logo */}
          <p className="text-sm mt-4">Secured Payment</p>
        </div>
      </Card>
    </section>
  );
};

export default Vip;
