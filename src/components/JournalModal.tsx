"use client";
import React, { useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent } from "./ui/dialog";
import Card from "./Card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Icon } from "./Icons";
import { useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addSubscriber } from "@/actions/addSubscriber";
import { JournalModalSchema } from "@/lib/types";

const JournalModal = () => {
  const ref = useRef(null);
  const [closed, setClosed] = useState(false);
  const isInView = useInView(ref, { once: true });
  const { register, handleSubmit } = useForm<
    z.infer<typeof JournalModalSchema>
  >({ resolver: zodResolver(JournalModalSchema) });

  const onSubmit = async (data: z.infer<typeof JournalModalSchema>) => {
    console.log("submit", data);
    await addSubscriber(data);
  };

  return (
    <div>
      <div ref={ref}></div>
      <Dialog open={isInView && !closed}>
        <DialogContent className="p-0 border-0 max-w-[55rem] w-[90%]">
          <Card className="flex md:flex-row flex-col gap-16 md:gap-4 items-center md:items-start justify-between py-20 md:pt-24 md:pb-16 xl:pt-32 xl:pb-24 relative overflow-hidden [&>*]:flex-1">
            <DialogClose
              className="absolute top-10 right-10 z-20"
              onClick={() => setClosed(true)}
            >
              <Icon iconName="Cancel01Icon" size={20} />
            </DialogClose>
            <div className="absolute before:absolute before:w-full before:z-10 before:h-full before:from-50% before:bg-gradient-to-l before:from-card before:to-transparent w-full top-1/2 -translate-y-1/2 left-0 z-0">
              <Image
                src={"/journal.png"}
                alt="Journal"
                width={400}
                height={400}
                className="w-full opacity-10 "
              />
            </div>
            <div className="absolute pointer-events-none left-0  h-[30rem] w-full z-0  bottom-1/2  md:-bottom-40">
              <Image
                src={"/gradient2.svg"}
                alt="Gradient2"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="z-10 space-y-2.5 text-center md:text-left">
              <div className="text-sm text-muted-foreground space-y-2 font-light tracking-wider">
                LIMITED OFFER
              </div>
              <h2 className="text-xl tracking-wide">Trading Journal</h2>
              <div className="font-light space-x-2">
                <span className="line-through text-muted-foreground">
                  7.99$
                </span>
                <span className="text-primary">FREE</span>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 max-w-[20rem] relative z-10 text-center"
            >
              <div className="flex gap-6 ">
                <Input
                  type="text"
                  {...register("firstname")}
                  placeholder="Firstname"
                />
                <Input
                  type="text"
                  {...register("lastname")}
                  placeholder="Lastname"
                />
              </div>
              <Input type="email" {...register("email")} placeholder="Email" />
              <Button size={"sm"}>Claim Offer</Button>
            </form>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JournalModal;
