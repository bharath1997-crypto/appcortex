"use client";

import Link from "next/link";

interface MarketIndex {
  id: string;
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  icon?: string;
  isMain?: boolean;
}

export function MarketActionSection() {
  // Mock data - replace with real API data
  const indices: MarketIndex[] = [
    {
      id: "abx",
      name: "AppCortex Index",
      symbol: "ACX",
      value: 1284.22,
      change: 18.2,
      changePercent: 1.43,
      icon: "📊",
      isMain: true,
    },
    {
      id: "games",
      name: "Games Index",
      symbol: "GAMES",
      value: 2156.84,
      change: 45.6,
      changePercent: 2.16,
      icon: "🎮",
    },
    {
      id: "finance",
      name: "Finance Index",
      symbol: "FINTECH",
      value: 1892.33,
      change: 32.8,
      changePercent: 1.76,
      icon: "💰",
    },
    {
      id: "social",
      name: "Social Index",
      symbol: "SOCIAL",
      value: 1547.91,
      change: -12.4,
      changePercent: -0.79,
      icon: "💬",
    },
    {
      id: "productivity",
      name: "Productivity Index",
      symbol: "PRODX",
      value: 1923.45,
      change: 8.7,
      changePercent: 0.45,
      icon: "⚡",
    },
    {
      id: "ecommerce",
      name: "E-Commerce Index",
      symbol: "ECOM",
      value: 1678.12,
      change: 22.1,
      changePercent: 1.33,
      icon: "🛒",
    },
    {
      id: "health",
      name: "Health & Fitness Index",
      symbol: "HEALTH",
      value: 1435.67,
      change: -5.3,
      changePercent: -0.37,
      icon: "💪",
    },
    {
      id: "education",
      name: "Education Index",
      symbol: "EDU",
      value: 1789.43,
      change: 15.9,
      changePercent: 0.90,
      icon: "📚",
    },
  ];

  // AI-generated market commentary based on indices
  const marketCommentary = `App market activity shows strong momentum today with the ACX up ${Math.abs(
    indices[0].changePercent
  ).toFixed(2)}%. Gaming and fintech segments lead gains with ${indices[1].changePercent.toFixed(
    2
  )}% and ${indices[2].changePercent.toFixed(
    2
  )}% advances respectively. Social apps face headwinds declining ${Math.abs(
    indices[3].changePercent
  ).toFixed(2)}%, while health & fitness shows modest weakness at ${Math.abs(
    indices[6].changePercent
  ).toFixed(2)}% down.`;

  // Calculate market summary
  const gainers = indices.filter((idx) => idx.change > 0).length;
  const decliners = indices.filter((idx) => idx.change < 0).length;
  const unchanged = indices.length - gainers - decliners;

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-50 mb-2">App Market Action</h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Live indices summarizing how major segments of the app economy are moving today.
          </p>
        </div>
        <Link
          href="/indices"
          className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          View all indices →
        </Link>
      </div>

      {/* Market Summary Bar */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">{gainers}</div>
          <div className="text-xs font-medium text-green-300 uppercase tracking-wider">
            Advancing
          </div>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-red-400">{decliners}</div>
          <div className="text-xs font-medium text-red-300 uppercase tracking-wider">
            Declining
          </div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-slate-400">{unchanged}</div>
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Unchanged
          </div>
        </div>
      </div>

      {/* Indices Table - PROPER TABLE WITH STICKY HEADER */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full">
            {/* Table Header - STICKY (stays visible when scrolling) */}
            <thead className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Index
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Value
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Change
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  % Change
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800">
              {indices.map((index) => {
                const isPositive = index.change > 0;
                const isNegative = index.change < 0;

                return (
                  <tr
                    key={index.id}
                    className={`hover:bg-slate-800/40 transition-colors group ${
                      index.isMain ? "bg-slate-800/20" : ""
                    }`}
                      >
                    {/* Index Name */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <Link href={`/index/${index.id}`} className="flex items-center gap-3">
                        <span className="text-2xl flex-shrink-0" role="img" aria-label={index.name}>
                          {index.icon || "📈"}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-50 group-hover:text-cyan-400 transition-colors">
                              {index.name}
                            </span>
                            {index.isMain && (
                              <span className="text-xs font-mono bg-cyan-400/10 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-400/20">
                                MAIN
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 font-mono">{index.symbol}</div>
                        </div>
                      </Link>
                    </td>

                    {/* Value */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right">
                      <div className="font-semibold text-slate-50">
                        {index.value.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </td>

                    {/* Change */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right">
                      <div
                        className={`font-semibold ${
                          isPositive
                            ? "text-green-400"
                            : isNegative
                            ? "text-red-400"
                            : "text-slate-400"
                        }`}
                      >
                        {isPositive && "+"}
                        {index.change.toFixed(1)}
                      </div>
                    </td>

                    {/* % Change */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right">
                      <div
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md font-semibold text-sm ${
                          isPositive
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : isNegative
                            ? "bg-red-500/10 text-red-400 border border-red-500/20"
                            : "bg-slate-800/50 text-slate-400 border border-slate-700"
                        }`}
                      >
                        {isPositive && "↑"}
                        {isNegative && "↓"}
                        {isPositive && "+"}
                        {index.changePercent.toFixed(2)}%
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Market Commentary */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm font-semibold text-slate-50">Market Commentary</h3>
              <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                AI Analysis
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{marketCommentary}</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-xs text-slate-500">
          Indices updated every 15 minutes • Last updated: 3 min ago
        </p>
      </div>
    </section>
  );
}

