"use client";
import { getSection } from "@/actions/getSection";
import Card from "@/components/admin/Card";
import { Button } from "@/components/ui/button";
import useAutoSaveForm from "@/hooks/useAutoSaveForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { set, z } from "zod";

const InputSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().min(1, { message: "Title is required" }),
      answer: z
        .string()
        .min(1, { message: "Description is required" })
        .max(200, { message: "Description must be less than 200 characters" }),
    })
  ),
});

const Page = () => {
  const { data } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => await getSection("faq"),
  });

  const [values, setValues] =
    React.useState<z.infer<typeof InputSchema.shape.questions>>();

  useEffect(() => {
    if (data) {
      setValues((data?.content! as z.infer<typeof InputSchema>).questions);
    }
  }, [data]);

  const form = useAutoSaveForm<z.infer<typeof InputSchema>>(
    InputSchema,
    "faq",
    {
      resolver: zodResolver(InputSchema),
      defaultValues: {
        questions: Array(1).fill({
          question: "",
          answer: "",
        }),
      },
      values: data?.content as z.infer<typeof InputSchema>,
    }
  );

  return (
    <>
      {[...Array(values?.length || 0)].map((_, i) => (
        <Card.Question
          ind={i}
          key={i}
          title={"Question " + (i + 1)}
          description="Enter product info"
          form={form}
          setValues={setValues}
          max={200}
        />
      ))}
      <div className="flex justify-center items-center max-w-[36rem]">
        <Button
          size={"sm"}
          variant={"secondary"}
          className="bg-primary hover:bg-primary/80 mx-auto"
          onClick={() =>
            setValues((prev) => [...prev!, { question: "", answer: "" }])
          }
        >
          Add Question
        </Button>
      </div>
    </>
  );
};

export default Page;
