"use client";

import React, { useState, useSyncExternalStore } from "react";
import { Share2, Bookmark, Check } from "lucide-react";

interface PostActionsProps {
  postId: string;
  postTitle: string;
  postExcerpt: string;
}

function subscribeBookmarks(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getBookmarkSnapshot(postId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const saved = localStorage.getItem("beyond_blog_bookmarks");
    if (!saved) return false;
    const ids: string[] = JSON.parse(saved);
    return ids.includes(postId);
  } catch {
    return false;
  }
}

export default function PostActions({
  postId,
  postTitle,
  postExcerpt,
}: PostActionsProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize bookmark state reactively with browser storage
  const isBookmarked = useSyncExternalStore(
    subscribeBookmarks,
    () => getBookmarkSnapshot(postId),
    () => false
  );

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("beyond_blog_bookmarks");
      let ids: string[] = saved ? JSON.parse(saved) : [];
      if (ids.includes(postId)) {
        ids = ids.filter((id) => id !== postId);
        showToast("Removed from bookmarks");
      } else {
        ids.push(postId);
        showToast("Article saved to bookmarks!");
      }
      localStorage.setItem("beyond_blog_bookmarks", JSON.stringify(ids));
      // Dispatch storage event to notify subscribers
      window.dispatchEvent(new Event("storage"));
    } catch {
      showToast("Could not update bookmark");
    }
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: postTitle,
          text: postExcerpt,
          url,
        });
        showToast("Shared successfully!");
        return;
      } catch (err: unknown) {
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    // Fallback: copy to clipboard
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        showToast("Link copied to clipboard!");
      } else {
        showToast("Link: " + url);
      }
    } catch {
      showToast("Could not copy link");
    }
  };

  return (
    <div className="relative flex items-center gap-2 text-slate-400">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="absolute right-0 -top-11 z-50 whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[12px] font-medium shadow-lg flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Bookmark Button */}
      <button
        type="button"
        onClick={toggleBookmark}
        className={`p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 ${
          isBookmarked
            ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
            : "hover:bg-slate-100 hover:text-slate-700 text-slate-400"
        }`}
        title={isBookmarked ? "Remove from bookmarks" : "Save article"}
        aria-label={isBookmarked ? "Remove from bookmarks" : "Save article"}
      >
        <Bookmark
          className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
        />
      </button>

      {/* Share Button */}
      <button
        type="button"
        onClick={handleShare}
        className="p-2 rounded-full hover:bg-slate-100 hover:text-slate-700 transition-colors text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
        title="Share article"
        aria-label="Share article"
      >
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  );
}
