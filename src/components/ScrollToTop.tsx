"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Icon } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            size={"icon"}
            variant={"outline"}
            className="z-40 size-10  md:size-14 rounded-full fixed -rotate-90 bottom-8 right-8 backdrop-blur-lg md:bottom-16 md:right-16"
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
