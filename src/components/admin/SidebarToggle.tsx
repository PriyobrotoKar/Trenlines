"use client";
import React from "react";
import { Icon } from "../Icons";
import { useSidebar } from "@/providers/SidebarProvider";

const SidebarToggle = () => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <div
      className="lg:hidden relative z-30 "
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <Icon
        iconName={isOpen ? "Cancel01Icon" : "Menu02Icon"}
        className="rotate-180"
        size={20}
      />
    </div>
  );
};

export default SidebarToggle;
