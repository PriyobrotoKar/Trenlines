"use server";
import prisma from "@/lib/prisma";

export const getSection = async (name: string) => {
  const section = await prisma.section.findFirst({
    where: {
      name,
    },
  });

  return section;
};
