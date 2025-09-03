import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Amine Zouari | Full Stack Web Engineer",
  description:
    "I'm Amine, a passionate Full Stack Web Engineer crafting modern, responsive web experiences with a strong focus on frontend performance and design.",
  authors: [{ name: "Amine Zouari" }],
  openGraph: {
    title: "Amine Zouari | Full Stack Web Engineer",
    description:
      "I'm Amine, a passionate Full Stack Web Engineer crafting modern, responsive web experiences with a strong focus on frontend performance and design.",
    url: "https://amine-zouari.vercel.app/",
    siteName: "Amine Zouari Portfolio",
    images: [
      {
        url: "https://amine-zouari.vercel.app/preview.png",
        width: 1000,
        height: 500,
        alt: "Amine Zouari Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Zouari | Full Stack Web Engineer",
    description:
      "I'm Amine, a passionate Full Stack Web Engineer crafting modern, responsive web experiences with a strong focus on frontend performance and design.",
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
        <Analytics />
      </body>
    </html>
  );
}
