import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";
import Footer from "@/components/Footer";
import { getPosts } from "@/lib/api";

// Ensure genuine dynamic Server-Side Rendering (SSR) per request
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Beyond UI Blog — Design Systems & UI Resources",
  description:
    "Explore the latest insights, design systems tutorials, Figma tips, and UI/UX best practices from the Beyond UI design team.",
  openGraph: {
    title: "Beyond UI Blog — Design Systems & UI Resources",
    description:
      "Explore the latest insights, design systems tutorials, Figma tips, and UI/UX best practices from the Beyond UI design team.",
    type: "website",
    url: "https://beyondui.design/blog",
    images: [
      {
        url: "/images/post-1.jpg",
        width: 1200,
        height: 800,
        alt: "Beyond UI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond UI Blog",
    description:
      "Explore the latest insights, design systems tutorials, and UI/UX best practices.",
    images: ["/images/post-1.jpg"],
  },
};

// Server Component demonstrating Next.js SSR
export default async function HomePage() {
  // Server-side data fetching (SSR)
  const initialPosts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <BlogGrid initialPosts={initialPosts} />
      </main>
      <Footer />
    </div>
  );
}
