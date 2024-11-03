import { getSection } from "@/actions/getSection";
import { Icon, Icons } from "@/components/Icons";
import Image from "next/image";
import React from "react";

export const Footer = async () => {
  const vipData = await getSection("footer");
  const headerData = await getSection("header");
  if (!vipData || !headerData) {
    return null;
  }
  const vipContent = vipData.content as Record<string, any>;
  const headerContent = headerData.content as Record<string, any>;
  const content = { ...vipContent, ...headerContent };

  return (
    <footer className="text-center relative  space-y-8 pb-10 pt-20 md:pt-48">
      <Image
        src={content.image}
        className="mx-auto w-20 md:w-28"
        alt="Logo Large"
        width={150}
        height={150}
      />
      <p className="font-light text-[0.63rem] md:text-sm text-muted-foreground tracking-widest">
        {content.disclaimer}
      </p>
      <div className="flex gap-2 items-center justify-center">
        {content.links.map(({ icon, link }: { icon: string; link: string }) => {
          return (
            <a href={link} key={icon}>
              <Icon iconName={icon} size={28} />
            </a>
          );
        })}
      </div>
      <p className="flex gap-2 justify-center items-center text-[0.6rem] md:text-sm font-light text-muted-foreground">
        <Icons.Copyright />
        <span className="leading-tight tracking-widest">
          {content.copyright}
        </span>
      </p>
      <div className="w-svw absolute h-[20rem] left-1/2 -z-10 -translate-x-1/2 -bottom-0 overflow-hidden">
        <Image
          src={"/gradient2.svg"}
          alt="gradientFooter"
          className=" -z-10 w-full    relative -bottom-20 md:bottom-0"
          width={600}
          height={400}
        ></Image>
      </div>
    </footer>
  );
};
