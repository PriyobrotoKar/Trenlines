import React, { ReactNode } from "react";
import layout from "../layout";
import Header from "@/components/Header";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-lg  mx-auto">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default SiteLayout;
