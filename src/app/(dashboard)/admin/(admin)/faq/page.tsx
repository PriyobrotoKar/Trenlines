"use client";
import { getSection } from "@/actions/getSection";
import Card from "@/components/admin/Card";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { z } from "zod";

const InputSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().min(1, { message: "Title is required" }),
      answer: z.string().min(1, { message: "Description is required" }),
    })
  ),
});

const Page = () => {
  const { data } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => await getSection("faq"),
  });

  const { register } = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "faq",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        questions: Array(4).fill({
          question: "",
          answer: "",
        }),
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      {[...Array(4)].map((_, i) => (
        <Card.Question
          ind={i}
          register={register}
          key={i}
          title={"Question " + (i + 1)}
          description="Enter product info"
        />
      ))}
    </>
  );
};

export default Page;
