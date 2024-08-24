import React, { ChangeEvent, ReactElement, useEffect } from "react";
import * as Hugeicons from "hugeicons-react";
import { Icon } from "./Icons";
import { Input } from "./ui/input";
import {
  ChangeHandler,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const IconPicker = ({
  setValue,
  getValues,
  name,
}: {
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  name: string;
}) => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<ReactElement[]>([]);
  const [selected, setSelected] = React.useState<string | null>();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    if (!searchTerm) {
      setResults([]);
      return;
    }

    const icons = Object.keys(Hugeicons)
      .filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
      .slice(0, 12)
      .map((icon) => {
        return (
          <Icon
            className="mx-auto cursor-pointer hover:bg-muted p-2 rounded-lg"
            iconName={icon}
            onClick={() => {
              setValue(name, icon), setSelected(icon);
            }}
            key={icon}
          />
        );
      });

    setResults(icons);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="size-10 rounded-xl border border-dashed flex justify-center items-center">
          <Icon
            iconName={selected || getValues(name)}
            size={24}
            className="text-primary"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-64   rounded-xl p-6  w-[20rem]">
        <div className="flex flex-col gap-4 h-full">
          <div className="col-span-4">
            <Input
              type="text"
              className="rounded-sm"
              value={search}
              onChange={handleSearch}
              placeholder="Search icon"
            />
          </div>
          {results.length ? (
            <div className="grid auto-rows-min grid-cols-4 gap-4">
              {results}
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col gap-2 flex-grow text-center ">
              <Icon iconName="HelpCircleIcon" className="mx-auto" size={22} />
              <div className="text-[0.93rem] ">Search to get started</div>
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default IconPicker;
