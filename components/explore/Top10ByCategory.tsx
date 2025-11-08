// components/explore/Top10ByCategory.tsx
"use client";

import { useState } from "react";
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const categories = ["AI Tools", "Games", "Finance", "Health", "Education"];

const appsByCategory = {
  "AI Tools": [
    { rank: 1, name: "ChatGPT", rating: 4.6, downloads: "100M+", change: 3.5 },
    { rank: 2, name: "Bing AI", rating: 4.3, downloads: "50M+", change: 1.8 },
    { rank: 3, name: "Nova AI", rating: 4.5, downloads: "25M+", change: 5.1 },
    { rank: 4, name: "AI Mirror", rating: 4.7, downloads: "10M+", change: 18.4 },
    { rank: 5, name: "Perplexity", rating: 4.4, downloads: "5M+", change: 7.2 },
  ],
  Games: [
    { rank: 1, name: "Clash Royale", rating: 4.5, downloads: "500M+", change: 2.1 },
    { rank: 2, name: "Candy Crush", rating: 4.4, downloads: "1B+", change: -0.8 },
    { rank: 3, name: "PUBG Mobile", rating: 4.3, downloads: "1B+", change: 1.2 },
    { rank: 4, name: "Roblox", rating: 4.6, downloads: "500M+", change: 4.3 },
    { rank: 5, name: "Minecraft", rating: 4.5, downloads: "100M+", change: 0.9 },
  ],
  Finance: [
    { rank: 1, name: "PayPal", rating: 4.5, downloads: "500M+", change: 1.5 },
    { rank: 2, name: "Cash App", rating: 4.8, downloads: "100M+", change: 3.2 },
    { rank: 3, name: "Revolut", rating: 4.6, downloads: "50M+", change: 4.9 },
    { rank: 4, name: "Robinhood", rating: 4.3, downloads: "50M+", change: 2.8 },
    { rank: 5, name: "Coinbase", rating: 4.4, downloads: "25M+", change: -1.2 },
  ],
  Health: [
    { rank: 1, name: "Calm", rating: 4.5, downloads: "50M+", change: 2.7 },
    { rank: 2, name: "Headspace", rating: 4.4, downloads: "50M+", change: 1.9 },
    { rank: 3, name: "MyFitnessPal", rating: 4.6, downloads: "100M+", change: 0.8 },
    { rank: 4, name: "Fitbit", rating: 4.3, downloads: "50M+", change: -2.1 },
    { rank: 5, name: "FitAI Coach", rating: 4.7, downloads: "10M+", change: 12.7 },
  ],
  Education: [
    { rank: 1, name: "Duolingo", rating: 4.7, downloads: "500M+", change: 3.4 },
    { rank: 2, name: "Khan Academy", rating: 4.6, downloads: "50M+", change: 2.1 },
    { rank: 3, name: "Photomath", rating: 4.5, downloads: "100M+", change: 1.8 },
    { rank: 4, name: "Coursera", rating: 4.6, downloads: "50M+", change: 2.9 },
    { rank: 5, name: "StudyMate GPT", rating: 4.6, downloads: "5M+", change: 9.2 },
  ],
};

export function Top10ByCategory() {
  const [activeCategory, setActiveCategory] = useState<string>("AI Tools");

  const apps = appsByCategory[activeCategory as keyof typeof appsByCategory];

  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        Top 10 Apps by Category
      </h2>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? "bg-cyan-500 text-slate-900"
                : "bg-slate-800/60 text-slate-300 hover:text-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Leaderboard */}
      <Card className="p-4 md:p-5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="text-left py-2 pr-4 w-12">Rank</th>
                <th className="text-left py-2 pr-4">App</th>
                <th className="text-right py-2 pr-4">Rating</th>
                <th className="text-right py-2 pr-4">Downloads</th>
                <th className="text-right py-2">7D Change</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => {
                const isUp = app.change >= 0;
                return (
                  <tr
                    key={app.rank}
                    className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs font-semibold text-slate-300">
                        {app.rank}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <Link
                        href={`/app/${app.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-slate-100 hover:text-cyan-400 font-medium"
                      >
                        {app.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <span className="text-amber-300">
                        ⭐ {app.rating.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-right text-slate-300">
                      {app.downloads}
                    </td>
                    <td className="py-3 text-right">
                      <span
                        className={`font-semibold ${
                          isUp ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {isUp ? "+" : ""}
                        {app.change.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="text-center">
        <Link
          href={`/top-charts/category/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          See All →
        </Link>
      </div>
    </section>
  );
}

