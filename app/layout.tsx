import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondui.design"),
  title: {
    default: "Beyond UI Blog — UI/UX Design Systems & Components",
    template: "%s | Beyond UI Blog",
  },
  description:
    "Explore the latest insights, design systems tutorials, Figma tips, and UI/UX best practices from Beyond UI.",
  keywords: [
    "Design Systems",
    "UI Kit",
    "Figma",
    "UI Design",
    "Beyond UI",
    "Tailwind CSS",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Jennifer Taylor", url: "https://beyondui.design" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beyondui.design/blog",
    siteName: "Beyond UI Blog",
    title: "Beyond UI Blog — UI/UX Design Systems & Components",
    description:
      "Explore the latest insights, design systems tutorials, Figma tips, and UI/UX best practices from Beyond UI.",
    images: [
      {
        url: "/images/post-1.jpg",
        width: 1200,
        height: 800,
        alt: "Beyond UI Blog Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond UI Blog — UI/UX Design Systems & Components",
    description:
      "Explore the latest insights, design systems tutorials, Figma tips, and UI/UX best practices from Beyond UI.",
    images: ["/images/post-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
