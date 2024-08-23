import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <header className="flex absolute top-0 left-1/2 -translate-x-1/2  w-full max-w-screen-xl  z-40 py-16 md:py-10 px-14 justify-between items-center">
      <div className="flex-1">
        <Logo.small />
      </div>
      <nav className="flex-[2_2_0%] hidden md:block">
        <ul className="flex md:gap-10 xl:gap-16 items-center justify-center md:text-sm lg:text-md">
          <li>Home</li>
          <li>About</li>
          <li>Socials</li>
          <li>Coaching</li>
        </ul>
      </nav>
      <div className="flex-1 hidden md:block">
        <Button variant={"outline"} className="gap-2 float-right" size={"sm"}>
          Discord <Icons.LinkArrow className="size-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
