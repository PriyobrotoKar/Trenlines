"use client";
import { getSection } from "@/actions/getSection";
import { updateSection } from "@/actions/updateSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { z } from "zod";

type Inputs = {
  ctaLabel: string;
  ctaLink: string;
};

const InputSchema = z.object({
  image: z.string().url().min(1, { message: "Image is required" }),
  ctaLabel: z.string().min(1, { message: "CTA Label is required" }),
  ctaLink: z.string().min(1, { message: "CTA Link is required" }),
});

const Page = () => {
  const { data, error } = useQuery({
    queryKey: ["heroSection"],
    queryFn: async () => await getSection("heroSection"),
  });

  const { register, setValue } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "heroSection",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        image: "",
        ctaLabel: "",
        ctaLink: "",
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );
  return (
    <>
      <Card.ImageUpload
        aspectRatio={16 / 9}
        setValue={setValue}
        value={(data?.content as z.infer<typeof InputSchema>)?.image}
        register={register}
        title="Hero Image"
        description="Size Limit:1.5mb"
      />
      <Card.CallToAction register={register} />
    </>
  );
};

export default Page;
