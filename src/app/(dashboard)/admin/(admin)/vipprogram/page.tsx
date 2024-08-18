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
  description: string;
};

const InputSchema = z.object({
  features: z.array(
    z.object({
      title: z.string().min(1, { message: "Title is required" }),
      subtitle: z.string().min(1, { message: "Description is required" }),
    })
  ),
  description: z.string().min(1, { message: "Description is required" }),
});

const Page = () => {
  const { data, error } = useQuery({
    queryKey: ["vipProgram"],
    queryFn: async () => await getSection("vipProgram"),
  });

  const { register } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "vipProgram",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        features: Array(4).fill({
          title: "",
          subtitle: "",
        }),
        description: "",
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      {[...Array(4)].map((_, i) => (
        <Card.Feature
          key={i}
          ind={i}
          register={register}
          title={"Feature " + (i + 1)}
          description="Modify Properties"
        />
      ))}
      <Card.LargeText
        title="Description"
        description="Enter product info"
        register={register}
      />
    </>
  );
};

export default Page;
