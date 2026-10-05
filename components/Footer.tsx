import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F17] text-white border-t border-slate-800/80 pt-16 pb-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center text-[#0F172A]">
                <svg
                  className="w-4 h-4 text-[#0F172A]"
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
              <span className="text-[19px] font-bold text-white tracking-tight">
                Beyond UI
              </span>
            </Link>
            <p className="text-[14px] text-slate-400 max-w-sm leading-relaxed">
              Premium Figma UI kit, design system tokens, and production-ready components crafted for modern product teams.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-[14px] text-slate-400">
              <li>
                <a href="#components" className="hover:text-white transition-colors">
                  Components
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#changelog" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-[14px] text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#figma" className="hover:text-white transition-colors">
                  Figma Community
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-[14px] text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#license" className="hover:text-white transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <p>© {new Date().getFullYear()} Beyond UI. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
              aria-label="Twitter"
            >
              Twitter / X
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
              aria-label="Dribbble"
            >
              Dribbble
            </a>
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
              aria-label="Figma"
            >
              Figma
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
