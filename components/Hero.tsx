import React from "react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 text-center">
      <div className="max-w-[760px] mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-[12px] font-semibold text-slate-700 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Beyond UI Blog</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.18] mb-4">
          Beyond UI Blog
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[16px] text-slate-500 max-w-[580px] mx-auto leading-relaxed">
          Six industry-specific Figma templates with complete user flows, real business logic, and production-ready screens for every stage of your product.
        </p>
      </div>
    </section>
  );
}
