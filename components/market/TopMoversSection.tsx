// components/market/TopMoversSection.tsx
"use client";

import { useState } from "react";
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const topRising = [
  { id: 1, name: "AI Mirror", category: "AI Tools", change: 18.4, downloads: "1.2M" },
  { id: 2, name: "FitAI Coach", category: "Health", change: 12.7, downloads: "920K" },
  { id: 3, name: "Loop Finance", category: "Fintech", change: 10.5, downloads: "640K" },
  { id: 4, name: "Study Master", category: "Education", change: 9.2, downloads: "580K" },
  { id: 5, name: "PhotoGen AI", category: "Photography", change: 8.1, downloads: "450K" },
];

const topDeclining = [
  { id: 1, name: "PhotoLab", category: "Design", change: -9.2, downloads: "520K" },
  { id: 2, name: "Candy Crash", category: "Games", change: -5.8, downloads: "2.1M" },
  { id: 3, name: "FitnessPro", category: "Health", change: -4.3, downloads: "680K" },
  { id: 4, name: "Music Mixer", category: "Music", change: -3.7, downloads: "420K" },
  { id: 5, name: "Travel Planner", category: "Travel", change: -2.9, downloads: "310K" },
];

export function TopMoversSection() {
  const [activeTab, setActiveTab] = useState<"rising" | "declining">("rising");

  const data = activeTab === "rising" ? topRising : topDeclining;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Top Movers
        </h2>
        <div className="text-xs text-slate-400">
          Updates every 45 minutes
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("rising")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "rising"
              ? "bg-emerald-500 text-slate-900"
              : "bg-slate-800/60 text-slate-300 hover:text-slate-100"
          }`}
        >
          📈 Top Rising
        </button>
        <button
          onClick={() => setActiveTab("declining")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "declining"
              ? "bg-rose-500 text-slate-900"
              : "bg-slate-800/60 text-slate-300 hover:text-slate-100"
          }`}
        >
          📉 Top Declining
        </button>
      </div>

      {/* Table */}
      <Card className="p-4 md:p-5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="text-left py-2 pr-4">#</th>
                <th className="text-left py-2 pr-4">App</th>
                <th className="text-left py-2 pr-4">Category</th>
                <th className="text-right py-2 pr-4">Change</th>
                <th className="text-right py-2">Downloads</th>
              </tr>
            </thead>
            <tbody>
              {data.map((app, index) => {
                const isUp = app.change >= 0;
                return (
                  <tr
                    key={app.id}
                    className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-3 pr-4 text-slate-500">
                      {index + 1}
                    </td>
                    <td className="py-3 pr-4">
                      <Link
                        href={`/app/${app.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-slate-100 hover:text-cyan-400 font-medium"
                      >
                        {app.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">
                      <Badge variant="cyan" className="text-[9px]">
                        {app.category}
                      </Badge>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <span
                        className={`font-semibold ${
                          isUp ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {isUp ? "+" : ""}
                        {app.change.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-right text-slate-300">
                      {app.downloads}
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
          href="/market/top-movers"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Full 30-Day Trend →
        </Link>
      </div>
    </section>
  );
}

