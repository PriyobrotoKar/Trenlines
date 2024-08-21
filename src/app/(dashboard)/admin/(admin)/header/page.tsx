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
  image: z
    .any()
    .refine((files) => files?.length === 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  ctaLabel: z.string().min(1, { message: "CTA Label is required" }),
  ctaLink: z.string().url().min(1, { message: "CTA Link is required" }),
});

const Page = ({ params }: { params: { section: string } }) => {
  const { data, error } = useQuery({
    queryKey: ["header"],
    queryFn: async () => await getSection("header"),
  });

  const { register, errors } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "header",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        ctaLabel: "",
        ctaLink: "",
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  // if (!data?.content) {
  //   return null;
  // }

  return (
    <>
      <Card.ImageUpload
        value={(data?.content as z.infer<typeof InputSchema>)?.image}
        register={register}
        title="Brand Logo"
        description="Replace with a 1:1 logo mark"
      />
      <Card.CallToAction register={register} />
      {/* {(errors.ctaLabel || errors.ctaLink) && (
        <p>{errors.ctaLabel?.message || errors.ctaLink?.message}</p>
      )} */}
    </>
  );
};

export default Page;
