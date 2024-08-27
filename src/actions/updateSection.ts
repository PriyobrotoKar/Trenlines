"use server";
import { InputSchema } from "@/app/(dashboard)/admin/(admin)/header/page";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";

export const updateSection = async <T extends Record<string, string>>(
  name: string,
  data: T
) => {
  console.log("update", name);

  try {
    const session = await auth();
    if (!session) {
      throw new Error("Unauthorized");
    }
    await prisma.section.upsert({
      where: {
        name,
      },
      update: {
        content: data,
      },
      create: {
        name,
        content: data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
