// components/developers/DeveloperLeaderboard.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";
import Link from "next/link";

const regions = ["Global", "USA", "India", "UAE", "Europe"] as const;

const leaderboards = {
  Global: [
    { rank: 1, developer: "Nova Studios", flag: "🇮🇳", apps: 5, installs: 20, topCategory: "AI Tools", slug: "nova-studios" },
    { rank: 2, developer: "Vortex Games", flag: "🇺🇸", apps: 12, installs: 42, topCategory: "Games", slug: "vortex-games" },
    { rank: 3, developer: "FitAI Labs", flag: "🇬🇧", apps: 3, installs: 5, topCategory: "Health", slug: "fitai-labs" },
    { rank: 4, developer: "Phoenix Dev", flag: "🇸🇬", apps: 7, installs: 15, topCategory: "Fintech", slug: "phoenix-dev" },
    { rank: 5, developer: "CodeCraft Studios", flag: "🇨🇦", apps: 4, installs: 8, topCategory: "Productivity", slug: "codecraft" },
  ],
  USA: [
    { rank: 1, developer: "Vortex Games", flag: "🇺🇸", apps: 12, installs: 42, topCategory: "Games", slug: "vortex-games" },
    { rank: 2, developer: "Silicon Valley Apps", flag: "🇺🇸", apps: 8, installs: 28, topCategory: "Social", slug: "sv-apps" },
    { rank: 3, developer: "West Coast Dev", flag: "🇺🇸", apps: 5, installs: 12, topCategory: "Finance", slug: "west-coast" },
  ],
  India: [
    { rank: 1, developer: "Nova Studios", flag: "🇮🇳", apps: 5, installs: 20, topCategory: "AI Tools", slug: "nova-studios" },
    { rank: 2, developer: "Bangalore Builders", flag: "🇮🇳", apps: 9, installs: 18, topCategory: "Education", slug: "blr-builders" },
    { rank: 3, developer: "Mumbai Tech", flag: "🇮🇳", apps: 6, installs: 11, topCategory: "Finance", slug: "mumbai-tech" },
  ],
  UAE: [
    { rank: 1, developer: "Dubai Dev Hub", flag: "🇦🇪", apps: 4, installs: 9, topCategory: "Shopping", slug: "dubai-dev" },
    { rank: 2, developer: "Gulf Apps", flag: "🇦🇪", apps: 3, installs: 6, topCategory: "Travel", slug: "gulf-apps" },
    { rank: 3, developer: "Emirates Studio", flag: "🇦🇪", apps: 2, installs: 4, topCategory: "Finance", slug: "emirates-studio" },
  ],
  Europe: [
    { rank: 1, developer: "FitAI Labs", flag: "🇬🇧", apps: 3, installs: 5, topCategory: "Health", slug: "fitai-labs" },
    { rank: 2, developer: "Nordic Dev", flag: "🇸🇪", apps: 6, installs: 14, topCategory: "Tools", slug: "nordic-dev" },
    { rank: 3, developer: "Berlin Builders", flag: "🇩🇪", apps: 5, installs: 10, topCategory: "Productivity", slug: "berlin-builders" },
  ],
};

export function DeveloperLeaderboard() {
  const [activeRegion, setActiveRegion] = useState<typeof regions[number]>("Global");

  const data = leaderboards[activeRegion];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Top Developers Leaderboard
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Updated daily · Based on total installs and app performance
          </p>
        </div>
        <Link
          href="/developers/leaderboard"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Full Rankings →
        </Link>
      </div>

      {/* Region Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeRegion === region
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "bg-slate-800/60 text-slate-300 hover:text-slate-100"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Leaderboard Table */}
      <Card className="p-4 md:p-5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="text-left py-3 pr-4 w-16">Rank</th>
                <th className="text-left py-3 pr-4">Developer</th>
                <th className="text-right py-3 pr-4">Apps</th>
                <th className="text-right py-3 pr-4">Installs</th>
                <th className="text-left py-3">Category</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dev) => (
                <tr
                  key={dev.slug}
                  className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      {dev.rank === 1 && <span className="text-xl">🥇</span>}
                      {dev.rank === 2 && <span className="text-xl">🥈</span>}
                      {dev.rank === 3 && <span className="text-xl">🥉</span>}
                      {dev.rank > 3 && <span className="text-slate-500">#{dev.rank}</span>}
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <Link
                      href={`/developer/${dev.slug}`}
                      className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                    >
                      <span className="text-lg">{dev.flag}</span>
                      <span className="font-medium text-slate-100">{dev.developer}</span>
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-right text-slate-300">
                    {dev.apps}
                  </td>
                  <td className="py-3 pr-4 text-right text-cyan-400 font-medium">
                    {dev.installs}M+
                  </td>
                  <td className="py-3 text-slate-300">
                    {dev.topCategory}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

