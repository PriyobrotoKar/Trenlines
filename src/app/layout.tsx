import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";

const AeonikFont = localfont({
  src: [
    {
      path: "../../public/fonts/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AeonikFont.className} text-base`}>{children}</body>
    </html>
  );
}
