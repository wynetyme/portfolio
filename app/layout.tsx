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
  title: "Andrew Andari — Software & Reliability Engineer",
  description:
    "Portfolio of Andrew Andari — Computer Science student at the University of Houston focused on software engineering and site reliability. Building resilient systems and hunting down the failures others miss.",
  keywords: [
    "Andrew Andari",
    "Software Engineer",
    "Site Reliability Engineer",
    "SRE",
    "SWE",
    "University of Houston",
    "Portfolio",
  ],
  openGraph: {
    title: "Andrew Andari — Software & Reliability Engineer",
    description:
      "Computer Science student at the University of Houston building resilient systems. Targeting SWE and SRE roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
