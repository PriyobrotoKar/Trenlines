"use client";
import { getSection } from "@/actions/getSection";
import Card from "@/components/admin/Card";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { color } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { z } from "zod";

const InputSchema = z.object({
  affliates: z.array(
    z.object({
      image: z.string().min(1, { message: "Image is required" }),
      logo: z.string().min(1, { message: "Logo is required" }),
      properties: z.object({
        color: z
          .string()
          .min(1, { message: "Color is required" })
          .refine(
            (v) => {
              return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v);
            },
            { message: "Invalid color" }
          ),
        link: z.string().min(1, { message: "Link is required" }),
        code: z.string().min(1, { message: "Code is required" }),
      }),
    })
  ),
});

const Page = () => {
  const { data } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => await getSection("resources"),
  });

  const [affliates, setAffliates] =
    useState<z.infer<typeof InputSchema.shape.affliates>>();

  useEffect(() => {
    if (data) {
      setAffliates((data?.content! as z.infer<typeof InputSchema>).affliates);
    }
  }, [data]);

  const form = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "resources",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        affliates: Array(1).fill({
          image: "",
          logo: "",
          properties: {
            color: "",
            link: "",
            code: "",
          },
        }),
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      {[...Array(affliates?.length || 0)].map((_, i) => {
        return (
          <div key={i} className="group space-y-6 md:space-y-8">
            <div className="flex gap-4 items-center  relative justify-between lg:justify-start">
              <h2 className="text-md font-light tracking-wider">
                AFFILIATES {i + 1}
              </h2>
              <Icon
                iconName="Cancel01Icon"
                className="opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity  cursor-pointer"
                size={20}
                onClick={() => {
                  const affliates = form
                    .getValues("affliates")
                    .filter((_: any, ind: number) => ind !== i);
                  setAffliates(affliates);
                  form.setValue(`affliates`, affliates);
                }}
              />
            </div>
            <Card.ImageUpload
              title="Brand Image"
              description="Replace with image"
              form={form}
              value={affliates ? affliates[i].image : ""}
              name={`affliates.${i}.image`}
              aspectRatio={3 / 4}
            />
            <Card.ImageUpload
              title="Brand Image"
              description="Replace with image"
              form={form}
              value={affliates ? affliates[i].logo : ""}
              name={`affliates.${i}.logo`}
              aspectRatio={5 / 1.5}
            />
            <Card.Affiliate ind={i} form={form} />
          </div>
        );
      })}
      <div className="max-w-[36rem] flex justify-center items-center">
        <Button
          onClick={() =>
            setAffliates((prev) => [
              ...prev!,
              {
                image: "",
                logo: "",
                properties: { code: "", color: "", link: "" },
              },
            ])
          }
          size={"sm"}
        >
          Add Affliate
        </Button>
      </div>
    </>
  );
};

export default Page;
