"use client";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const Line = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.15"],
  });
  // const scrollY = useSpring(scrollYProgress, { bounce: 0 });
  const svgHeight = useTransform(() => scrollYProgress.get() * 100 + "%");

  useMotionValueEvent(svgHeight, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div ref={ref} className="w-fit mx-auto my-48">
      <div className="w-0.5 h-64 bg-neutral-500 rounded-full">
        <motion.div
          className="w-full bg-white rounded-full"
          style={{ height: svgHeight }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Line;