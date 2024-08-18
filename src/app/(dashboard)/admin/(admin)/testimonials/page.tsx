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
};

const InputSchema = z.object({
  ctaLabel: z.string().min(1, { message: "CTA Label is required" }),
  ctaLink: z.string().min(1, { message: "CTA Link is required" }),
});

const Page = () => {
  const { data, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => await getSection("testimonials"),
  });

  const { register } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "testimonials",
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
      <Card.CallToAction register={register} />
    </>
  );
};

export default Page;
