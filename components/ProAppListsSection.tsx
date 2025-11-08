"use client";

import { useState } from "react";
import Link from "next/link";

interface AppListItem {
  id: string;
  name: string;
  category: string;
  rankChange: number; // Percentage change in rank
  installs: string;
  rating: number;
  trend: "up" | "down" | "stable";
  icon?: string;
}

interface AppList {
  id: string;
  label: string;
  description: string;
  apps: AppListItem[];
}

export function ProAppListsSection() {
  const [activeTab, setActiveTab] = useState("high-potential");

  const appLists: AppList[] = [
    {
      id: "high-potential",
      label: "High Potential",
      description: "Apps showing strong early-stage growth signals with accelerating install velocity, positive sentiment trends, and expanding market presence across multiple regions.",
      apps: [
        {
          id: "1",
          name: "FitTrack Pro",
          category: "Health & Fitness",
          rankChange: 45.2,
          installs: "100K-500K",
          rating: 4.6,
          trend: "up",
          icon: "💪",
        },
        {
          id: "2",
          name: "StudyBuddy AI",
          category: "Education",
          rankChange: 38.7,
          installs: "50K-100K",
          rating: 4.8,
          trend: "up",
          icon: "📚",
        },
        {
          id: "3",
          name: "QuickPay Wallet",
          category: "Finance",
          rankChange: 32.4,
          installs: "500K-1M",
          rating: 4.5,
          trend: "up",
          icon: "💳",
        },
        {
          id: "4",
          name: "HomeChef Daily",
          category: "Food & Drink",
          rankChange: 28.9,
          installs: "100K-500K",
          rating: 4.7,
          trend: "up",
          icon: "🍳",
        },
        {
          id: "5",
          name: "ZenMind Meditation",
          category: "Health & Fitness",
          rankChange: 25.3,
          installs: "50K-100K",
          rating: 4.9,
          trend: "up",
          icon: "🧘",
        },
      ],
    },
    {
      id: "profit-engines",
      label: "Profit Engines",
      description: "Established apps with consistent revenue generation, high retention rates, strong monetization metrics, and stable user acquisition costs demonstrating long-term sustainability.",
      apps: [
        {
          id: "6",
          name: "Premium Video Editor",
          category: "Photo & Video",
          rankChange: 8.5,
          installs: "10M-50M",
          rating: 4.7,
          trend: "stable",
          icon: "🎬",
        },
        {
          id: "7",
          name: "CloudSync Pro",
          category: "Productivity",
          rankChange: 12.3,
          installs: "5M-10M",
          rating: 4.6,
          trend: "up",
          icon: "☁️",
        },
        {
          id: "8",
          name: "FitnessPro Premium",
          category: "Health & Fitness",
          rankChange: 6.7,
          installs: "1M-5M",
          rating: 4.8,
          trend: "stable",
          icon: "🏋️",
        },
        {
          id: "9",
          name: "Invoice Manager",
          category: "Business",
          rankChange: 15.2,
          installs: "1M-5M",
          rating: 4.5,
          trend: "up",
          icon: "📊",
        },
        {
          id: "10",
          name: "Language Master",
          category: "Education",
          rankChange: 9.8,
          installs: "5M-10M",
          rating: 4.7,
          trend: "stable",
          icon: "🌍",
        },
      ],
    },
    {
      id: "turnaround",
      label: "Turnaround",
      description: "Apps recovering from previous declines with recent product improvements, successful pivots, or renewed marketing efforts showing reversal in key engagement and retention metrics.",
      apps: [
        {
          id: "11",
          name: "TaskFlow 2.0",
          category: "Productivity",
          rankChange: 18.4,
          installs: "500K-1M",
          rating: 4.3,
          trend: "up",
          icon: "✅",
        },
        {
          id: "12",
          name: "ShopSmart Reborn",
          category: "Shopping",
          rankChange: 22.6,
          installs: "1M-5M",
          rating: 4.4,
          trend: "up",
          icon: "🛒",
        },
        {
          id: "13",
          name: "MusicMix Revamped",
          category: "Music & Audio",
          rankChange: 16.7,
          installs: "500K-1M",
          rating: 4.5,
          trend: "up",
          icon: "🎵",
        },
        {
          id: "14",
          name: "PhotoGrid Plus",
          category: "Photo & Video",
          rankChange: 14.2,
          installs: "1M-5M",
          rating: 4.2,
          trend: "up",
          icon: "📷",
        },
        {
          id: "15",
          name: "Budget Tracker Pro",
          category: "Finance",
          rankChange: 20.1,
          installs: "100K-500K",
          rating: 4.6,
          trend: "up",
          icon: "💰",
        },
      ],
    },
  ];

  const activeList = appLists.find((list) => list.id === activeTab) || appLists[0];

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "↗";
      case "down":
        return "↘";
      case "stable":
        return "→";
    }
  };

  const getTrendColor = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "text-green-400";
      case "down":
        return "text-red-400";
      case "stable":
        return "text-slate-400";
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-slate-50">Pro App Lists</h2>
            <span className="text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-white px-2.5 py-1 rounded-full">
              PRO
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-2xl">
            Curated lists of apps filtered by growth, stability, and monetization signals from the AppCortex engine.
          </p>
        </div>
        <Link
          href="/pro-lists"
          className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          View all lists →
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-800">
        <div className="flex gap-1 overflow-x-auto pb-px -mb-px scrollbar-hide">
          {appLists.map((list) => (
            <button
              key={list.id}
              onClick={() => setActiveTab(list.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === list.id
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-300 hover:border-slate-700"
              }`}
            >
              {list.label}
            </button>
          ))}
        </div>
      </div>

      {/* List Description */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
        <p className="text-xs text-slate-300 leading-relaxed">{activeList.description}</p>
      </div>

      {/* Apps List - PROPER TABLE WITH STICKY HEADER */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full">
            {/* Table Header - STICKY (stays visible when scrolling) */}
            <thead className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  App Name
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Category
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Rank Change
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Installs
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Rating
                </th>
                <th className="px-4 md:px-6 py-3 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Trend
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800">
              {activeList.apps.map((app, index) => (
                <tr
                  key={app.id}
                  className="hover:bg-slate-800/40 transition-colors group"
                    >
                  {/* App Name & Icon */}
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <Link href={`/app/${app.id}`} className="flex items-center gap-3">
                      <div className="flex-shrink-0 text-2xl" role="img" aria-label={app.name}>
                        {app.icon || "📱"}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-slate-50 group-hover:text-cyan-400 transition-colors">
                          {app.name}
                        </div>
                      </div>
                    </Link>
                  </td>

                  {/* Category */}
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-slate-300">{app.category}</span>
                  </td>

                  {/* Rank Change */}
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-semibold ${
                        app.rankChange > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {app.rankChange > 0 ? "+" : ""}
                      {app.rankChange.toFixed(1)}%
                    </span>
                  </td>

                  {/* Installs */}
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-slate-300">{app.installs}</span>
                  </td>

                  {/* Rating */}
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-slate-50">{app.rating}</span>
                      <span className="text-amber-400 text-sm">★</span>
                    </div>
                  </td>

                  {/* Trend */}
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-center">
                    <span className={`text-xl font-bold ${getTrendColor(app.trend)}`}>
                      {getTrendIcon(app.trend)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-xs text-slate-500">
          Lists updated daily at 6:00 AM UTC • Based on 72-hour rolling metrics
        </p>
      </div>
    </section>
  );
}

