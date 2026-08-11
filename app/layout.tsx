import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUH.ADITYA DWIJAYA — Portfolio",
  description:
    "Portfolio MUH.ADITYA DWIJAYA — Informatics, Project Management, UI/UX Design & Creative Design.",
  openGraph: {
    title: "MUH.ADITYA DWIJAYA — Portfolio",
    description:
      "Portfolio MUH.ADITYA DWIJAYA — Informatics, Project Management, UI/UX Design & Creative Design.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "MUH.ADITYA DWIJAYA",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
