"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Icon } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/lib/lenis";

const ScrollToTop = () => {
  const [show, setShow] = React.useState(false);
  const lenis = useLenis();
  const handleClick = () => {
    lenis?.scrollTo(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={"scroll-to-top"}
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          exit={{ opacity: 0, transform: "translateY(100%)" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="z-40 fixed md:bottom-16 md:right-16 bottom-8 right-8"
        >
          <Button
            size={"icon"}
            variant={"outline"}
            className=" size-10  md:size-14 rounded-full  -rotate-90 backdrop-blur-lg "
            onClick={handleClick}
          >
            <Icon iconName="ArrowUp02Icon" className="rotate-90" size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
