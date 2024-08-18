import { auth } from "@/lib/auth";
import { getTimeOfDay } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Header = async () => {
  const session = await auth();
  console.log(session);
  if (!session || !session.user) return null;
  const timeOfDay = getTimeOfDay();
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-xl">
          Good {timeOfDay}, <span className="text-primary">Sam</span>
        </h1>
        <div className=" flex gap-2 items-center">
          <p className="text-md font-light text-muted-foreground">
            Let&apos;s manage content on{" "}
          </p>
          <span className="pl-2 text-sm pr-4 py-1 rounded-full inline-flex gap-2 items-center bg-muted w-fit">
            <span className="size-4 inline-block rounded-full bg-green-400"></span>
            trenlines.co
          </span>
        </div>
      </div>
      <div>
        <Image
          className="rounded-full"
          src={session.user.image || session.user.name![0].toUpperCase()}
          alt="profile"
          width={60}
          height={60}
        />
      </div>
    </header>
  );
};

export default Header;
