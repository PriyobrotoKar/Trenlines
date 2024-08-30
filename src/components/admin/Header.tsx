import { auth } from "@/lib/auth";
import { getTimeOfDay } from "@/lib/utils";
import { useSyncIndicator } from "@/providers/SyncIndicatorProvider";
import Image from "next/image";
import React from "react";
import { Icon } from "../Icons";
import SyncIndicator from "./SyncIndicator";
import SidebarToggle from "./SidebarToggle";

const Header = async () => {
  const session = await auth();
  if (!session || !session.user) return null;
  const timeOfDay = getTimeOfDay();

  return (
    <header className="flex flex-row-reverse lg:flex-row justify-between items-center">
      <SidebarToggle />
      <div className="flex lg:flex-1 gap-4 justify-end md:justify-between items-center flex-row-reverse lg:flex-row">
        <div>
          <h1 className="md:text-xl">
            Good {timeOfDay}, <span className="text-primary">Sam</span>
          </h1>
          <div className="hidden sticky top-0  md:flex gap-2 items-center">
            <p className="text-md font-light text-muted-foreground">
              Let&apos;s manage content on{" "}
            </p>
            <SyncIndicator />
          </div>
        </div>
        <div className="relative">
          <Image
            className="rounded-full size-8 md:size-auto"
            src={session.user.image || session.user.name![0].toUpperCase()}
            alt="profile"
            width={60}
            height={60}
          />
          <SyncIndicator className="abosolute md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
