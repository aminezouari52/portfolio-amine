import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Amine Zouari | Fullstack JavaScript Developer",
  description:
    "I'm Amine, a passionate fullstack JavaScript developer crafting modern, responsive web experiences with a strong focus on frontend performance and design.",
  authors: [{ name: "Amine Zouari" }],
  openGraph: {
    title: "Amine Zouari | Fullstack JavaScript Developer",
    description:
      "I'm Amine, a passionate fullstack JavaScript developer crafting modern, responsive web experiences with a strong focus on frontend performance and design.",
    url: "https://amine-zouari.vercel.app/",
    siteName: "Amine Zouari Portfolio",
    images: [
      {
        url: "https://amine-zouari.vercel.app/preview.png",
        width: 1300,
        height: 630,
        alt: "Amine Zouari Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Zouari | Fullstack JavaScript Developer",
    description:
      "I'm Amine, a passionate fullstack JavaScript developer crafting modern, responsive web experiences with a strong focus on frontend performance and design.",
    images: ["https://amine-zouari.vercel.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
