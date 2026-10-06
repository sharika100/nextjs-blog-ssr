import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Beyond UI",
  description: "Beyond UI privacy policy and data governance practices.",
};

export default function PrivacyPage() {
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

          <h1 className="text-3xl font-extrabold text-[#0F172A] mb-3">Privacy Policy</h1>
          <p className="text-[13px] text-slate-400 mb-8">Last updated: October 2026</p>

          <div className="prose prose-slate space-y-6 text-[15px] text-slate-600 leading-relaxed">
            <p>
              At Beyond UI, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how information is handled when using the Beyond UI website and design resources.
            </p>
            <h2 className="text-xl font-bold text-[#0F172A] pt-4">1. Information We Collect</h2>
            <p>
              We only collect information you voluntarily provide, such as your email address when joining our starter kit mailing list or submitting a contact request.
            </p>
            <h2 className="text-xl font-bold text-[#0F172A] pt-4">2. How We Use Data</h2>
            <p>
              Your contact details are used solely to deliver the requested UI resources, product announcements, and replies to your inquiries. We do not sell or rent your personal information to third parties.
            </p>
            <h2 className="text-xl font-bold text-[#0F172A] pt-4">3. Local Storage</h2>
            <p>
              Our application uses your browser&apos;s local storage to remember your saved bookmarks, article preferences, and search history locally on your device.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
