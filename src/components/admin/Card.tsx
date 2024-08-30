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
        "p-6 md:py-12 md:px-14 group flex items-start md:items-center justify-between gap-6 md:gap-20  md:max-w-fit bg-popover rounded-3xl relative",
        className
      )}
    >
      <div className="md:space-y-2 flex-[1_0_auto]">
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
  form: { register, setValue, getValues },
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
    const croppedImage = cropper
      .getCroppedCanvas({
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high",
      })
      .toDataURL(image?.type, 1);
    let size_in_bytes = window.atob(croppedImage.split(",")[1]).length;
    setImage({ file: croppedImage, type: image?.type! });

    setOpen(false);
    const imageUrl = await uploadImage(croppedImage, value);

    setValue(name, imageUrl);
  };

  useEffect(() => {
    if (value) {
      setImage({ file: value, type: "image/png" });
    }
  }, [value]);
  return (
    <Card title={title} description={description}>
      <label htmlFor={name + "Input"} className="group cursor-pointer">
        <div
          style={{ aspectRatio: image ? "unset" : aspectRatio }}
          className="h-16 aspect-square max-w-fit border  border-dashed flex justify-center items-center  bg-muted rounded-xl overflow-hidden"
        >
          {image?.file ? (
            <Image
              src={image?.file || getValues(name)}
              alt="Image"
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          ) : (
            <Icon
              iconName="Upload04Icon"
              size={20}
              className="group-hover:opacity-100 opacity-0 transition-opacity text-muted-foreground"
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
        <DialogContent className="rounded-lg w-[95%]">
          <Cropper
            src={image?.file as string}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options
            zoomOnWheel
            aspectRatio={aspectRatio}
            guides={false}
            ref={cropperRef}
          />
          <div className="flex gap-4">
            <Button
              className="w-full"
              onClick={() => {
                setImage({ file: getValues(name), type: image!.type });
                setOpen(false);
              }}
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
      className="flex-col md:flex-row"
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
  form: { register, getValues },
  max,
  name,
}: DefaultValue & { form: UseFormReturn<any>; max: number; name: string }) {
  return (
    <Card
      title={title}
      description={description}
      className="flex-col items-start md:items-center  md:flex-row w-full md:w-fit"
    >
      <div className="relative w-full">
        <Textarea {...register(title.toLowerCase())} />
        <span
          className={cn(
            "text-[0.73rem] text-muted-foreground absolute bottom-0 translate-y-full right-0",
            getValues(name).length > max && "text-destructive"
          )}
        >
          {getValues(name).length}/{max}
        </span>
      </div>
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
    <Card
      title={title}
      description={description}
      className="flex-col md:flex-row"
    >
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
  form: { register, setValue, getValues, unregister },
  setValues,
  max,
}: DefaultValue & {
  ind: number;
  form: UseFormReturn<any>;
  setValues: Dispatch<SetStateAction<any>>;
  max: number;
}) {
  return (
    <Card
      title={title}
      description={description}
      className="flex-col md:flex-row"
    >
      <Icon
        iconName="Cancel01Icon"
        className="absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity right-4 cursor-pointer"
        size={20}
        onClick={() => {
          const questions = getValues("questions").filter(
            (_: any, i: number) => i !== ind
          );
          setValues(questions);
          setValue(`questions`, questions);
          unregister(`questions.${ind}.question`);
        }}
      />
      <div className="space-y-4 w-full relative">
        <Input
          type="text"
          placeholder="Question"
          {...register(`questions.${ind}.question`)}
        />
        <Textarea
          placeholder="Answer"
          {...register(`questions.${ind}.answer`)}
        />
        <span
          className={cn(
            "text-[0.73rem] text-muted-foreground absolute bottom-0 translate-y-full right-0",
            getValues(`questions.${ind}.answer`).length > max &&
              "text-destructive"
          )}
        >
          {getValues(`questions.${ind}.answer`).length}/{max}
        </span>
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
      className="flex-col md:flex-row"
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

Card.Pricing = function Pricing({
  title,
  description,
  form: { register, setValue, getValues },
}: DefaultValue & { form: UseFormReturn<any> }) {
  return (
    <Card
      title={title}
      description={description}
      className="items-start flex-col md:flex-row"
    >
      <div className="flex gap-2 md:gap-4 w-full">
        <Input
          type="text"
          placeholder="Initial Price"
          {...register(`pricing.initial`)}
        />
        <Input
          type="text"
          placeholder="Discounted Price"
          {...register(`pricing.discount`)}
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
    console.log(color);
    setValue(
      `affliates.${ind}.properties.color`,
      color || getValues(`affliates.${ind}.properties.color`)
    );
  }, [getValues, setValue, ind, color]);

  return (
    <Card
      title={"Properties"}
      description={"Modify Properties"}
      className="flex-col md:flex-row "
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
