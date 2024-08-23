"use client";
import { getSection } from "@/actions/getSection";
import { updateSection } from "@/actions/updateSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

type Inputs = {
  ctaLabel: string;
  ctaLink: string;
};

export const InputSchema = z.object({
  image: z.string().url().min(1, { message: "Image is required" }),
  ctaLabel: z.string().min(1, { message: "CTA Label is required" }),
  ctaLink: z.string().url().min(1, { message: "CTA Link is required" }),
});

const Page = ({ params }: { params: { section: string } }) => {
  const { data, error } = useQuery({
    queryKey: ["header"],
    queryFn: async () => await getSection("header"),
  });

  const { register, errors, setValue } = useAutoSaveForm<
    z.infer<typeof InputSchema>
  >(InputSchema, "header", {
    resolver: zodResolver(InputSchema),
    defaultValues: {
      image: "",
      ctaLabel: "",
      ctaLink: "",
    },
    values: data?.content as z.infer<typeof InputSchema>,
  });

  return (
    <>
      <Card.ImageUpload
        aspectRatio={1}
        value={(data?.content as z.infer<typeof InputSchema>)?.image}
        register={register}
        setValue={setValue}
        title="Brand Logo"
        description="Replace with a 1:1 logo mark"
      />
      <Card.CallToAction register={register} />
    </>
  );
};

export default Page;
