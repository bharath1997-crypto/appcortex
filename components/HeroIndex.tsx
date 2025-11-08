"use client";

import { useState, useEffect } from "react";

interface StatCard {
  label: string;
  value: string;
  change?: string;
  icon?: string;
}

export function HeroIndex() {
  const [currentTime, setCurrentTime] = useState<string>("");

  // Mock data - replace with real API data
  const abxIndex = 1284.22;
  const changePercent = 2.34;
  const isPositive = changePercent > 0;
  const lastUpdated = "3 min ago";

  const stats: StatCard[] = [
    {
      label: "Apps tracked",
      value: "4.8M",
      icon: "📱",
    },
    {
      label: "Downloads today",
      value: "2.1B",
      change: "+12.4%",
      icon: "📥",
    },
    {
      label: "New apps today",
      value: "12,847",
      change: "+8.2%",
      icon: "✨",
    },
    {
      label: "Top rising category",
      value: "Finance",
      change: "↑ 34.5%",
      icon: "🔥",
    },
  ];

  // AI-generated summary based on current data
  const aiSummary = `Global app momentum rises ${Math.abs(changePercent)}% led by ${stats[3].value} category, with ${stats[2].value} new apps entering the market today.`;

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString("en-US", { 
      hour: "2-digit", 
      minute: "2-digit",
      hour12: true 
    }));
    
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: true 
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-3 tracking-tight">
            The live dashboard for the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              global app economy
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AppCortex Index (ACX) tracks the combined momentum of millions of apps across all major stores.
          </p>
        </div>

        {/* ACX Index Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* Index header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-300">
                    AppCortex Index
                  </h2>
                  <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                    ACX
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Last updated: {lastUpdated}
                  {currentTime && ` • ${currentTime}`}
                </p>
              </div>
              
              {/* Live indicator */}
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-400">LIVE</span>
              </div>
            </div>

            {/* Index value */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 mb-2 tracking-tight">
                  {abxIndex.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`flex items-center gap-1 text-lg sm:text-xl font-semibold ${
                      isPositive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isPositive ? "↑" : "↓"}
                    {Math.abs(changePercent).toFixed(2)}%
                  </span>
                  <span className="text-sm text-slate-500">today</span>
                </div>
              </div>

              {/* Mini chart placeholder - can be replaced with actual chart */}
              <div className="hidden sm:flex items-end gap-1 h-16">
                {[32, 45, 38, 52, 48, 55, 51, 58, 62, 59, 65, 68].map((height, i) => (
                  <div
                    key={i}
                    className={`w-2 rounded-t transition-all ${
                      isPositive ? "bg-green-500/20" : "bg-red-500/20"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* AI Summary */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-cyan-400 mb-1">
                    AI Insight
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {aiSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl" role="img" aria-label={stat.label}>
                  {stat.icon}
                </span>
                {stat.change && (
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      stat.change.includes("+") || stat.change.includes("↑")
                        ? "text-green-400 bg-green-400/10"
                        : "text-slate-400 bg-slate-800/50"
                    }`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or additional info */}
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            Real-time data from 4.8M+ apps across iOS, Android, and web platforms
          </p>
        </div>
      </div>
    </section>
  );
}

