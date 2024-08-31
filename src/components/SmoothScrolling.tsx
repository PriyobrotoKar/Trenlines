"use client";
import React, { ReactNode } from "react";
import { ReactLenis } from "@/lib/lenis";

const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
