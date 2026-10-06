import { NextRequest, NextResponse } from "next/server";
import { fetchRawPostsFromMockApi } from "@/lib/api";
import { BlogPost } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.toLowerCase().trim() || "";
    const tag = searchParams.get("tag")?.trim() || "";
    const category = searchParams.get("category")?.trim() || "";

    const rawPosts = await fetchRawPostsFromMockApi();
    let filtered: BlogPost[] = [...rawPosts];

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
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(search) ||
          post.excerpt.toLowerCase().includes(search) ||
          post.content.toLowerCase().includes(search) ||
          post.tags.some((t) => t.toLowerCase().includes(search)) ||
          post.author.name.toLowerCase().includes(search)
      );
    }

    return NextResponse.json({
      posts: filtered,
      total: filtered.length,
    });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
