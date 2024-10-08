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

export const getTimeOfDay = () => {
  const time = new Date().getHours();
  if (time < 5 || time > 20) {
    return "Night";
  } else if (time < 12) {
    return "Morning";
  } else if (time < 17) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};

export const downloadCsv = (data: string, name: string) => {
  const blob = new Blob([data], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.download = name;
  a.href = url;
  // document.appendChild(a);
  a.click();
  // document.removeChild(a)
};
