"use client";
import { getSection } from "@/actions/getSection";
import { updateSection } from "@/actions/updateSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { z } from "zod";

type Inputs = {
  ctaLabel: string;
  ctaLink: string;
};

export const InputSchema = z.object({
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

  return (
    <>
      <Card.ImageUpload
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
