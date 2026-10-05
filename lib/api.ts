import { BlogPost } from "./types";
import { INITIAL_POSTS } from "./data";

export interface FetchPostsParams {
  search?: string;
  tag?: string;
  category?: string;
}

/**
 * Fetch all posts with optional filtering.
 * Works seamlessly both server-side (SSR) and client-side.
 */
export async function getPosts(params: FetchPostsParams = {}): Promise<BlogPost[]> {
  const { search = "", tag = "", category = "" } = params;

  // If executing in a browser environment, fetch via internal API endpoint or external mock API
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

  // Server-side (SSR): directly process dataset with identical filtering logic
  let filtered = [...INITIAL_POSTS];

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

  const post = INITIAL_POSTS.find((p) => p.id === id || p.slug === id);
  return post || null;
}
