"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const sections = [
  "Header",
  "Hero Section",
  "Mentor",
  "Resources",
  "Vip Program",
  "Testimonials",
  "FAQ",
  "Footer",
  "Emails",
];

const getPath = (name: string) => {
  return name.replaceAll(" ", "").toLowerCase();
};

const Sidebar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="hidden lg:flex w-52 rounded-xl h-[95svh] fixed top-1/2 -translate-y-1/2  place-items-center   overflow-hidden bg-popover text-md px-9">
      <ul className="space-y-10">
        {sections.map((section, i) => {
          return (
            <li
              key={i}
              className={
                (path.includes(getPath(section))
                  ? ""
                  : "text-muted-foreground") + " relative z-10"
              }
            >
              <Link href={"/admin/" + getPath(section)}>{section}</Link>
              <AnimatePresence>
                {path.includes(getPath(section)) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-40 h-64 bg-accent blur-3xl absolute -z-10 top-0 -translate-y-1/2  left-1/2 "
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
