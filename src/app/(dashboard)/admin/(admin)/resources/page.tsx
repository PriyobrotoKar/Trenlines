"use client";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { color } from "framer-motion";
import { Fragment } from "react";
import { z } from "zod";

const InputSchema = z.object({
  affliates: z.array(
    z.object({
      image: z.string().min(1, { message: "Title is required" }),
      properties: z.object({
        color: z.string().min(1, { message: "Color is required" }),
        link: z.string().url().min(1, { message: "Link is required" }),
        code: z.string().min(1, { message: "Code is required" }),
      }),
    })
  ),
});

const Page = () => {
  const { register, setValue } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "resources",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        affliates: Array(4).fill({
          image: "",
          properties: {
            color: "",
            link: "",
            code: "",
          },
        }),
      },
    }
  );

  return (
    <>
      {[...Array(4)].map((_, i) => {
        return (
          <Fragment key={i}>
            <Card.ImageUpload
              title="Brand Image"
              description="Replace with image"
              register={register}
              value=""
            />
            <Card.Affiliate ind={i} register={register} setValue={setValue} />
          </Fragment>
        );
      })}
    </>
  );
};

export default Page;
