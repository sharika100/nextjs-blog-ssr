import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog — Beyond UI",
  description: "Recent updates and release notes for Beyond UI.",
};

const RELEASES = [
  {
    version: "v4.1.0",
    date: "October 2026",
    title: "Dark Mode Variables & Tailwind Token Sync",
    changes: [
      "Added native Figma 32 color tokens for high-contrast dark theme",
      "Upgraded blog card typography to Inter Display metrics",
      "New accessible modal dialog and search filter interactions",
    ],
  },
  {
    version: "v4.0.0",
    date: "August 2026",
    title: "Beyond UI 4.0 Major Release",
    changes: [
      "Complete redesign with 500+ Auto Layout 5.0 components",
      "Interactive data grids, chart widgets, and dashboard layouts",
      "Full Next.js App Router and TanStack Query integration",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to blog</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sky-600 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-[12px] font-bold uppercase tracking-wider">Release History</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] mb-8">Changelog</h1>

          <div className="space-y-10 border-l-2 border-slate-100 pl-6 ml-2">
            {RELEASES.map((rel) => (
              <div key={rel.version} className="relative space-y-2">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0F172A] ring-4 ring-white" />
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-[#0F172A] text-white">
                    {rel.version}
                  </span>
                  <span className="text-[13px] text-slate-400 font-medium">{rel.date}</span>
                </div>
                <h2 className="text-lg font-bold text-[#0F172A] pt-1">{rel.title}</h2>
                <ul className="list-disc list-inside space-y-1.5 text-[14px] text-slate-600 pt-1">
                  {rel.changes.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
