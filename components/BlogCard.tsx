import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

// Function to map tag names to specific color styles matching the Dribbble design
export function getTagStyle(tag: string): string {
  const lower = tag.toLowerCase();
  if (lower.includes("design")) {
    return "bg-[#E0F2FE] text-[#0284C7]"; // Light blue
  }
  if (lower.includes("management")) {
    return "bg-[#F3E8FF] text-[#7E22CE]"; // Light purple
  }
  if (lower.includes("web") || lower.includes("dev") || lower.includes("front")) {
    return "bg-[#DCFCE7] text-[#15803D]"; // Light green
  }
  if (lower.includes("research") || lower.includes("ux")) {
    return "bg-[#FEF3C7] text-[#B45309]"; // Light amber
  }
  if (lower.includes("qa") || lower.includes("engineering")) {
    return "bg-[#FEE2E2] text-[#B91C1C]"; // Light rose
  }
  return "bg-slate-100 text-slate-700";
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white transition-all">
      {/* Featured Image */}
      <Link
        href={`/posts/${post.id}`}
        className="block relative aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-slate-100 mb-3.5"
        tabIndex={-1}
        aria-hidden="true"
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

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-tight ${getTagStyle(
              tag
            )}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Post Title */}
      <h2 className="text-[18px] sm:text-[19px] font-bold text-[#0F172A] leading-[1.3] mb-2 tracking-[-0.01em] group-hover:text-blue-600 transition-colors">
        <Link href={`/posts/${post.id}`} className="focus:outline-none focus:underline">
          {post.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 mb-3.5 flex-grow">
        {post.excerpt}
      </p>

      {/* Metadata / Author */}
      <div className="flex items-center gap-2 pt-1 mt-auto">
        <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            fill
            sizes="24px"
            className="object-cover"
          />
        </div>
        <span className="text-[12px] font-medium text-slate-700">
          {post.author.name}
        </span>
        <span className="text-slate-300 text-[11px]">•</span>
        <span className="text-[12px] text-slate-400">{post.readTime}</span>
      </div>
    </article>
  );
}
