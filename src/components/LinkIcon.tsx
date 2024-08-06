import { extractDomain } from "@/lib/utils";
import React from "react";
import * as FontAwesome from "react-icons/fa6";

const LinkIcon = ({ link }: { link: string }) => {
  const social = extractDomain(link);
  console.log(social);
  const icon =
    FontAwesome[`Fa${social}` as unknown as keyof typeof FontAwesome];
  const Icon = React.createElement(icon);

  return (
    <a className="inline-block" href={link}>
      <span>{Icon}</span>
    </a>
  );
};

export default LinkIcon;
