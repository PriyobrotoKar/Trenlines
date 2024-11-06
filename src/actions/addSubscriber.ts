"use server";
import prisma from "@/lib/prisma";
import { JournalModalSchema } from "@/lib/types";
import { headers } from "next/headers";
import { z } from "zod";
import { sendEmail } from "./sendEmail";
import addSubscriberInConvertKit from "@/lib/convertKit";

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
        OR: [
          {
            email,
          },
          {
            ip,
          },
        ],
      },
    });

    if (alreadySubscribed) {
      return {
        error: {
          title: "Already Subscribed",
          description: {
            large: "You have already subscribed to our journal",
            small: "Did you check your spam?",
          },
        },
      };
    }

    await addSubscriberInConvertKit(data);
    await sendEmail(email);
    await prisma.subscriber.create({
      data: {
        ...data,
        ip,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: {
        title: "Something went wrong!",
        description: { large: "Please try again later", small: "" },
      },
    };
  }
};
