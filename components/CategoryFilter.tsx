"use client";

import React from "react";
import { CATEGORIES } from "@/lib/data";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 overflow-x-auto flex items-center gap-2 pb-2 scrollbar-none mb-8 sm:mb-10 justify-start sm:justify-center">
      {CATEGORIES.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] transition-all font-medium focus:outline-none focus:ring-2 focus:ring-slate-300 ${
              isActive
                ? "bg-[#0F172A] text-white shadow-sm"
                : "bg-slate-100/80 hover:bg-slate-200/80 text-slate-600"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
