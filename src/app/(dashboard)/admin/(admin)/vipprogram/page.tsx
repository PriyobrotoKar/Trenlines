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
      icon: z.string().min(1, { message: "Icon is required" }),
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

  const form = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "vipProgram",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        features: Array(4).fill({
          icon: "",
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
      <h2 className="text-md tracking-wider font-light  uppercase pt-5">
        Features
      </h2>
      {[...Array(4)].map((_, i) => (
        <Card.Feature
          key={i}
          ind={i}
          form={form}
          title={"Feature " + (i + 1)}
          description="Modify Properties"
        />
      ))}
      <h2 className="text-md tracking-wider font-light  uppercase pt-5">
        Program
      </h2>
      <Card.LargeText
        title="Description"
        description="Enter product info"
        register={form.register}
      />
    </>
  );
};

export default Page;