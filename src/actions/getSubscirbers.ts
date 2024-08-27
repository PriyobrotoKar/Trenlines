"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getSubscribers = async (page?: number) => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }
  const skip = page ? (page - 1) * 10 : 0;
  const take = page ? 10 : undefined;
  try {
    const subscribers = await prisma.subscriber.findMany({
      take,
      skip,
      orderBy: { createdAt: "desc" },
    });
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
