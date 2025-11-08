"use client";

import { useState } from "react";
import { getHomeSummaryData } from "@/lib/mockDataService";

export function EnhancedAcxHero() {
  const [timeRange, setTimeRange] = useState<"today" | "7d" | "30d" | "12m">("today");
  const data = getHomeSummaryData();
  const { index } = data;

  const isUp = index.changePercent >= 0;
  const changeColor = isUp ? "text-emerald-400" : "text-rose-400";
  const arrow = isUp ? "↑" : "↓";

  const lastUpdated = new Date(index.lastUpdated).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // AI insight (refreshed every 2-3 hours)
  const aiInsight = `AI tools and Finance apps are driving today's growth. Downloads in AI tools are up +18% compared to yesterday, especially in India & UAE.`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              AppCortex Index (ACX)
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              A live score of global app downloads across all major app stores.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">LIVE • Updated every 2 hours</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-500">
              ⏱️ Last update: {lastUpdated} UTC
            </span>
          </div>
        </div>

        {/* Main Index Number Row */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
            {/* Left: Index Value */}
            <div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                Global Download Index • {timeRange === "today" ? "Today" : timeRange === "7d" ? "Last 7 Days" : timeRange === "30d" ? "Last 30 Days" : "Last 12 Months"}
              </div>
              
              <div className="flex items-baseline gap-4 mb-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50">
                  {index.value.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className={`flex items-center gap-1 text-lg font-semibold ${changeColor}`}>
                  <span>{arrow}</span>
                  <span>{isUp ? "+" : ""}{Math.abs(index.changePercent).toFixed(2)}%</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">vs yesterday</span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {isUp ? "+" : ""}42,310 downloads
                </div>
              </div>
            </div>

            {/* Right: Chart + Time Filters */}
            <div className="flex flex-col items-end gap-4">
              {/* Time Range Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-lg">
                {(["today", "7d", "30d", "12m"] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      timeRange === range
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    {range === "today" ? "Today" : range === "7d" ? "7D" : range === "30d" ? "30D" : "12M"}
                  </button>
                ))}
              </div>

              {/* Mini Sparkline Chart */}
              <div className="flex items-end gap-1 h-20 w-48">
                {[65, 72, 68, 75, 80, 78, 85, 82, 88, 92, 95, 100].map((height, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t transition-all ${
                      isUp ? "bg-emerald-400/30 hover:bg-emerald-400/50" : "bg-rose-400/30 hover:bg-rose-400/50"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight Line */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/20 dark:border-cyan-500/30 rounded-xl p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
                  ACX Insight (AI)
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {aiInsight}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <span className="hidden sm:inline">🤖</span>
              <span>Generated by AppCortex AI • every 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

