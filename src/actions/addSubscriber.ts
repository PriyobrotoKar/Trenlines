"use server";
import prisma from "@/lib/prisma";
import { JournalModalSchema } from "@/lib/types";
import { headers } from "next/headers";
import { z } from "zod";
import { sendEmail } from "./sendEmail";

export const addSubscriber = async ({
  email,
  firstname,
  lastname,
}: z.infer<typeof JournalModalSchema>) => {
  try {
    const ip =
      headers().get("x-forwarded-for") ??
      headers().get("x-real-ip") ??
      "0.0.0.0";

    const data = JournalModalSchema.parse({ email, firstname, lastname });

    const alreadySubscribed = await prisma.subscriber.findFirst({
      where: {
        email,
        ip,
      },
    });

    if (alreadySubscribed) {
      return {
        error: {
          title: "Already Subscribed",
          description: "You have already subscribed to our journal",
        },
      };
    }

    await prisma.subscriber.create({
      data: {
        ...data,
        ip,
      },
    });

    await sendEmail(email);
  } catch (error) {
    console.log(error);
    return {
      error: {
        title: "Something went wrong",
        description: "Please try again later",
      },
    };
  }
};
