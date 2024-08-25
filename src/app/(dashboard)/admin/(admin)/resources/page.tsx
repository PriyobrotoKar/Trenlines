"use client";
import { getSection } from "@/actions/getSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { color } from "framer-motion";
import { Fragment } from "react";
import { z } from "zod";

const InputSchema = z.object({
  affliates: z.array(
    z.object({
      image: z.string().min(1, { message: "Image is required" }),
      logo: z.string().min(1, { message: "Logo is required" }),
      properties: z.object({
        color: z.string().min(1, { message: "Color is required" }),
        link: z.string().url().min(1, { message: "Link is required" }),
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

  const form = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "resources",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        affliates: Array(4).fill({
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
      {[...Array(4)].map((_, i) => {
        return (
          <Fragment key={i}>
            <Card.ImageUpload
              title="Brand Image"
              description="Replace with image"
              form={form}
              value={
                (data?.content as z.infer<typeof InputSchema>)?.affliates[i]
                  .image
              }
              name={`affliates.${i}.image`}
            />
            <Card.ImageUpload
              title="Brand Image"
              description="Replace with image"
              form={form}
              value={
                (data?.content as z.infer<typeof InputSchema>)?.affliates[i]
                  .logo
              }
              name={`affliates.${i}.logo`}
            />
            <Card.Affiliate ind={i} form={form} />
          </Fragment>
        );
      })}
    </>
  );
};

export default Page;
