"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail } from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle ESC key press
  useEffect(() => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");

    try {
      const existing = localStorage.getItem("beyond_ui_subscribers");
      const list = existing ? JSON.parse(existing) : [];
      list.push({ name, email, date: new Date().toISOString() });
      localStorage.setItem("beyond_ui_subscribers", JSON.stringify(list));
    } catch {
      // Ignore storage errors in restricted contexts
    }

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setEmail("");
    setName("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-started-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A]">You&apos;re All Set! 🎉</h2>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              We&apos;ve sent the Beyond UI Starter Kit and Figma preview instructions to{" "}
              <strong className="text-slate-900">{email}</strong>.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-full bg-[#0F172A] text-white text-[14px] font-medium hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sky-600 mb-2">
              <Mail className="w-4 h-4" />
              <span className="text-[12px] font-bold tracking-wider uppercase">Join 12,000+ Designers</span>
            </div>
            <h2 id="get-started-modal-title" className="text-2xl font-bold text-[#0F172A] mb-2 tracking-tight">
              Get Started with Beyond UI
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed mb-6">
              Receive free production-ready tokens, starter templates, and Figma component libraries right away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="user-name" className="block text-[13px] font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  id="user-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                />
              </div>

              <div>
                <label htmlFor="user-email" className="block text-[13px] font-medium text-slate-700 mb-1">
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="user-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                />
                {error && <p className="text-[12px] text-rose-600 mt-1.5 font-medium">{error}</p>}
              </div>

              <div className="flex items-center gap-1.5 text-[12px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero spam. Unsubscribe anytime in one click.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#0F172A] hover:bg-black text-white text-[14px] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <span>Get Instant Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
