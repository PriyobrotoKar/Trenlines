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

const Faq = () => {
  return (
    <section className="flex justify-center  items-center overflow-visible relative space-y-32 flex-col">
      <div className="absolute -ml-4 w-screen h-[60rem] -z-10  -top-20">
        <Image src={"/gradient2.svg"} alt="Gradient2" fill />
      </div>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        className="text-center"
      >
        <h2 className="font-light text-primary opacity-60 tracking-widest">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-2xl tracking-wide">Still Got Questions?</p>
      </Animate>
      <Animate
        hidden={{ opacity: 0, transform: "translateY(10px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 0.7 }}
      >
        <Card className="w-[64rem] py-8 ">
          <Accordion type="single" collapsible className="">
            {faqs.map(({ question, answer }, i) => {
              return (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className={cn("py-4 ", i === faqs.length - 1 && "border-b-0")}
                >
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Card>
      </Animate>
    </section>
  );
};

export { Faq };
