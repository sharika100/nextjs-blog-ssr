import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Zap, Layout, Sliders, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Beyond UI Design System",
  description:
    "Discover the key features, tokens, and components of the Beyond UI design system.",
};

const FEATURES = [
  {
    icon: Layout,
    title: "500+ Production Ready Components",
    desc: "Complete component sets spanning headers, hero banners, pricing tables, data grids, modals, form controls, and dashboards.",
  },
  {
    icon: Sliders,
    title: "Figma Variables & Dark Mode",
    desc: "Native token switching for dark and light modes, brand themes, and spatial densities built into Figma styles.",
  },
  {
    icon: Zap,
    title: "Tailwind CSS & React Code Sync",
    desc: "Every component is mapped directly to semantic Tailwind classes and clean, accessible React functional components.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive Breakpoints",
    desc: "Mobile-first layouts tested from 375px compact screens up through 1440px desktop resolutions.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to blog</span>
            </Link>
          </div>

          <span className="text-[12px] font-bold uppercase tracking-wider text-sky-600 block mb-2">
            System Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            Beyond UI Features
          </h1>
          <p className="text-[18px] text-slate-600 leading-relaxed mb-10">
            A comprehensive overview of the design foundations, atomic components, and developer tooling included in Beyond UI.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-[17px] font-bold text-[#0F172A]">{f.title}</h2>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 my-8">
            <h3 className="text-[16px] font-bold text-[#0F172A] mb-3">Included Out of the Box:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Inter typography hierarchy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>8px spacing grid tokens</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Semantic color palette & contrast ratios</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>SSR & Next.js App Router templates</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
