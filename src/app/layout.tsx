import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import Header from "@/components/Header";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trenlines",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.className} scroll-smooth text-base overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
