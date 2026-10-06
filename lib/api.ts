import { BlogPost } from "./types";
import { INITIAL_POSTS } from "./data";

export interface FetchPostsParams {
  search?: string;
  tag?: string;
  category?: string;
}

/**
 * Configurable external Mock API URL.
 * Supports:
 * - MockAPI.io (e.g., https://66e138a0c831c8811b54a46a.mockapi.io/api/v1/posts)
 * - Public raw GitHub endpoint for this repository
 * - Local / custom mock servers via MOCK_API_URL or NEXT_PUBLIC_MOCK_API_URL
 */
const EXTERNAL_MOCK_API_URL =
  process.env.MOCK_API_URL ||
  process.env.NEXT_PUBLIC_MOCK_API_URL ||
  "https://raw.githubusercontent.com/sharika100/nextjs-blog-ssr/main/public/api/posts.json";

/**
 * Fetches raw posts from the external Mock API with timeout and fallback.
 */
export async function fetchRawPostsFromMockApi(): Promise<BlogPost[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(EXTERNAL_MOCK_API_URL, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const items = Array.isArray(data) ? data : data.posts || [];
      if (items.length > 0) {
        return items.map((item: Partial<BlogPost> & { id: string | number; title?: string }) => ({
          id: String(item.id),
          title: item.title || "Untitled Article",
          slug: item.slug || `post-${item.id}`,
          excerpt: item.excerpt || "",
          content: item.content || "",
          image: item.image || "/images/post-1.jpg",
          author: item.author || INITIAL_POSTS[0].author,
          tags: Array.isArray(item.tags) ? item.tags : ["Design"],
          category: item.category || "Design",
          date: item.date || "May 12, 2026",
          readTime: item.readTime || "5 min read",
          featured: Boolean(item.featured),
        }));
      }
    }
  } catch {
    // External API unavailable or timed out; fall back to calibrated seeded data
  }

  return INITIAL_POSTS;
}

/**
 * Fetch all posts with optional filtering.
 * Works seamlessly both server-side (SSR) and client-side (TanStack Query).
 */
export async function getPosts(params: FetchPostsParams = {}): Promise<BlogPost[]> {
  const { search = "", tag = "", category = "" } = params;

  // Client-side execution (TanStack Query): fetch via internal API route
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams();
    if (search) searchParams.set("search", search);
    if (tag) searchParams.set("tag", tag);
    if (category) searchParams.set("category", category);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const res = await fetch(`${baseUrl}/api/posts?${searchParams.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }
    const data = await res.json();
    return data.posts;
  }

  // Server-side execution (SSR): fetch from the mock API and filter
  const basePosts = await fetchRawPostsFromMockApi();
  let filtered = [...basePosts];

  if (category && category !== "All Posts") {
    filtered = filtered.filter(
      (post) =>
        post.category.toLowerCase() === category.toLowerCase() ||
        post.tags.some((t) => t.toLowerCase() === category.toLowerCase())
    );
  }

  if (tag) {
    filtered = filtered.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.name.toLowerCase().includes(q)
    );
  }

  return filtered;
}

/**
 * Fetch an individual post by ID or slug.
 */
export async function getPostById(id: string): Promise<BlogPost | null> {
  if (typeof window !== "undefined") {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const res = await fetch(`${baseUrl}/api/posts/${encodeURIComponent(id)}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Failed to fetch post: ${res.statusText}`);
    return await res.json();
  }

  const posts = await fetchRawPostsFromMockApi();
  const post = posts.find((p) => p.id === id || p.slug === id);
  return post || null;
}
