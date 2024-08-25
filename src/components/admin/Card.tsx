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
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
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
        "p-6 md:py-12 md:px-14 flex items-center justify-between gap-6 md:gap-20 w-fit bg-popover rounded-3xl",
        className
      )}
    >
      <div className="md:space-y-2">
        <div className="md:text-lg">{title}</div>
        <div className="text-[0.72rem] md:text-sm font-light text-muted-foreground">
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
  form: { register, setValue },
  name = "image",
}: DefaultValue & {
  aspectRatio?: number;
  value: string;
  form: UseFormReturn<any>;
  name?: string;
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

    setOpen(false);
    const imageUrl = await uploadImage(croppedImage);

    setValue(name, imageUrl);
  };
  return (
    <Card title={title} description={description}>
      <label htmlFor={name + "Input"}>
        <div
          style={{ aspectRatio: aspectRatio }}
          className="h-16 border  border-dashed bg-muted rounded-xl overflow-hidden"
        >
          {(value || image?.file) && (
            <Image
              src={value || (image?.file as string)}
              alt="Image"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </label>
      <input type="text" {...register(name)} className="hidden" />
      <input
        type="file"
        id={name + "Input"}
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
          <div className="flex gap-4">
            <Button
              className="w-full"
              onClick={() => setOpen(false)}
              size={"sm"}
              variant={"destructive"}
            >
              Cancel
            </Button>
            <Button
              className="w-full"
              onClick={handleCrop}
              size={"sm"}
              variant={"secondary"}
            >
              Crop
            </Button>
          </div>
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
    <Card
      title={title}
      description={description}
      className="flex-col items-start"
    >
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
    <Card
      title={title}
      description={description}
      className="flex-col items-start w-full md:w-fit"
    >
      <Textarea {...register(title.toLowerCase())} />
    </Card>
  );
};

Card.Feature = function Feature({
  title,
  description,
  ind,
  form: { register, setValue, getValues },
}: DefaultValue & {
  ind: number;
  form: UseFormReturn<any> & UseFormWatch<any>;
}) {
  return (
    <Card title={title} description={description} className="flex-wrap">
      <div className="flex gap-2 md:gap-6">
        <IconPicker
          setValue={setValue}
          getValues={getValues}
          name={`features.${ind}.icon`}
        />
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
    <Card
      title={title}
      description={description}
      className="items-start flex-wrap"
    >
      <div className="space-y-4 w-full">
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
  form: { register, setValue, getValues },
}: DefaultValue & { ind: number; form: UseFormReturn<any> }) {
  return (
    <Card
      title={title}
      description={description}
      className="items-start flex-wrap"
    >
      <div className="flex gap-2 md:gap-4 w-full">
        <IconPicker
          setValue={setValue}
          getValues={getValues}
          name={`links.${ind}.icon`}
        />
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
  form: { register, setValue, getValues },
}: {
  ind: number;
  form: UseFormReturn<any>;
}) {
  const [color, setColor] = useState("");

  useEffect(() => {
    setValue(`affliates.${ind}.properties.color`, color);
  }, [color, setValue, ind]);

  return (
    <Card
      title={"Properties"}
      description={"Modify Properties"}
      className="flex-wrap "
    >
      <div className="flex gap-2 md:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              style={{
                backgroundColor:
                  color || getValues(`affliates.${ind}.properties.color`),
              }}
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
