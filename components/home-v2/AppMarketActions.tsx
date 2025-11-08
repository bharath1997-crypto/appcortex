"use client";

import { useState } from "react";
import { getAdvancingCategories, getDecliningCategories } from "@/lib/mockDataService";

export function AppMarketActions() {
  const [activeView, setActiveView] = useState<"advancing" | "declining">("advancing");
  
  const advancingCategories = getAdvancingCategories();
  const decliningCategories = getDecliningCategories();
  
  const currentData = activeView === "advancing" ? advancingCategories : decliningCategories;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          App Market Actions
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Track category movements and emerging trends.
        </p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveView("advancing")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeView === "advancing"
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500"
          }`}
        >
          📈 Advancing Categories
        </button>
        <button
          onClick={() => setActiveView("declining")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeView === "declining"
              ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-rose-400 dark:hover:border-rose-500"
          }`}
        >
          📉 Declining Categories
        </button>
      </div>

      {/* Data Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {currentData.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all hover:shadow-lg"
          >
            {/* Category Name */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                {category.name}
              </h3>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  category.growthPercent >= 0
                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                    : "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400"
                }`}
              >
                {category.growthPercent >= 0 ? "+" : ""}
                {category.growthPercent}%
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  New Apps (Today)
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {category.newAppsToday}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  7-Day Avg
                </div>
                <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                  {category.avgLast7Days}
                </div>
              </div>
            </div>

            {/* Comparison Bar */}
            <div className="mb-3">
              <div className="flex items-end gap-2 h-16">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-slate-300 dark:bg-slate-700 rounded-t"
                    style={{
                      height: `${Math.min(
                        (category.avgLast7Days / Math.max(category.newAppsToday, category.avgLast7Days)) * 100,
                        100
                      )}%`,
                    }}
                  />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    7-Day
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t ${
                      category.growthPercent >= 0
                        ? "bg-gradient-to-t from-emerald-500 to-emerald-400"
                        : "bg-gradient-to-t from-rose-500 to-rose-400"
                    }`}
                    style={{
                      height: `${Math.min(
                        (category.newAppsToday / Math.max(category.newAppsToday, category.avgLast7Days)) * 100,
                        100
                      )}%`,
                    }}
                  />
                  <span className="text-xs text-slate-900 dark:text-slate-50 font-medium">
                    Today
                  </span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-3">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {category.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          💡 <strong>Note:</strong> {activeView === "advancing" 
            ? "New or rapidly expanding app categories introduced in app stores today." 
            : "Categories with declining app creation may indicate market saturation."}
        </p>
      </div>
    </section>
  );
}

