import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Users, Shield, Layers, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Beyond UI Design System",
  description:
    "Learn about Beyond UI, our design philosophy, and how we help modern product teams build world-class user experiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb back */}
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
            Company & Mission
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            About Beyond UI
          </h1>

          <p className="text-[18px] text-slate-600 leading-relaxed mb-10">
            Beyond UI is a premier design system and component architecture crafted for product designers, engineers, and digital agencies seeking perfection, speed, and cross-platform consistency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-[17px] font-bold text-[#0F172A]">Comprehensive Tokens</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Over 500 components, variables, and typography scales designed with Figma Auto Layout 5.0 and strict accessibility contrast standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-[17px] font-bold text-[#0F172A]">Built for Collaboration</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Bridges the divide between Figma designers and front-end developers with matching React and Tailwind CSS implementation specs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-[17px] font-bold text-[#0F172A]">WCAG 2.1 AA Compliant</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Color palettes and interactive components tested rigorously for keyboard navigation, screen reader compatibility, and readable typography.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-[17px] font-bold text-[#0F172A]">Continuous Evolution</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Regularly updated with new patterns, dark mode variables, and mobile responsiveness tailored to enterprise application requirements.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Ready to elevate your workflow?</h3>
              <p className="text-[14px] text-slate-300">
                Explore our free Figma preview or read our architectural articles on the blog.
              </p>
            </div>
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full bg-white text-[#0F172A] font-semibold text-[13px] hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Explore Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
