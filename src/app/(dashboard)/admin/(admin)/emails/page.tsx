"use client";
import { getSubscribers } from "@/actions/getSubscirbers";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

  return (
    <div>
      <div className="bg-popover px-6 py-6  rounded-2xl flex justify-between text-[0.62rem] md:text-sm  md:tracking-wider">
        <div className="flex gap-2 md:gap-6 flex-1  items-center max-w-screen-lg leading-[0.8]">
          <div className="flex-1">FIRST NAME</div>
          <div className="flex-1">LAST NAME</div>
          <div className="flex-[2_1_0%]">EMAIL</div>
        </div>
        <div className=" items-center hidden md:flex">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="h-fit"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <Icon size={24} iconName="ArrowLeft01Icon" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="h-fit"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <Icon size={24} iconName="ArrowRight01Icon" />
          </Button>
        </div>
      </div>
      <div className=" px-6 md:pr-24">
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
