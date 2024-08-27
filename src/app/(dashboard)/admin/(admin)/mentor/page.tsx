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
  introduction: string;
};

const InputSchema = z.object({
  introduction: z
    .string()
    .min(1, { message: "Introduction is required" })
    .max(150, { message: "Introduction must be less than 150 characters" }),
});

const Page = () => {
  const { data, error } = useQuery({
    queryKey: ["mentor"],
    queryFn: async () => await getSection("mentor"),
  });

  const form = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "mentor",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: { introduction: "" },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      <Card.LargeText
        title="Introduction"
        description="Edit personal info"
        form={form}
        max={150}
        name="introduction"
      />
    </>
  );
};

export default Page;
