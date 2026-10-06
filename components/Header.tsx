"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DemoModal from "./DemoModal";
import GetStartedModal from "./GetStartedModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setMobileMenuOpen(false);
    setDemoModalOpen(true);
  };

  const handleOpenGetStarted = () => {
    setMobileMenuOpen(false);
    setGetStartedModalOpen(true);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-slate-100/80 sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-[34px] h-[34px] rounded-full bg-[#0F172A] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
                <polyline points="18 19 12 13 6 19" />
              </svg>
            </div>
            <span className="text-[19px] font-bold text-[#0F172A] tracking-tight whitespace-nowrap">
              Beyond UI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-7 text-[14px] text-slate-600 font-medium"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className="hover:text-slate-900 transition-colors"
            >
              Homepage
            </Link>
            <Link
              href="/about"
              className="hover:text-slate-900 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/features"
              className="hover:text-slate-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-slate-900 font-semibold relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#0F172A] after:rounded-full"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact us
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              type="button"
              onClick={handleOpenDemo}
              className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-[13px] font-medium hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={handleOpenGetStarted}
              className="px-5 py-2 rounded-full bg-[#0F172A] hover:bg-black text-white text-[13px] font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2 text-[15px] font-medium text-slate-600">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                Homepage
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                About us
              </Link>
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                Features
              </Link>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-100 font-semibold text-slate-900"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
              >
                Contact us
              </Link>
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleOpenDemo}
                className="w-full py-2.5 rounded-full border border-slate-200 text-slate-700 text-[14px] font-medium hover:bg-slate-50"
              >
                Demo
              </button>
              <button
                type="button"
                onClick={handleOpenGetStarted}
                className="w-full py-2.5 rounded-full bg-[#0F172A] text-white text-[14px] font-medium hover:bg-black"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Modals */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <GetStartedModal isOpen={getStartedModalOpen} onClose={() => setGetStartedModalOpen(false)} />
    </>
  );
}
