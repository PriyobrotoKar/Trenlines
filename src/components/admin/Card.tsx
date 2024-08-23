import { cn } from "@/lib/utils";
import { title } from "process";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import Image from "next/image";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ColorPicker from "../ColorPicker";
import { type } from "os";
import { Button } from "../ui/button";
import { uploadImage } from "@/actions/uploadImage";
import { Icon } from "../Icons";
import IconPicker from "../IconPicker";

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
        "py-12 px-14 flex items-center justify-between gap-20 w-fit bg-popover rounded-3xl",
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
  aspectRatio,
  value,
  register,
  setValue,
}: DefaultValue & {
  aspectRatio: number;
  value: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<{
    file: string | ArrayBuffer;
    type: string;
  } | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleCrop = async () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    const croppedImage = cropper.getCroppedCanvas().toDataURL(image?.type);
    let size_in_bytes = window.atob(croppedImage.split(",")[1]).length;

    console.log(size_in_bytes);
    const imageUrl = await uploadImage(croppedImage);
    setValue("image", imageUrl);
  };
  return (
    <Card title={title} description={description}>
      <label htmlFor="imageInput">
        <div
          style={{ aspectRatio: aspectRatio }}
          className="h-16 border  border-dashed bg-muted rounded-xl overflow-hidden"
        >
          <Image
            src={value}
            alt="Image"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
      </label>
      <input type="text" {...register("image")} className="hidden" />
      <input
        type="file"
        id="imageInput"
        onChange={(e) => {
          if (!e.target.files || e.target.files.length === 0) return;
          console.log(e.target.files[0].type);
          setImage({
            file: URL.createObjectURL(e.target.files[0]),
            type: e.target.files[0].type,
          });
          setOpen(true);
        }}
        accept="image/*"
        className="hidden"
      />
      <Dialog open={open} onOpenChange={(open) => setOpen(!open)}>
        <DialogContent>
          <Cropper
            src={image?.file as string}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options
            aspectRatio={aspectRatio}
            guides={false}
            ref={cropperRef}
          />
          <Button onClick={handleCrop}>Crop</Button>
        </DialogContent>
      </Dialog>
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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="size-10 rounded-xl border border-dashed"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="grid grid-cols-4 gap-4 rounded-xl p-6  max-w-[18rem]">
            <IconPicker />
          </DropdownMenuContent>
        </DropdownMenu>
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

Card.Affiliate = function Affiliate({
  ind,
  register,
  setValue,
}: {
  ind: number;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}) {
  const [color, setColor] = useState("");

  useEffect(() => {
    setValue(`affliates.${ind}.properties.color`, color);
  }, [color, setValue, ind]);

  return (
    <Card
      title={"Properties"}
      description={"Modify Properties"}
      className="gap-20"
    >
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              style={{ backgroundColor: color }}
              className="size-10 flex-shrink-0 rounded-xl border border-dashed"
            ></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="overflow-visible">
            <ColorPicker color={color} setColor={setColor} />
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          type="text"
          className="hidden"
          placeholder="Color"
          {...register(`affliates.${ind}.properties.code`)}
        />
        <Input
          type="text"
          placeholder="Link"
          {...register(`affliates.${ind}.properties.link`)}
        />
        <Input
          type="text"
          placeholder="Code"
          {...register(`affliates.${ind}.properties.code`)}
        />
      </div>
    </Card>
  );
};

export default Card;
