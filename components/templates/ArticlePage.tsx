// components/templates/ArticlePage.tsx
import React from "react";
import { Badge } from "@/components/ui";

interface ArticlePageProps {
  title: string;
  tag?: string;
  date?: string;
  author?: string;
  readingTime?: string;
  children: React.ReactNode;
}

export function ArticlePage({
  title,
  tag,
  date,
  author,
  readingTime,
  children,
}: ArticlePageProps) {
  return (
    <div className="animate-fade-up pb-10">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 space-y-4">
          {tag && (
            <Badge variant="cyan">
              {tag}
            </Badge>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50 leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            {author && <span>By {author}</span>}
            {date && <span>· {date}</span>}
            {readingTime && <span>· {readingTime} min read</span>}
          </div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none
          prose-headings:text-slate-50 prose-headings:font-semibold
          prose-p:text-slate-300 prose-p:leading-relaxed
          prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
          prose-strong:text-slate-100 prose-strong:font-semibold
          prose-code:text-cyan-400 prose-code:bg-slate-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800
          prose-ul:text-slate-300 prose-ol:text-slate-300
          prose-li:text-slate-300
          prose-blockquote:border-l-cyan-500 prose-blockquote:text-slate-300
          prose-img:rounded-xl prose-img:border prose-img:border-slate-800
          prose-hr:border-slate-800">
          {children}
        </div>
      </article>
    </div>
  );
}

