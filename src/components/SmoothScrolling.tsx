"use client";
import React, { ReactNode } from "react";
import { ReactLenis } from "@/lib/lenis";

const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{}}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
