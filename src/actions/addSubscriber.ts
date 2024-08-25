"use server";
import prisma from "@/lib/prisma";
import { JournalModalSchema } from "@/lib/types";
import { headers } from "next/headers";
import { z } from "zod";

export const addSubscriber = async ({
  email,
  firstname,
  lastname,
}: z.infer<typeof JournalModalSchema>) => {
  try {
    await prisma.subscriber.deleteMany();
    const ip =
      headers().get("x-forwarded-for") ??
      headers().get("x-real-ip") ??
      "0.0.0.0";
    const data = JournalModalSchema.parse({ email, firstname, lastname });

    let tx = [];

    for (let i = 0; i < 30; i++) {
      tx.push(
        prisma.subscriber.create({
          data: {
            ...data,
            email: `${email}${i}`,
            ip,
          },
        })
      );
    }

    await prisma.$transaction(tx);
  } catch (error) {
    console.log(error);
  }
};
