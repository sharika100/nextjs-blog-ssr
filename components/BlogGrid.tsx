"use client";

import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@/lib/types";
import { getPosts } from "@/lib/api";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "./BlogCard";
import AuthorSidebar from "./AuthorSidebar";
import { X, SlidersHorizontal } from "lucide-react";

interface BlogGridProps {
  initialPosts: BlogPost[];
}

export default function BlogGrid({ initialPosts }: BlogGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [selectedTag, setSelectedTag] = useState("");

  // TanStack React Query with SSR initialData
  const { data: posts = initialPosts, isLoading } = useQuery({
    queryKey: ["posts", search, selectedCategory, selectedTag],
    queryFn: () =>
      getPosts({
        search,
        category: selectedCategory,
        tag: selectedTag,
      }),
    initialData:
      search === "" && selectedCategory === "All Posts" && selectedTag === ""
        ? initialPosts
        : undefined,
  });

  const featuredPosts = useMemo(
    () => initialPosts.filter((p) => p.featured),
    [initialPosts]
  );

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedCategory !== "All Posts" ||
    selectedTag !== "";

  const clearAllFilters = () => {
    setSearch("");
    setSelectedCategory("All Posts");
    setSelectedTag("");
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Category Filter Pills */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          // If category changed, reset tag if conflicting
          setSelectedTag("");
        }}
      />

      {/* Active Filter Badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-8 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[13px] text-slate-400 font-medium flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters:
          </span>

          {search && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] bg-slate-100 text-slate-800 font-medium">
              Query: &quot;{search}&quot;
              <button
                type="button"
                onClick={() => setSearch("")}
                className="hover:text-red-600 focus:outline-none"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {selectedCategory !== "All Posts" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] bg-blue-50 text-blue-700 font-medium">
              Category: {selectedCategory}
              <button
                type="button"
                onClick={() => setSelectedCategory("All Posts")}
                className="hover:text-red-600 focus:outline-none"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {selectedTag && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] bg-purple-50 text-purple-700 font-medium">
              Tag: {selectedTag}
              <button
                type="button"
                onClick={() => setSelectedTag("")}
                className="hover:text-red-600 focus:outline-none"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={clearAllFilters}
            className="text-[12px] text-slate-500 hover:text-slate-900 underline font-medium ml-2"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Main Content Layout: 2 Columns (Posts Grid) + Sidebar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Left Column: Posts Grid (8 cols on lg) */}
          <section className="lg:col-span-8" aria-label="Articles list">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 animate-pulse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <div className="aspect-[4/3] bg-slate-100 rounded-[16px] w-full" />
                    <div className="h-4 bg-slate-100 rounded w-1/3" />
                    <div className="h-6 bg-slate-100 rounded w-4/5" />
                    <div className="h-4 bg-slate-100 rounded w-full" />
                  </div>
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onSelectTag={(tag) => setSelectedTag(tag)}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="text-center py-16 px-6 bg-slate-50/60 rounded-2xl border border-dashed border-slate-200">
                <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400 mb-3">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-800 mb-1">
                  No articles found
                </h3>
                <p className="text-[14px] text-slate-500 max-w-sm mx-auto mb-5">
                  We couldn&apos;t find any posts matching your criteria. Try adjusting your search query or selecting a different category.
                </p>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-4 py-2 rounded-full bg-[#0F172A] text-white text-[13px] font-medium hover:bg-black transition-all"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </section>

          {/* Right Column: Author Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4">
            <AuthorSidebar
              featuredPosts={featuredPosts}
              selectedTag={selectedTag}
              onSelectTag={(tag) => setSelectedTag(tag)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
