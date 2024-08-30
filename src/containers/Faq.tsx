import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Animate from "@/components/Animate";
import { getSection } from "@/actions/getSection";

const faqs = [
  {
    question: "What areas of life does the coaching cover?",
    answer:
      "The coaching package is designed to address every aspect of your life, including career, personal development, relationships, fitness, and overall well-being.",
  },
  {
    question: "How often does the coaching take place?",
    answer:
      "The coaching package is designed to address every aspect of your life, including career, personal development, relationships, fitness, and overall well-being.",
  },
  {
    question: "Can the coaching package help with work-life balance?",
    answer:
      "Yes, achieving a healthy work-life balance is one of the key areas addressed in the coaching package. We'll work together to create a plan that suits your lifestyle and priorities.",
  },
  {
    question:
      "Is the coaching suitable for individuals at any stage of life or career?",
    answer:
      "Yes, the coaching package is designed for individuals at any stage of life or career. Whether you're just starting out or looking to make a significant change, we're here to support you.",
  },
];

const Faq = async () => {
  const data = await getSection("faq");
  if (!data) {
    return null;
  }
  const content = data.content as Record<string, any>;

  return (
    <section className="flex justify-center   items-center overflow-visible relative gap-10 md:gap-32 flex-col">
      <Animate
        hidden={{ opacity: 0 }}
        visible={{ opacity: 1 }}
        stagger
        options={{ offsetDelay: 0.7 }}
        className="absolute  w-svw h-[60rem] -z-10 -top-[20rem]  md:-top-40"
      >
        <Image src={"/gradient2.svg"} alt="Gradient2" fill />
      </Animate>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center"
      >
        <h2 className="font-light text-sm md:text-base text-primary opacity-60 tracking-widest">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-lg md:text-2xl tracking-wide">
          Still Got Questions?
        </p>
      </Animate>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 0.5 }}
        className="w-full"
      >
        <Card className="py-8 ">
          <Accordion type="single" collapsible className="">
            {content.questions.map(
              (
                { question, answer }: { question: string; answer: string },
                i: number
              ) => {
                return (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className={cn(
                      "py-4 text-left ",
                      i === content.questions.length - 1 && "border-b-0"
                    )}
                  >
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                );
              }
            )}
          </Accordion>
        </Card>
      </Animate>
    </section>
  );
};

export { Faq };
