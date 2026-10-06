"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  onSelectTag?: (tag: string) => void;
}

import { getTagStyle } from "@/lib/utils";
export { getTagStyle };

export default function BlogCard({ post, onSelectTag }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white transition-all">
      {/* Featured Image Link */}
      <Link
        href={`/posts/${post.id}`}
        className="block relative aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-slate-100 mb-3.5 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        aria-label={`Read article: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={post.id === "1" || post.id === "2"}
        />
      </Link>

      {/* Tags (Interactive Filter or Link) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
        {post.tags.map((tag) =>
          onSelectTag ? (
            <button
              key={tag}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectTag(tag);
              }}
              title={`Filter by tag: ${tag}`}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-tight transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 ${getTagStyle(
                tag
              )}`}
            >
              {tag}
            </button>
          ) : (
            <Link
              key={tag}
              href={`/?tag=${encodeURIComponent(tag)}`}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-tight transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 ${getTagStyle(
                tag
              )}`}
            >
              {tag}
            </Link>
          )
        )}
      </div>

      {/* Post Title */}
      <h2 className="text-[18px] sm:text-[19px] font-bold text-[#0F172A] leading-[1.3] mb-2 tracking-[-0.01em] group-hover:text-blue-600 transition-colors">
        <Link
          href={`/posts/${post.id}`}
          className="focus:outline-none focus:underline"
        >
          {post.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 mb-3.5 flex-grow">
        {post.excerpt}
      </p>

      {/* Metadata / Author */}
      <div className="flex items-center gap-2 pt-1 mt-auto">
        <Link
          href={`/posts/${post.id}`}
          className="flex items-center gap-2 group/author focus:outline-none"
        >
          <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
          <span className="text-[12px] font-medium text-slate-700 group-hover/author:text-slate-900">
            {post.author.name}
          </span>
        </Link>
        <span className="text-slate-300 text-[11px]">•</span>
        <span className="text-[12px] text-slate-400">{post.readTime}</span>
      </div>
    </article>
  );
}
