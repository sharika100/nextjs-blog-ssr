"use client";

import React, { useState } from "react";
import { X, ExternalLink, Sparkles } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<"buttons" | "toggles" | "inputs">("buttons");
  const [toggleState, setToggleState] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [previewText, setPreviewText] = useState("Beyond UI Component");

  // Handle ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <h2 id="demo-modal-title" className="text-[17px] font-bold text-[#0F172A]">
                Beyond UI Interactive Demo
              </h2>
              <p className="text-[12px] text-slate-500">Live components from the v4.1 design system</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-slate-100 px-6 pt-3 gap-4 text-[13px] font-medium text-slate-500">
          <button
            type="button"
            onClick={() => setActiveTab("buttons")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "buttons"
                ? "border-[#0F172A] text-[#0F172A] font-semibold"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            Button Variants
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("toggles")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "toggles"
                ? "border-[#0F172A] text-[#0F172A] font-semibold"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            Toggles & Badges
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inputs")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "inputs"
                ? "border-[#0F172A] text-[#0F172A] font-semibold"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            Input Field
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "buttons" && (
            <div className="space-y-4">
              <p className="text-[13px] text-slate-600">
                Click the interactive buttons below to test tokenized states and micro-interactions:
              </p>
              <div className="flex flex-wrap gap-3 items-center pt-2">
                <button
                  type="button"
                  onClick={() => setClickCount((c) => c + 1)}
                  className="px-4 py-2 rounded-full bg-[#0F172A] text-white text-[13px] font-medium hover:bg-slate-800 transition-transform active:scale-95 shadow-sm"
                >
                  Primary Action ({clickCount})
                </button>
                <button
                  type="button"
                  onClick={() => setClickCount((c) => c + 1)}
                  className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 text-[13px] font-medium hover:bg-slate-50 transition-colors active:scale-95"
                >
                  Secondary Outline
                </button>
                <button
                  type="button"
                  onClick={() => setClickCount((c) => c + 1)}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-[13px] font-medium hover:bg-blue-100 transition-colors active:scale-95"
                >
                  Subtle Accent
                </button>
              </div>
              <p className="text-[12px] text-slate-400 pt-2">
                Total clicks registered: <span className="font-semibold text-slate-700">{clickCount}</span>
              </p>
            </div>
          )}

          {activeTab === "toggles" && (
            <div className="space-y-5">
              <div>
                <label className="text-[13px] font-semibold text-slate-800 block mb-2">
                  Interactive Tokenized Switch
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={toggleState}
                    onClick={() => setToggleState(!toggleState)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                      toggleState ? "bg-[#0F172A]" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        toggleState ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                  <span className="text-[13px] text-slate-600 font-medium">
                    Feature state: {toggleState ? "Active / Enabled" : "Disabled"}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[13px] font-semibold text-slate-800 block mb-2">
                  Category Pill Badges
                </label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#E0F2FE] text-[#0284C7]">
                    Design System
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#F3E8FF] text-[#7E22CE]">
                    Management
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#DCFCE7] text-[#15803D]">
                    Web Development
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#FEF3C7] text-[#B45309]">
                    UX Research
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "inputs" && (
            <div className="space-y-4">
              <label htmlFor="demo-input" className="text-[13px] font-semibold text-slate-800 block">
                Live Controlled Text Field
              </label>
              <input
                id="demo-input"
                type="text"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Type anything..."
              />
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[13px] text-slate-600">
                Live output: <span className="font-semibold text-slate-900">{previewText || "(empty)"}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-t border-slate-100">
          <a
            href="https://www.figma.com/design/wfHUgWyXuqjUXf7kYrUmGf/Preview---Beyond-UI-Premium-v4.1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Open Beyond UI in Figma</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#0F172A] text-white text-[13px] font-medium hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
