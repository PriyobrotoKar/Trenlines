import React, { ReactNode } from "react";
import layout from "../layout";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactLenis } from "@/lib/lenis";
import SmoothScrolling from "@/components/SmoothScrolling";
import JournalModal from "@/components/JournalModal";
import JournalModalProvider from "@/providers/JournalModalProvider";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SmoothScrolling>
      <JournalModalProvider>
        <div className="max-w-screen-xl  mx-auto overscroll-x-none ">
          <Header />
          <ScrollToTop />
          <div className="">{children}</div>
        </div>
      </JournalModalProvider>
    </SmoothScrolling>
  );
};

export default SiteLayout;
