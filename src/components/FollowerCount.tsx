"use client";
import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const FollowerCount = ({
  initial,
  final,
}: {
  initial: number;
  final: number;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const element = ref.current;

    if (!inView) return;
    if (!element) return;
    element.textContent = initial.toString();

    const controls = animate(initial, final, {
      duration: 3,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(1);
      },
    });

    return () => {
      controls.stop();
    };
  }, [final, initial, ref, inView]);
  return (
    <div className="text-xl md:text-2xl font-bold">
      <span ref={ref}>44.8</span>
      <span className="text-base md:text-xl">K</span>
    </div>
  );
};

export default FollowerCount;
