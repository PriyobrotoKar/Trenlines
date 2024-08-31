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
  description:
    "Become financially independent early in the game with Sam Gilkes today",
  openGraph: {
    siteName: "Trenlines",
    title: "Trenlines",
    description:
      "Become financially independent early in the game with Sam Gilkes today",
    type: "website",
    url: "https://teamtrenlines.com",
    images: [
      {
        url: "https://github.com/PriyobrotoKar/Trenlines/blob/main/public/OG_Thumb.png?raw=true",
        secureUrl:
          "https://github.com/PriyobrotoKar/Trenlines/blob/main/public/OG_Thumb.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Trenlines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trenlines",
    creator: "@trenlines",
    title: "Trenlines",
    description:
      "Become financially independent early in the game with Sam Gilkes today",
    images: {
      url: "https://github.com/PriyobrotoKar/Trenlines/blob/main/public/OG_Thumb.png?raw=true",
      alt: "Trenlines",
    },
  },
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
