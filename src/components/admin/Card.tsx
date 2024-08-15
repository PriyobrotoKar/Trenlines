import { cn } from "@/lib/utils";
import { title } from "process";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type DefaultValue = {
  title: string;
  description: string;
};

const Card = ({
  children,
  className,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "py-12 px-14 flex items-center justify-between gap-20 w-fit bg-card rounded-3xl",
        className
      )}
    >
      <div className="space-y-2">
        <div className="text-lg">{title}</div>
        <div className="text-sm font-light text-muted-foreground">
          {description}
        </div>
      </div>
      {children}
    </div>
  );
};

Card.ImageUpload = function ImageUpload({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card title={title} description={description}>
      <div className="size-16 border  border-dashed bg-muted rounded-xl"></div>
    </Card>
  );
};

Card.CallToAction = function CallToAction({
  title = "Call to Action",
  description = "Edit label and link",
}: Partial<DefaultValue>) {
  return (
    <Card title={title} description={description} className="gap-20">
      <div className="flex gap-4">
        <Input type="text" placeholder="Label" />
        <Input type="text" placeholder="Link" />
      </div>
    </Card>
  );
};

Card.LargeText = function LargeText({ title, description }: DefaultValue) {
  return (
    <Card title={title} description={description} className="gap-20">
      <Textarea />
    </Card>
  );
};

export default Card;
