// components/insights/TopHeadlines.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const headlines = [
  {
    id: 1,
    title: "AI Tools Apps Surge 19% in 7 Days",
    summary: "Adoption fueled by image-to-video tools as creative professionals shift workflows.",
    tag: "AI Tools",
    color: "cyan" as const,
    slug: "ai-tools-growth-2025",
  },
  {
    id: 2,
    title: "Casual Games Decline for Second Week",
    summary: "Player fatigue and ad saturation lower engagement across hyper-casual genres.",
    tag: "Gaming",
    color: "rose" as const,
    slug: "casual-games-decline",
  },
  {
    id: 3,
    title: "Finance Apps Lead Global Retention",
    summary: "22% higher day-30 retention than 2024 average, driven by AI-powered features.",
    tag: "Fintech",
    color: "emerald" as const,
    slug: "finance-retention-2025",
  },
  {
    id: 4,
    title: "Health Apps See Mental Wellness Boom",
    summary: "New meditation and therapy apps dominate top charts in US, UK, and India.",
    tag: "Health",
    color: "amber" as const,
    slug: "health-mental-wellness",
  },
];

export function TopHeadlines() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const current = headlines[currentIndex];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Top Headlines
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Auto-updating</span>
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      {/* Main Featured Card */}
      <Link href={`/insights/${current.slug}`}>
        <Card hover className="p-6 md:p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 min-h-[200px] flex flex-col justify-between">
          <div>
            <Badge variant={current.color} className="mb-3">
              #{current.tag}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-3">
              {current.title}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {current.summary}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
            <span className="text-xs text-cyan-400">
              Read Full Analysis →
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Updated 2h ago</span>
            </div>
          </div>
        </Card>
      </Link>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2">
        {headlines.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-cyan-500"
                : "w-2 bg-slate-700 hover:bg-slate-600"
            }`}
            aria-label={`Go to headline ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {headlines.map((headline, index) => (
          <button
            key={headline.id}
            onClick={() => setCurrentIndex(index)}
            className={`p-3 rounded-lg border transition-all text-left ${
              index === currentIndex
                ? "border-cyan-500 bg-cyan-500/10"
                : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
            }`}
          >
            <div className="text-[10px] text-slate-400 mb-1">
              #{headline.tag}
            </div>
            <div className="text-xs font-medium text-slate-200 line-clamp-2">
              {headline.title}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

