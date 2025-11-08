"use client";

import Link from "next/link";

interface RegionalMarket {
  id: string;
  name: string;
  region: string;
  flag: string;
  indexValue: number;
  changePercent: number;
  topCategory: string;
  topApp: string;
  marketStatus: "open" | "closed" | "pre-market";
}

export function GlobalMarketsSection() {
  // Mock data - replace with real API data
  const markets: RegionalMarket[] = [
    {
      id: "us",
      name: "United States",
      region: "North America",
      flag: "🇺🇸",
      indexValue: 2847.33,
      changePercent: 1.82,
      topCategory: "Finance",
      topApp: "TaxHelper Pro",
      marketStatus: "open",
    },
    {
      id: "india",
      name: "India",
      region: "Asia Pacific",
      flag: "🇮🇳",
      indexValue: 3124.58,
      changePercent: 3.45,
      topCategory: "Education",
      topApp: "StudyGenius AI",
      marketStatus: "closed",
    },
    {
      id: "eu",
      name: "European Union",
      region: "Europe",
      flag: "🇪🇺",
      indexValue: 1956.42,
      changePercent: 0.67,
      topCategory: "Productivity",
      topApp: "WorkFlow Manager",
      marketStatus: "closed",
    },
    {
      id: "uae",
      name: "UAE",
      region: "Middle East",
      flag: "🇦🇪",
      indexValue: 1523.19,
      changePercent: 2.14,
      topCategory: "E-Commerce",
      topApp: "QuickShop Express",
      marketStatus: "open",
    },
    {
      id: "china",
      name: "China",
      region: "Asia Pacific",
      flag: "🇨🇳",
      indexValue: 2634.77,
      changePercent: -0.43,
      topCategory: "Gaming",
      topApp: "Dragon Quest RPG",
      marketStatus: "closed",
    },
    {
      id: "brazil",
      name: "Brazil",
      region: "Latin America",
      flag: "🇧🇷",
      indexValue: 1745.89,
      changePercent: 1.23,
      topCategory: "Social",
      topApp: "ConnectBR",
      marketStatus: "open",
    },
    {
      id: "uk",
      name: "United Kingdom",
      region: "Europe",
      flag: "🇬🇧",
      indexValue: 2156.34,
      changePercent: 0.89,
      topCategory: "Finance",
      topApp: "BudgetWise UK",
      marketStatus: "closed",
    },
    {
      id: "japan",
      name: "Japan",
      region: "Asia Pacific",
      flag: "🇯🇵",
      indexValue: 1987.45,
      changePercent: -0.28,
      topCategory: "Gaming",
      topApp: "Anime Heroes",
      marketStatus: "closed",
    },
  ];

  // AI-generated global market commentary
  const globalCommentary = `India leads global app markets with a strong ${Math.abs(
    markets[1].changePercent
  ).toFixed(
    2
  )}% surge driven by education apps, while the US shows solid ${markets[0].changePercent.toFixed(
    2
  )}% gains in fintech. UAE markets advance ${markets[3].changePercent.toFixed(
    2
  )}% on e-commerce momentum. China and Japan face modest headwinds with declines of ${Math.abs(
    markets[4].changePercent
  ).toFixed(2)}% and ${Math.abs(markets[7].changePercent).toFixed(
    2
  )}% respectively, though gaming remains resilient across both markets.`;

  // Calculate regional summary
  const strongestMarket = markets.reduce((prev, current) =>
    current.changePercent > prev.changePercent ? current : prev
  );
  const weakestMarket = markets.reduce((prev, current) =>
    current.changePercent < prev.changePercent ? current : prev
  );

  const getMarketStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "closed":
        return "text-slate-400 bg-slate-800/50 border-slate-700";
      case "pre-market":
        return "text-amber-400 bg-amber-400/10 border-amber-400/20";
      default:
        return "text-slate-400 bg-slate-800/50 border-slate-700";
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-50 mb-2">Global App Markets</h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Regional snapshots of app activity across key markets worldwide.
          </p>
        </div>
        <Link
          href="/global-markets"
          className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          View all regions →
        </Link>
      </div>

      {/* Market Leaders Summary */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{strongestMarket.flag}</span>
            <div>
              <div className="text-xs text-green-300 font-medium uppercase tracking-wider">
                Strongest
              </div>
              <div className="font-semibold text-slate-50">{strongestMarket.name}</div>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-green-400">
              +{strongestMarket.changePercent.toFixed(2)}%
            </span>
            <span className="text-xs text-slate-400">
              led by {strongestMarket.topCategory}
            </span>
          </div>
        </div>

        <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{weakestMarket.flag}</span>
            <div>
              <div className="text-xs text-red-300 font-medium uppercase tracking-wider">
                Weakest
              </div>
              <div className="font-semibold text-slate-50">{weakestMarket.name}</div>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-400">
              {weakestMarket.changePercent.toFixed(2)}%
            </span>
            <span className="text-xs text-slate-400">
              {weakestMarket.topCategory} sector
            </span>
          </div>
        </div>
      </div>

      {/* Markets Table - PROPER TABLE WITH STICKY HEADER */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full">
            {/* Table Header - STICKY (stays visible when scrolling) */}
            <thead className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Region
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Index
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Change
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Top Category
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Trending App
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800">
              {markets.map((market) => {
                const isPositive = market.changePercent > 0;
                const isNegative = market.changePercent < 0;

                return (
                  <tr
                    key={market.id}
                    className="hover:bg-slate-800/40 transition-colors group"
                      >
                    {/* Region */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <Link href={`/market/${market.id}`} className="flex items-center gap-3">
                        <span className="text-3xl flex-shrink-0">{market.flag}</span>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-50 group-hover:text-cyan-400 transition-colors">
                            {market.name}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-500">{market.region}</span>
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded border ${getMarketStatusColor(
                                market.marketStatus
                              )}`}
                            >
                              {market.marketStatus === "open" ? "Open" : "Closed"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    {/* Index Value */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right">
                      <div className="font-semibold text-slate-50">
                        {market.indexValue.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </td>

                    {/* Change */}
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
                        {market.changePercent.toFixed(2)}%
                      </div>
                    </td>

                    {/* Top Category */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-300">
                        {market.topCategory}
                      </div>
                    </td>

                    {/* Trending App */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0" />
                        <div className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
                          {market.topApp}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Global Commentary */}
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm font-semibold text-slate-50">Global Market Wrap</h3>
              <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                AI Analysis
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{globalCommentary}</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-xs text-slate-500">
          Regional data updated hourly • Market hours vary by timezone
        </p>
      </div>
    </section>
  );
}

