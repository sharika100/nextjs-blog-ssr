import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md text-center">
          <span className="text-[13px] font-bold text-blue-600 uppercase tracking-widest">
            404 Error
          </span>
          <h1 className="text-4xl font-extrabold text-[#0F172A] mt-2 mb-4 tracking-tight">
            Article Not Found
          </h1>
          <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
            Sorry, we couldn&apos;t find the post you were looking for. It may have been moved or removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-[14px] font-medium hover:bg-black transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Blog Homepage</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
