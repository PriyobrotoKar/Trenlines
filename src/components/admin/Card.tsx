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
import { UseFormRegister } from "react-hook-form";
import Image from "next/image";

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
  value,
  register,
}: DefaultValue & { value: string; register: UseFormRegister<any> }) {
  return (
    <Card title={title} description={description}>
      <label htmlFor="imageInput">
        <div className="size-16 border  border-dashed bg-muted rounded-xl">
          <Image src={value} alt="Image" width={80} height={80} />
        </div>
      </label>
      <input
        type="file"
        id="imageInput"
        {...register("image")}
        accept="image/*"
        className="hidden"
      />
    </Card>
  );
};

Card.CallToAction = function CallToAction({
  title = "Call to Action",
  description = "Edit label and link",
  register,
}: Partial<DefaultValue> & { register: UseFormRegister<any> }) {
  return (
    <Card title={title} description={description} className="gap-20">
      <div className="flex gap-4">
        <Input type="text" placeholder="Label" {...register("ctaLabel")} />
        <Input type="text" placeholder="Link" {...register("ctaLink")} />
      </div>
    </Card>
  );
};

Card.LargeText = function LargeText({
  title,
  description,
  register,
}: DefaultValue & { register: UseFormRegister<any> }) {
  return (
    <Card title={title} description={description} className="gap-20">
      <Textarea {...register(title.toLowerCase())} />
    </Card>
  );
};

Card.Feature = function Feature({
  title,
  description,
  ind,
  register,
}: DefaultValue & { ind: number; register: UseFormRegister<any> }) {
  return (
    <Card title={title} description={description} className="gap-20">
      <div className="flex gap-6">
        <div></div>
        <Input
          type="text"
          placeholder="Title"
          {...register(`features.${ind}.title`)}
        />
        <Input
          type="text"
          placeholder="Subtitle"
          {...register(`features.${ind}.subtitle`)}
        />
      </div>
    </Card>
  );
};

Card.Question = function Question({
  title,
  description,
  ind,
  register,
}: DefaultValue & { ind: number; register: UseFormRegister<any> }) {
  return (
    <Card title={title} description={description} className="gap-20">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Question"
          {...register(`questions.${ind}.question`)}
        />
        <Textarea
          placeholder="Answer"
          {...register(`questions.${ind}.answer`)}
        />
      </div>
    </Card>
  );
};

Card.Link = function Link({
  title,
  description,
  ind,
  register,
}: DefaultValue & { ind: number; register: UseFormRegister<any> }) {
  return (
    <Card title={title} description={description} className="gap-20">
      <div className="flex gap-4">
        <div></div>
        <Input
          type="text"
          placeholder="Link"
          {...register(`links.${ind}.link`)}
        />
      </div>
    </Card>
  );
};

export default Card;
