"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useSidebar } from "@/providers/SidebarProvider";
import { cn } from "@/lib/utils";

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
  const { isOpen, setIsOpen } = useSidebar();
  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [path, setIsOpen]);

  return (
    <div
      className={cn(
        " flex w-52 rounded-xl h-[95svh] fixed z-20 top-1/2 right-4 lg:right-auto lg:left-auto -translate-y-1/2  place-items-center transition-transform    overflow-hidden bg-popover text-md px-9 translate-x-full lg:translate-x-0 ",
        isOpen && "translate-x-0"
      )}
    >
      <ul className="space-y-8 md:space-y-10">
        {sections.map((section, i) => {
          return (
            <li
              key={i}
              className={
                (path.includes(getPath(section))
                  ? ""
                  : "text-muted-foreground") +
                " hover:text-foreground transition-colors relative z-10"
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
                    className="w-40 h-64 bg-accent pointer-events-none blur-3xl absolute -z-10 top-0 -translate-y-1/2  left-1/2 "
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
