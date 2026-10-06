"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setError("Please fill in both email and your message.");
      return;
    }
    setError("");

    try {
      const existing = localStorage.getItem("beyond_ui_messages");
      const list = existing ? JSON.parse(existing) : [];
      list.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem("beyond_ui_messages", JSON.stringify(list));
    } catch {
      // Ignore
    }

    setIsSubmitted(true);
  };

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

          <span className="text-[12px] font-bold uppercase tracking-wider text-sky-600 block mb-2">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Contact the Beyond UI Team
          </h1>
          <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
            Have questions about our Figma UI kit, need custom design system licensing, or want to contribute an article? Send us a message!
          </p>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Message Sent! ✉️</h2>
              <p className="text-[15px] text-slate-600 max-w-md mx-auto">
                Thank you for reaching out. We have received your inquiry and our team will get back to you at{" "}
                <strong className="text-slate-900">{email}</strong> within 24 hours.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage("");
                  }}
                  className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-[13px] font-medium hover:bg-slate-100 transition-colors"
                >
                  Send another message
                </button>
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-[13px] font-medium hover:bg-slate-800 transition-colors"
                >
                  Return to Blog
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-[13px] font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[13px] font-medium text-slate-700 mb-1">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-[13px] font-medium text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="How can we help your team?"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                {error && <p className="text-[13px] text-rose-600 font-medium">{error}</p>}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0F172A] hover:bg-black text-white text-[14px] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          )}

          {/* Direct channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <a
              href="mailto:support@beyondui.design"
              className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[12px] text-slate-500">Email directly</p>
                <p className="text-[14px] font-semibold text-slate-800">support@beyondui.design</p>
              </div>
            </a>

            <a
              href="https://www.figma.com/@beyondui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[12px] text-slate-500">Figma Community</p>
                <p className="text-[14px] font-semibold text-slate-800">@beyondui</p>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
