import { JournalModalSchema } from "./types";
import { z } from "zod";

export default async function addSubscriberInConvertKit(
  data: z.infer<typeof JournalModalSchema>
) {
  console.log("data", data);
  const res = await fetch("https://api.kit.com/v4/subscribers", {
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": process.env.CONVERT_KIT_API_KEY!,
    },
    method: "POST",
    body: JSON.stringify({
      first_name: data.firstname,
      email_address: data.email,
      state: "active",
      fields: {
        "Last name": data.lastname,
        Source: "landing page",
      },
    }),
  });

  if (!res.ok) {
    console.log(await res.json());
    throw new Error("Unable to add subscriber in ConvertKit");
  }
  return res.json();
}
