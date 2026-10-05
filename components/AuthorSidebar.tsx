"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_AUTHOR, POPULAR_TAGS } from "@/lib/data";
import { BlogPost } from "@/lib/types";

interface AuthorSidebarProps {
  featuredPosts: BlogPost[];
  selectedTag?: string;
  onSelectTag?: (tag: string) => void;
}

export default function AuthorSidebar({
  featuredPosts,
  selectedTag = "",
  onSelectTag,
}: AuthorSidebarProps) {
  return (
    <aside className="w-full space-y-7" aria-label="Sidebar">
      {/* About Author Card */}
      <div className="bg-[#F8FAFC] border border-slate-100/90 rounded-[18px] p-5 sm:p-6">
        <h3 className="text-[13px] font-semibold text-[#0F172A] mb-3.5">
          About author
        </h3>

        <div className="flex items-center gap-3 mb-2.5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
            <Image
              src={DEFAULT_AUTHOR.avatar}
              alt={DEFAULT_AUTHOR.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-[#0F172A]">
              {DEFAULT_AUTHOR.name}
            </h4>
          </div>
        </div>

        <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4">
          {DEFAULT_AUTHOR.bio}
        </p>

        <a
          href={DEFAULT_AUTHOR.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3.5 bg-white border border-slate-200/90 rounded-xl text-[12.5px] font-medium text-slate-700 flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 38 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
              fill="#1ABCFE"
            />
            <path
              d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
              fill="#0ACF83"
            />
            <path
              d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
              fill="#FF7262"
            />
            <path
              d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
              fill="#F24E1E"
            />
            <path
              d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
              fill="#A259FF"
            />
          </svg>
          <span>Find me on Figma Community</span>
        </a>
      </div>

      {/* Popular Tags */}
      <div>
        <h3 className="text-[15px] font-bold text-[#0F172A] mb-3">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map((tag) => {
            const isSelected = selectedTag.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTag?.(isSelected ? "" : tag)}
                className={`px-3 py-1 rounded-full text-[12px] font-medium transition-all ${
                  isSelected
                    ? "bg-[#0F172A] text-white shadow-sm"
                    : "bg-[#E0F2FE]/70 text-[#0284C7] hover:bg-[#E0F2FE]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Posts */}
      <div>
        <h3 className="text-[15px] font-bold text-[#0F172A] mb-3">
          Featured Posts
        </h3>
        <div className="space-y-1">
          {featuredPosts.slice(0, 4).map((post) => (
            <div
              key={post.id}
              className="border-b border-slate-100 py-3 first:pt-0 last:border-none last:pb-0"
            >
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E0F2FE] text-[#0284C7] mb-1.5">
                Design
              </span>
              <h4 className="text-[13.5px] font-medium text-[#0F172A] hover:text-blue-600 leading-snug transition-colors">
                <Link href={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
