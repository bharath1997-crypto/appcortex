// components/explore/TrendingKeywords.tsx
"use client";

import Link from "next/link";

const trendingKeywords = [
  { keyword: "ai chat", icon: "🔥", count: "2.1K" },
  { keyword: "loan app", icon: "💼", count: "1.8K" },
  { keyword: "stock trading", icon: "📈", count: "1.5K" },
  { keyword: "mobile games", icon: "🎮", count: "3.2K" },
  { keyword: "fitness tracker", icon: "💪", count: "1.2K" },
  { keyword: "photo editor", icon: "📸", count: "980" },
];

export function TrendingKeywords() {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex-shrink-0">
        Trending:
      </span>
      {trendingKeywords.map((item) => (
        <Link
          key={item.keyword}
          href={`/explore?q=${encodeURIComponent(item.keyword)}`}
          className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 hover:border-cyan-500/50 transition-colors group"
        >
          <span className="text-base">{item.icon}</span>
          <span className="text-xs text-slate-300 group-hover:text-cyan-400">
            {item.keyword}
          </span>
          <span className="text-[10px] text-slate-500">
            {item.count}
          </span>
        </Link>
      ))}
    </div>
  );
}

