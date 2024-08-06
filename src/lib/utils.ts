import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractDomain = (link: string) => {
  //https://github.com/PriyobrotoKar/StorySpire/ -> Github

  const url = new URL(link).hostname;
  const startInd = url.indexOf(".") + 1;
  const endInd = url.indexOf(".", url.indexOf(".") + 1);

  if (endInd === -1) {
    return url[0].toUpperCase() + url.slice(1, startInd - 1);
  }

  return url[startInd].toUpperCase() + url.substring(startInd + 1, endInd);
};
