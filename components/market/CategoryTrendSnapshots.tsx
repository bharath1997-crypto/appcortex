// components/market/CategoryTrendSnapshots.tsx
"use client";

import { Card, Badge } from "@/components/ui";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    id: "ai-tools",
    name: "AI Tools",
    growth: 14.2,
    appsCount: 3221,
    topApp: "AI Mirror",
    sentiment: "Positive",
    emoji: "😊",
    icon: "🤖",
  },
  {
    id: "games",
    name: "Games",
    growth: 8.1,
    appsCount: 18720,
    topApp: "Clash Royale",
    sentiment: "Stable",
    emoji: "😐",
    icon: "🎮",
  },
  {
    id: "finance",
    name: "Finance",
    growth: 4.9,
    appsCount: 3200,
    topApp: "Revolut",
    sentiment: "Mixed",
    emoji: "😶",
    icon: "💰",
  },
  {
    id: "health",
    name: "Health",
    growth: -3.1,
    appsCount: 2100,
    topApp: "FitAI Coach",
    sentiment: "Negative",
    emoji: "😞",
    icon: "🏥",
  },
  {
    id: "travel",
    name: "Travel",
    growth: 1.8,
    appsCount: 1450,
    topApp: "TripAI",
    sentiment: "Rising",
    emoji: "😎",
    icon: "✈️",
  },
];

export function CategoryTrendSnapshots() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Category Trend Snapshots
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-slate-100 hover:bg-slate-700/60 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-slate-100 hover:bg-slate-700/60 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => {
          const isUp = cat.growth >= 0;
          return (
            <Link key={cat.id} href={`/category/${cat.id}`} className="flex-shrink-0 w-[280px]">
              <Card hover className="p-5 bg-gradient-to-br from-slate-900/80 to-slate-900/40 h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      isUp ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    }`}
                  >
                    {isUp ? "+" : ""}
                    {cat.growth.toFixed(1)}%
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-50 mb-2">{cat.name}</h3>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400"># Apps:</span>
                    <span className="text-slate-200 font-medium">
                      {cat.appsCount.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Top App:</span>
                    <span className="text-slate-200 font-medium">{cat.topApp}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Sentiment:</span>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-200 font-medium">{cat.sentiment}</span>
                      <span className="text-lg">{cat.emoji}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

