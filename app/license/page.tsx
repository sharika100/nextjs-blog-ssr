import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "License — Beyond UI",
  description: "Beyond UI design kit and component licensing terms.",
};

export default function LicensePage() {
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

          <h1 className="text-3xl font-extrabold text-[#0F172A] mb-3">Beyond UI License</h1>
          <p className="text-[13px] text-slate-400 mb-8">Single & Team Commercial License</p>

          <div className="space-y-6 text-[15px] text-slate-600 leading-relaxed">
            <p>
              Beyond UI is licensed under a standard commercial and open-access agreement designed for seamless product development.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h2 className="text-lg font-bold text-[#0F172A]">What is allowed:</h2>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Use in unlimited personal and commercial client projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Modify, adapt, and build upon any token or component</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Use across SaaS web applications, mobile apps, and marketing websites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
