// components/market/MarketOverview.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

const subIndices = [
  { name: "Top Free Apps", value: 867.9, change: 1.1, icon: "📱" },
  { name: "Top Paid Apps", value: 713.2, change: 0.6, icon: "💰" },
  { name: "Games Index", value: 1123.7, change: 2.4, icon: "🎮" },
  { name: "Fintech Index", value: 945.1, change: -0.4, icon: "💳" },
];

export function MarketOverview() {
  const [timeframe, setTimeframe] = useState("7D");

  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        AppCortex Market Overview
      </h2>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* Left: Main ACX Index */}
        <Card className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                AppCortex Index
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-50">1,246.3</span>
                <span className="text-lg font-semibold text-emerald-400">
                  +1.7%
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Last 24 hours
              </div>
            </div>

            {/* Timeframe Selector */}
            <div className="flex gap-1 bg-slate-800/60 rounded-lg p-1">
              {["7D", "30D", "90D", "1Y"].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    timeframe === tf
                      ? "bg-cyan-500 text-slate-900 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Mini Sparkline */}
          <div className="flex items-end gap-1 h-16">
            {[42, 45, 43, 48, 52, 49, 55, 58, 54, 59, 62, 61, 65, 68].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-cyan-500/20"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>

          <div className="mt-4 text-xs text-slate-400">
            Tracks combined momentum of millions of apps across all major stores
          </div>
        </Card>

        {/* Right: Sub-Indices Grid */}
        <div className="grid grid-cols-2 gap-3">
          {subIndices.map((index) => {
            const isUp = index.change >= 0;
            return (
              <Card
                key={index.name}
                hover
                className="p-4 bg-slate-900/60 cursor-pointer"
              >
                <div className="text-2xl mb-2">{index.icon}</div>
                <div className="text-xs text-slate-400 mb-1">{index.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-slate-50">
                    {index.value.toFixed(1)}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isUp ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {isUp ? "+" : ""}
                    {index.change.toFixed(1)}%
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <a
          href="/market/indices"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Indices →
        </a>
      </div>
    </section>
  );
}

