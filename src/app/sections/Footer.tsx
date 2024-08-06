import { Icons } from "@/components/Icons";
import LinkIcon from "@/components/LinkIcon";
import Image from "next/image";
import React from "react";

const socials = [
  "https://tiktok.com",
  "https://instagram.com",
  "https://discord.gg",
  "https://youtube.com",
];

export const Footer = () => {
  return (
    <footer className="text-center relative space-y-8 pb-20 pt-48 overflow-hidden">
      <Image
        src={"logo.svg"}
        className="mx-auto"
        alt="Logo Large"
        width={150}
        height={150}
      />
      <p className="font-light text-sm text-muted tracking-wider">
        THE PROGRAM ITSELF DOES NOT GUARENTEE SUCCESS, ONE MUST FOLLOW AND
        IMPLIMENT.
      </p>
      <div className="space-x-2">
        {socials.map((link) => {
          return <LinkIcon link={link} key={link} />;
        })}
      </div>
      <p className="flex gap-2 justify-center items-center text-sm font-light text-muted-foreground">
        <Icons.Copyright />
        <span className="leading-tight">ALL RIGHTS RESERVED</span>
      </p>
      <Image
        src={"/gradient2.svg"}
        alt="gradientFooter"
        fill
        className="translate-y-1/2  -z-10    absolute"
      ></Image>
    </footer>
  );
};
