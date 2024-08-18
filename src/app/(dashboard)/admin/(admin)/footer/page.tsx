"use client";
import { getSection } from "@/actions/getSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { z } from "zod";

type Inputs = {
  ctaLabel: string;
  ctaLink: string;
  disclaimer: string;
  copyright: string;
};

const InputSchema = z.object({
  links: z.array(
    z.object({ link: z.string().url().min(1, { message: "Link is required" }) })
  ),
  disclaimer: z.string().min(1, { message: "Disclaimer is required" }),
  copyright: z.string().min(1, { message: "Copyright is required" }),
});

const Page = () => {
  const { data, error } = useQuery({
    queryKey: ["footer"],
    queryFn: async () => await getSection("footer"),
  });

  const { register } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "footer",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        links: Array(4).fill({ link: "" }),
        disclaimer: "",
        copyright: "",
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      <Card.ImageUpload title="Brand Logo" description="Replace with a logo" />
      {[...Array(4)].map((_, i) => (
        <Card.Link
          key={i}
          ind={i}
          register={register}
          title={"Link " + (i + 1)}
          description="Modify Properties"
        />
      ))}
      <Card.LargeText
        title="Disclaimer"
        description="Edit disclaimer info"
        register={register}
      />
      <Card.LargeText
        title="Copyright"
        description="Edit copyright info"
        register={register}
      />
    </>
  );
};

export default Page;
