import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Beyond UI",
  description: "Beyond UI terms of service and usage guidelines.",
};

export default function TermsPage() {
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

          <h1 className="text-3xl font-extrabold text-[#0F172A] mb-3">Terms of Service</h1>
          <p className="text-[13px] text-slate-400 mb-8">Last updated: October 2026</p>

          <div className="prose prose-slate space-y-6 text-[15px] text-slate-600 leading-relaxed">
            <p>
              By accessing Beyond UI design systems, blog publications, and component files, you agree to comply with and be bound by the following terms.
            </p>
            <h2 className="text-xl font-bold text-[#0F172A] pt-4">1. Use of Design Assets</h2>
            <p>
              Beyond UI grants you a non-exclusive license to use the design components and code patterns in your commercial and personal projects in accordance with our licensing terms.
            </p>
            <h2 className="text-xl font-bold text-[#0F172A] pt-4">2. Redistribution Restrictions</h2>
            <p>
              You may not re-package, sub-license, or redistribute Beyond UI Figma files or code packages as standalone UI kit templates for direct resale.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
