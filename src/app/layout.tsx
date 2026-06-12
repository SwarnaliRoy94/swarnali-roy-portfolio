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
  title: "Swarnali Roy | Senior Software Engineer",
  description:
    "Portfolio of Swarnali Roy, a React Native, React, Next.js, and TypeScript software engineer building production mobile and web applications.",
  keywords: [
    "Swarnali Roy",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "Senior Software Engineer",
    "TypeScript",
    "Frontend Engineer",
  ],
  authors: [{ name: "Swarnali Roy" }],
  openGraph: {
    title: "Swarnali Roy | Senior Software Engineer",
    description:
      "React Native and React engineer building polished mobile and web products with product-minded delivery.",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
