import { extractDomain } from "@/lib/utils";
import React from "react";
import { Icon } from "./Icons";

const LinkIcon = ({ link }: { link: string }) => {
  const social = extractDomain(link);

  return (
    <a className="inline-block" href={link}>
      <span>
        <Icon iconName={`${social}Icon`} size={28} />
      </span>
    </a>
  );
};

export default LinkIcon;
