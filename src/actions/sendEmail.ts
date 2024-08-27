import { Resend } from "resend";
import EmailTemplate from "@/components/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (address: string) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: address,
    subject: "Trading Journal",
    react: EmailTemplate(),
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  console.log("Email sent successfully!", data);
};
