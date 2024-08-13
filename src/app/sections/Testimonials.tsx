import Animate from "@/components/Animate";
import { Button } from "@/components/ui/button";
import { readdirSync } from "fs";
import Image from "next/image";
import path from "path";
import React from "react";

const Testimonials = () => {
  const dir = path.join(process.cwd(), "public/testimonials");
  const testimonials = readdirSync(dir);

  return (
    <section className="">
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center mb-32"
      >
        <h2 className="font-light text-primary opacity-60 tracking-widest">
          RESULT
        </h2>
        <p className="text-2xl tracking-wide">Hear their Success Stories</p>
      </Animate>
      <div className="columns-2 relative space-y-8 gap-6 before:bg-gradient-to-t before:z-10 before:absolute before:w-full before:h-full before:from-background before:to-transparent before:to-50%">
        {testimonials.map((imgSrc, i) => {
          return (
            <Animate
              hidden={{ opacity: 0, transform: "translateY(10px)" }}
              visible={{ opacity: 1, transform: "translateY(0%)" }}
              stagger
              options={{
                margin: "0%",
                offsetDelay: 0.5,
              }}
              key={i}
            >
              <Image
                src={`/testimonials/${imgSrc}`}
                className="w-full"
                alt={`testimonial-${i}`}
                width={900}
                height={900}
              />
            </Animate>
          );
        })}
      </div>

      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0%)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 0.5 }}
        className="text-center space-y-4 mt-6"
      >
        <Button>I want to achieve results like these</Button>
        <p className="text-sm ">
          Become our next success story.{" "}
          <span className="text-primary font-bold">Act fast.</span>
        </p>
      </Animate>
    </section>
  );
};

export default Testimonials;
