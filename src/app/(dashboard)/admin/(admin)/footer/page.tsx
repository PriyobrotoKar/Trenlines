"use client";
import { getSection } from "@/actions/getSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { register } from "module";
import React from "react";
import { z } from "zod";

type Inputs = {
  ctaLabel: string;
  ctaLink: string;
  disclaimer: string;
  copyright: string;
};

const InputSchema = z.object({
  image: z.string().url().min(1, { message: "Image is required" }),
  links: z.array(
    z.object({
      icon: z.string().min(1, { message: "Icon is required" }),
      link: z.string().url().min(1, { message: "Link is required" }),
    })
  ),
  disclaimer: z
    .string()
    .min(1, { message: "Disclaimer is required" })
    .max(150, { message: "Disclaimer must be less than 150 characters" }),
  copyright: z
    .string()
    .min(1, { message: "Copyright is required" })
    .max(150, { message: "Copyright must be less than 150 characters" }),
});

const Page = () => {
  const { data, error } = useQuery({
    queryKey: ["footer"],
    queryFn: async () => await getSection("footer"),
  });

  const form = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "footer",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        image: "",
        links: Array(4).fill({ icon: "", link: "" }),
        disclaimer: "",
        copyright: "",
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      <h2 className="text-md tracking-wider font-light  uppercase pt-5">
        Branding
      </h2>
      <Card.ImageUpload
        form={form}
        value={(data?.content as z.infer<typeof InputSchema>)?.image}
        title="Brand Logo"
        description="Replace with a logo"
      />
      <h2 className="text-md tracking-wider font-light  uppercase pt-5">
        Social Links
      </h2>
      {[...Array(4)].map((_, i) => (
        <Card.Link
          key={i}
          ind={i}
          form={form}
          title={"Link " + (i + 1)}
          description="Modify Properties"
        />
      ))}
      <h2 className="text-md tracking-wider font-light  uppercase pt-5">
        Informatics
      </h2>
      <Card.LargeText
        title="Disclaimer"
        description="Edit disclaimer info"
        form={form}
        max={150}
        name="disclaimer"
      />
      <Card.LargeText
        title="Copyright"
        description="Edit copyright info"
        form={form}
        max={150}
        name="copyright"
      />
    </>
  );
};

export default Page;
