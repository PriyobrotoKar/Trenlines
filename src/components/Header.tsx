import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <header className="flex py-10 px-14 justify-between items-center">
      <div className="flex-1">
        <Logo.small />
      </div>
      <nav className="flex-[2_2_0%]">
        <ul className="flex gap-16 items-center justify-center text-md">
          <li>Home</li>
          <li>About</li>
          <li>Socials</li>
          <li>Coaching</li>
        </ul>
      </nav>
      <div className="flex-1">
        <Button variant={"outline"} className="gap-2 float-right" size={"sm"}>
          Join Discord <Icons.LinkArrow className="size-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
