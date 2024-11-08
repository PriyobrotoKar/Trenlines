"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent } from "./ui/dialog";
import Card from "./Card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Icon, Icons } from "./Icons";
import { AnimatePresence, useInView, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addSubscriber } from "@/actions/addSubscriber";
import { JournalModalSchema } from "@/lib/types";
import { register } from "module";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useJournalModal } from "@/providers/JournalModalProvider";

const JournalModal = () => {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const showModal = searchParams.get("showModal") === "true";
  const { closed, setClosed } = useJournalModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: {
      title: "",
      description: {
        large: "",
        small: "",
      },
    },
  });
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div ref={ref}></div>
      <Dialog open={showModal || (isInView && !closed)}>
        <DialogContent className="p-0 border-0 max-w-[55rem] w-[90%] rounded-2xl">
          <Card className="flex  md:flex-row flex-col gap-16 md:gap-4 items-center md:items-start justify-between py-20 md:pt-24 md:pb-16 xl:pt-32 xl:pb-24 relative overflow-hidden [&>*]:flex-1">
            <DialogClose
              className="absolute top-10 right-10 z-20"
              tabIndex={-1}
              onClick={() => {
                if (showModal) {
                  router.back();
                  return;
                }
                setClosed(true);
              }}
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
            {!success && !error.error && (
              <JournalForm
                setSuccess={setSuccess}
                setError={setError}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
            )}
            {success && <JournalSuccess />}
            {error.error && <JournalError error={error.message} />}
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const JournalForm = ({
  setSuccess,
  setError,
  isSubmitting,
  setIsSubmitting,
}: {
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<
    SetStateAction<{
      error: boolean;
      message: { title: string; description: { large: string; small: string } };
    }>
  >;
  isSubmitting: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit } = useForm<
    z.infer<typeof JournalModalSchema>
  >({ resolver: zodResolver(JournalModalSchema) });

  const onSubmit = async (data: z.infer<typeof JournalModalSchema>) => {
    setIsSubmitting(true);
    const res = await addSubscriber(data);
    if (res) {
      setError({
        error: true,
        message: res.error,
      });
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(false);
    setSuccess(true);
  };
  return (
    <>
      <div className="z-10 space-y-2.5 text-center md:text-left">
        <div className="text-sm text-muted-foreground space-y-2 font-light tracking-wider">
          LIMITED OFFER
        </div>
        <h2 className="text-xl tracking-wide">Trading Journal</h2>
        <div className="font-light space-x-2">
          <span className="line-through text-muted-foreground">7.99$</span>
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
          <Input type="text" {...register("lastname")} placeholder="Lastname" />
        </div>
        <Input type="email" {...register("email")} placeholder="Email" />
        <Button
          size={"sm"}
          className="relative  leading-none"
          contentClassName="flex-col"
          disabled={isSubmitting}
        >
          <AnimatePresence>
            <motion.span
              key={"loader-icon"}
              initial={{ opacity: 0 }}
              animate={{ opacity: isSubmitting ? 1 : 0 }}
              className="block absolute"
            >
              <Icon
                className="animate-spin  "
                iconName="Loading03Icon"
                size={24}
              />
            </motion.span>
            <motion.span
              key={"claim-offer"}
              initial={{ opacity: 1 }}
              animate={{ opacity: isSubmitting ? 0 : 1 }}
              className="block"
            >
              Claim Offer
            </motion.span>
          </AnimatePresence>
        </Button>
      </form>
    </>
  );
};

const JournalSuccess = () => {
  return (
    <>
      <div className="text-center relative z-20">
        <h2 className="text-xl md:text-2xl font-bold">Check Your Inbox!</h2>
        <p className="text-muted-foreground">
          Thank you for subscribing to our journal
        </p>
        <p className="text-sm mt-4 text-gray-600">
          *don&apos;t forget to check your spam, might take 48 hours to receive
        </p>
      </div>
    </>
  );
};

const JournalError = ({
  error,
}: {
  error: { title: string; description: { large: string; small: string } };
}) => {
  return (
    <>
      <div className="text-center relative z-20 space-y-5">
        <h2 className="text-xl text-balance md:text-2xl font-bold">
          {error.title}
        </h2>
        <p className="text-muted-foreground">{error.description.large}</p>
        <p className="text-sm mt-4 text-gray-600">{error.description.small}</p>
      </div>
    </>
  );
};

export default JournalModal;
