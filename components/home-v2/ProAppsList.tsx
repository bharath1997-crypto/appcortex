"use client";

import { useState } from "react";
import { getHighPotentialApps, getProfitEngineApps, getTurnaroundApps } from "@/lib/mockDataService";

export function ProAppsList() {
  const [activeTab, setActiveTab] = useState<"potential" | "profit" | "turnaround">("potential");

  const tabData = {
    potential: {
      title: "High Potential",
      description: "Apps showing strong overall growth based on downloads and user retention",
      apps: getHighPotentialApps(),
      columns: ["Rank", "App", "Category", "Total Downloads", "30-Day Growth", "AI Insight"],
    },
    profit: {
      title: "Profit Engines",
      description: "Premium apps with high revenue per download and strong paid conversion",
      apps: getProfitEngineApps(),
      columns: ["Rank", "App", "Category", "Active Users", "ARPU", "AI Insight"],
    },
    turnaround: {
      title: "Turnarounds",
      description: "Apps recovering from decline through updates, pricing, or features",
      apps: getTurnaroundApps(),
      columns: ["Rank", "App", "Category", "Total Users", "Updates", "AI Insight"],
    },
  };

  const currentData = tabData[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          Pro Apps List
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Curated by AppCortex AI — ranked by growth, stability & monetization potential
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab("potential")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === "potential"
              ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500"
          }`}
        >
          🔥 High Potential
        </button>
        <button
          onClick={() => setActiveTab("profit")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === "profit"
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500"
          }`}
        >
          💰 Profit Engines
        </button>
        <button
          onClick={() => setActiveTab("turnaround")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === "turnaround"
              ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500"
          }`}
        >
          🔄 Turnarounds
        </button>
      </div>

      {/* Tab Description */}
      <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {currentData.description}
        </p>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900/80">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  App
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  {activeTab === "potential" ? "Downloads" : activeTab === "profit" ? "Users" : "Users"}
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  {activeTab === "potential" ? "Growth" : activeTab === "profit" ? "ARPU" : "Updates"}
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Trend
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  AI Insight
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentData.apps.map((app) => (
                <tr key={app.rank} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold">
                      {app.rank}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{app.icon}</span>
                      <div className="font-medium text-slate-900 dark:text-slate-100">
                        {app.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      {app.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                    {app.downloads}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {app.metric}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xs font-medium text-slate-600 dark:text-slate-400">
                    {app.trend}
                  </td>
                  <td className="px-4 py-4 text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                    {app.aiInsight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 dark:bg-slate-900/80 px-6 py-3 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          💡 Hover on any app to see why it was selected by the Cortex Engine
        </div>
      </div>
    </section>
  );
}

