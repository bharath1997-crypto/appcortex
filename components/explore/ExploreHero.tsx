// components/explore/ExploreHero.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quickFilters = [
  { label: "Top Free", query: "free" },
  { label: "Top Paid", query: "paid" },
  { label: "Top New", query: "new" },
  { label: "AI Tools", query: "ai" },
  { label: "Games", query: "games" },
  { label: "Finance", query: "finance" },
];

export function ExploreHero({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/explore?q=${encodeURIComponent(query)}`);
    }
  };

  const handleQuickFilter = (filterQuery: string) => {
    router.push(`/explore?q=${encodeURIComponent(filterQuery)}`);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80 p-8 md:p-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative space-y-6">
        {/* Headline */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
            Discover Every App. Every Developer. Every Market.
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
            Search millions of apps tracked by AppCortex — updated every hour
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by app name, developer, or category..."
              className="w-full rounded-full bg-slate-800/60 border border-slate-700 pl-12 pr-24 py-4 text-sm md:text-base text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-slate-700/50 transition-colors"
                title="Voice search"
              >
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-cyan-500 text-slate-900 font-medium hover:bg-cyan-400 transition-colors text-sm"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {quickFilters.map((filter) => (
            <button
              key={filter.query}
              onClick={() => handleQuickFilter(filter.query)}
              className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700 text-xs md:text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

