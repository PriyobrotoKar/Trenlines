"use client";
import { useSyncIndicator } from "@/providers/SyncIndicatorProvider";
import React from "react";
import { Icon } from "../Icons";
import { sync } from "framer-motion";

const SyncIndicator = () => {
  const { syncing = true } = useSyncIndicator();
  return (
    <span className="pl-2 text-sm pr-4 py-2 rounded-full inline-flex gap-2 items-center bg-popover w-fit">
      {syncing ? (
        <Icon iconName="ReloadIcon" size={14} className="animate-sync" />
      ) : (
        <span className="size-4 inline-block rounded-full bg-green-400"></span>
      )}
      <span className="leading-[0.8]">trenlines.co</span>
    </span>
  );
};

export default SyncIndicator;
