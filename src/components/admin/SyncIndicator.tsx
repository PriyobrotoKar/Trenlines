"use client";
import { useSyncIndicator } from "@/providers/SyncIndicatorProvider";
import React from "react";
import { Icon } from "../Icons";
import { sync } from "framer-motion";

const SyncIndicator = () => {
  const { syncing = true } = useSyncIndicator();
  return (
    <span className="absolute md:relative bottom-0 right-0 md:pl-2 text-sm md:pr-4 md:py-2  rounded-full inline-flex gap-2 items-center md:bg-popover w-fit">
      {syncing ? (
        <Icon iconName="ReloadIcon" size={14} className="animate-sync" />
      ) : (
        <span className="size-3 md:size-4 inline-block rounded-full bg-green-400"></span>
      )}
      <span className="hidden md:inline leading-[0.8]">trenlines.co</span>
    </span>
  );
};

export default SyncIndicator;
