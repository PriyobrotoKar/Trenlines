"use client";
import { getSubscribers } from "@/actions/getSubscirbers";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Parser } from "@json2csv/plainjs";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { downloadCsv } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useQuery({
    queryKey: ["subscribers", page],
    queryFn: async () => await getSubscribers(page),
    placeholderData: keepPreviousData,
  });
  if (!data) {
    return null;
  }

  const exportSubscribers = async () => {
    const subscribers = await getSubscribers();

    if (!subscribers) return;

    try {
      const parser = new Parser();
      const csv = parser.parse(subscribers);
      downloadCsv(csv, "subscribers.csv");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-popover px-6 py-6  rounded-2xl flex justify-between text-[0.62rem] md:text-sm relative  md:tracking-wider">
        <div className="flex gap-2 md:gap-6 flex-1  items-center max-w-screen-lg leading-[0.8]">
          <div className="flex-1">FIRST NAME</div>
          <div className="flex-1">LAST NAME</div>
          <div className="flex-[2_1_0%]">EMAIL</div>
        </div>
        <div className=" items-stretch hidden md:flex gap-4 absolute right-4 top-1/2 -translate-y-1/2 ">
          <div>
            {(page - 1) * 10 + 1}-{(page - 1) * 10 + 1 + 9}
          </div>
          <div className="flex items-center justify-between">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="h-fit"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <Icon size={24} iconName="ArrowLeft01Icon" />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="h-fit"
              disabled={data.length < 10}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <Icon size={24} iconName="ArrowRight01Icon" />
            </Button>
          </div>
          <Separator orientation="vertical" className="h-auto" />
          <Button
            variant={"ghost"}
            size={"icon"}
            className="h-fit"
            onClick={exportSubscribers}
          >
            <Icon iconName="FileExportIcon" size={24} />
          </Button>
        </div>
      </div>
      <div className=" px-6 ">
        {data.map(({ firstname, lastname, email, id }) => {
          return (
            <div
              className="flex max-w-screen-lg  py-4 gap-2 md:gap-6 text-sm  md:text-md text-muted-foreground"
              key={id}
            >
              <div className="flex-1 truncate">{firstname}</div>
              <div className="flex-1 truncate">{lastname}</div>
              <div className="flex-[2_1_0%] truncate">{email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
