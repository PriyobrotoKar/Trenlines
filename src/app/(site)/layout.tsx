import React, { ReactNode } from "react";
import layout from "../layout";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-xl  mx-auto overscroll-x-none ">
      <Header />
      <ScrollToTop />
      <div className="">{children}</div>
    </div>
  );
};

export default SiteLayout;
