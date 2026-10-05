"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search articles by title, topic, or keyword...",
}: SearchBarProps) {
  return (
    <div className="w-full max-w-[560px] mx-auto px-4 mb-8 sm:mb-10">
      <div className="relative flex items-center w-full h-[50px] bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-900/5">
        <div className="pl-4 pr-2 text-slate-400 pointer-events-none">
          <Search className="w-[18px] h-[18px]" aria-hidden="true" />
        </div>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search blog posts"
          className="w-full h-full pr-10 text-[14px] text-slate-900 placeholder:text-slate-400 bg-transparent rounded-xl focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
