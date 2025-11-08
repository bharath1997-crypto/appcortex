// components/home/SearchPreview.tsx
"use client";

import { useState } from "react";
import { Section, Card } from "@/components/ui";
import Link from "next/link";

const popularSearches = [
  { query: "ChatGPT", category: "AI Tools" },
  { query: "Candy Crush", category: "Games" },
  { query: "Spotify", category: "Music" },
  { query: "Instagram", category: "Social" },
  { query: "TikTok", category: "Entertainment" },
];

const mockResults = [
  { id: "chatgpt", name: "ChatGPT", developer: "OpenAI", category: "AI Tools", rating: 4.8 },
  { id: "chat-ai-assistant", name: "Chat AI Assistant", developer: "TechCorp", category: "AI Tools", rating: 4.5 },
  { id: "ai-chatbot", name: "AI Chatbot Pro", developer: "BotLabs", category: "AI Tools", rating: 4.3 },
];

export function SearchPreview() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleFocus = () => {
    setShowResults(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/explore?q=${encodeURIComponent(query)}`;
    }
  };

  const handlePopularClick = (searchQuery: string) => {
    setQuery(searchQuery);
    setShowResults(true);
  };

  return (
    <Section
      title="App Search Preview"
      description="Try searching for any app or developer - explore the full database"
    >
      <Card className="p-6 md:p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={handleFocus}
              placeholder="Search an app or developer... (e.g., 'ChatGPT', 'Spotify')"
              className="w-full rounded-full bg-slate-800/60 border border-slate-700 pl-12 pr-4 py-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
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
          </div>

          {/* Live Results Dropdown */}
          {showResults && query.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl overflow-hidden z-10">
              <div className="p-2">
                {mockResults.map((result) => (
                  <Link
                    key={result.id}
                    href={`/app/${result.id}`}
                    className="flex items-center gap-3 p-3 hover:bg-slate-700/50 rounded-xl transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-semibold text-slate-200">
                      {result.name.slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-100">{result.name}</div>
                      <div className="text-xs text-slate-400">{result.developer} · {result.category}</div>
                    </div>
                    <div className="text-xs text-amber-400">⭐ {result.rating}</div>
                  </Link>
                ))}
              </div>
              <div className="border-t border-slate-700 p-3 bg-slate-800/50">
                <button
                  type="submit"
                  className="w-full text-center text-sm text-cyan-400 hover:text-cyan-300"
                >
                  View all results for &quot;{query}&quot; →
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Popular Searches */}
        <div className="mt-6">
          <p className="text-xs text-slate-400 mb-3">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((item) => (
              <button
                key={item.query}
                onClick={() => handlePopularClick(item.query)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 text-xs text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              >
                <span>{item.query}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-500">{item.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Note */}
        <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
          <p className="text-xs text-slate-300">
            💡 <span className="font-semibold">Pro Tip:</span> Sign in for full analytics including review sentiment, competitor graphs, and regional performance breakdown.
          </p>
        </div>
      </Card>
    </Section>
  );
}

