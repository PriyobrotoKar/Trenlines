"use server";
import prisma from "@/lib/prisma";

export const getSubscribers = async (page: number) => {
  const skip = (page - 1) * 10;
  const take = 10;
  try {
    const subscribers = await prisma.subscriber.findMany({ take, skip });
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
