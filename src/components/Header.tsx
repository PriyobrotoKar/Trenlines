import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Icons } from "./Icons";
import { getSection } from "@/actions/getSection";
import Image from "next/image";
import NavLink from "./NavLink";

const Header = async () => {
  const data = await getSection("header");
  if (!data) {
    return null;
  }
  const content = data.content as Record<string, string>;
  return (
    <header className="flex absolute top-0 left-1/2 -translate-x-1/2  w-full max-w-screen-2xl  z-40 py-16 md:py-10 px-14 justify-between items-center">
      <div className="flex-1 ">
        <Image
          src={content.image}
          className="mx-auto md:mx-0"
          alt="Logo"
          width={60}
          height={60}
        />
      </div>
      <nav className="flex-[2_2_0%] hidden md:block">
        <ul className="flex md:gap-10 xl:gap-16 items-center justify-center md:text-sm lg:text-md">
          <NavLink id="#mentor">Mentor</NavLink>
          <NavLink id="#resources">Resources</NavLink>
          <NavLink id="#outcomes">Outcomes</NavLink>
          <NavLink id="#testimonials">Testimonials</NavLink>
        </ul>
      </nav>
      <div className="flex-1 hidden md:block">
        <a href={content.ctaLink}>
          <Button variant={"outline"} className="gap-2 float-right" size={"sm"}>
            {content.ctaLabel} <Icons.LinkArrow className="size-5" />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
