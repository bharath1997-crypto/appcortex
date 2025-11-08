// components/pricing/RoiCalculator.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";
import Link from "next/link";

export function RoiCalculator() {
  const [appsMonitored, setAppsMonitored] = useState(10);
  const [categoriesTracked, setCategoriesTracked] = useState(3);

  // Calculate hours saved (simple formula for demo)
  const hoursSaved = Math.round(appsMonitored * 1.5 + categoriesTracked * 2);
  const costPerApp = (29 / appsMonitored).toFixed(2);

  return (
    <Card className="p-6 md:p-8 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border-cyan-500/30">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
            Calculate Your ROI
          </h2>
          <p className="text-sm text-slate-400">
            See how much time and money you could save with AppCortex Pro
          </p>
        </div>

        {/* Input Controls */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">
              Apps you monitor
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="50"
                value={appsMonitored}
                onChange={(e) => setAppsMonitored(parseInt(e.target.value))}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <span className="text-2xl font-bold text-cyan-400 w-12 text-right">
                {appsMonitored}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">
              Categories tracked
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="15"
                value={categoriesTracked}
                onChange={(e) => setCategoriesTracked(parseInt(e.target.value))}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <span className="text-2xl font-bold text-cyan-400 w-12 text-right">
                {categoriesTracked}
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4 md:grid-cols-3 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">
              ~{hoursSaved}h
            </div>
            <div className="text-xs text-slate-400">
              Hours saved per week
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              ${costPerApp}
            </div>
            <div className="text-xs text-slate-400">
              Cost per app per month
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">
              $29
            </div>
            <div className="text-xs text-slate-400">
              Fixed monthly cost
            </div>
          </div>
        </div>

        {/* Insight Text */}
        <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700">
          <p className="text-sm text-slate-300 leading-relaxed">
            💡 <strong className="text-cyan-400">Pro users save ~{hoursSaved} hours per week</strong> using AI forecasts & alerts. 
            That's less than <strong className="text-cyan-400">${costPerApp}/day per app</strong> to stay ahead of market trends.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/signup?plan=pro"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3 text-sm font-medium text-white hover:from-cyan-600 hover:to-indigo-700 transition-all shadow-lg"
          >
            Upgrade to Pro
          </Link>
          <p className="text-xs text-slate-500 mt-2">
            Start 7-day free trial • No credit card required
          </p>
        </div>
      </div>
    </Card>
  );
}

