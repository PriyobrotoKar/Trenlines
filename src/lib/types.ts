import { z } from "zod";

export const JournalModalSchema = z.object({
  firstname: z.string().min(1, { message: "Firstname is required" }),
  lastname: z.string().min(1, { message: "Lastname is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
});
