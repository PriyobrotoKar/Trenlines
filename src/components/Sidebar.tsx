"use client";
import { usePathname } from "next/navigation";
import React from "react";

const sections = [
  "Header",
  "Hero Section",
  "Mentor",
  "Resources",
  "Vip Program",
  "Testimonials",
  "FAQ",
  "Footer",
];

const Sidebar = () => {
  const getPath = (name: string) => {
    return name.replaceAll(" ", "").toLowerCase();
  };

  const path = usePathname();
  console.log(path.includes("header"));

  return (
    <div className="w-52 rounded-xl h-[95svh] fixed top-1/2 -translate-y-1/2 flex place-items-center   overflow-hidden bg-card text-md px-9">
      <div className="w-40 h-64 bg-accent blur-3xl absolute  left-1/2 bottom-1/2"></div>
      <ul className="space-y-10 relative z-10">
        {sections.map((section, i) => {
          return (
            <li
              key={i}
              className={
                path.includes(getPath(section)) ? "" : "text-muted-foreground"
              }
            >
              <a href={"/admin/" + getPath(section)}>{section}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
