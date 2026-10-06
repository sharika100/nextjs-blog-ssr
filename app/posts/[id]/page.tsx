import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getTagStyle } from "@/lib/utils";
import { getPostById, getPosts } from "@/lib/api";
import PostActions from "@/components/PostActions";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

// Dynamic SEO Metadata generation
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return {
      title: "Post Not Found — Beyond UI",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${post.title} — Beyond UI Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  // Fetch related posts
  const allPosts = await getPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex-1 py-10 sm:py-14">
        <article className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs and back navigation */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-500 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all articles</span>
            </Link>

            <PostActions
              postId={post.id}
              postTitle={post.title}
              postExcerpt={post.excerpt}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-[12px] font-medium tracking-tight ${getTagStyle(
                  tag
                )}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.2] mb-5">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-[17px] sm:text-[19px] text-slate-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author and Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#0F172A]">
                  {post.author.name}
                </p>
                <p className="text-[12px] text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[13px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 mb-12 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none space-y-6 text-[16px] text-slate-700 leading-[1.8]">
            <p className="text-[18px] leading-[1.8] text-slate-800 font-medium">
              Effective user interfaces bridge human psychology and system logic. When interfaces are designed with rigor and empathy, users complete complex operations effortlessly.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 tracking-tight">
              1. Modular Component Tokens
            </h2>
            <p>
              By establishing standardized design tokens for spacing, typography, and color scales, you eliminate guesswork across distributed teams. Consistency isn&apos;t just aesthetic; it reduces cognitive friction and speeds up task execution.
            </p>

            {/* Callout Box */}
            <div className="my-8 p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
              <p className="text-[15px] font-medium text-slate-800 italic">
                &ldquo;Good design is obvious. Great design is transparent. When an interface works flawlessly, the user notices only their own productivity.&rdquo;
              </p>
              <span className="block mt-2 text-[13px] font-semibold text-slate-500">
                — Jennifer Taylor, Design Systems Lead
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 tracking-tight">
              2. Responsive Grid Systems & Proportions
            </h2>
            <p>
              Fluid layouts require strict constraints to avoid visual sprawl on wide viewports. Standardizing max content widths (such as 1240px) paired with 8px-increment vertical rhythms guarantees natural balance from 375px mobile screens up to 4K displays.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4 tracking-tight">
              3. Accessibility as a First-Class Requirement
            </h2>
            <p>
              Accessibility should never be an afterthought bolted on prior to shipping. Contrast ratios of at least 4.5:1 for body copy and clear keyboard navigation outlines are non-negotiable standards for modern digital products.
            </p>
          </div>

          {/* Author Bio Box */}
          <div className="mt-14 p-6 sm:p-8 bg-[#F8FAFC] border border-slate-100 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-[17px] font-bold text-[#0F172A] mb-1">
                Written by {post.author.name}
              </h3>
              <p className="text-[13px] text-slate-500 mb-3">
                {post.author.role} • {post.author.location}
              </p>
              <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                {post.author.bio}
              </p>
              <a
                href={post.author.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-[13px] font-medium text-slate-700 hover:bg-slate-50 shadow-sm transition-colors"
              >
                <span>Find me on Figma Community</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
