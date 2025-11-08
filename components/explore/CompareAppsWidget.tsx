// components/explore/CompareAppsWidget.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui";

const availableApps = [
  { id: "calm", name: "Calm", category: "Health", rating: 4.6, downloads: "10M+", trend: 4.8 },
  { id: "headspace", name: "Headspace", category: "Health", rating: 4.3, downloads: "25M+", trend: 2.1 },
  { id: "chatgpt", name: "ChatGPT", category: "AI Tools", rating: 4.7, downloads: "100M+", trend: 8.2 },
  { id: "spotify", name: "Spotify", category: "Music", rating: 4.5, downloads: "1B+", trend: 1.9 },
];

export function CompareAppsWidget() {
  const [app1, setApp1] = useState(availableApps[0].id);
  const [app2, setApp2] = useState(availableApps[1].id);

  const app1Data = availableApps.find((a) => a.id === app1);
  const app2Data = availableApps.find((a) => a.id === app2);

  if (!app1Data || !app2Data) return null;

  return (
    <Card className="p-5">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-50">
            Compare Apps Side by Side
          </h3>
          <span className="text-xs text-slate-400">(Public Preview)</span>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-3">
          <select
            value={app1}
            onChange={(e) => setApp1(e.target.value)}
            className="rounded-lg bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {availableApps.map((app) => (
              <option key={app.id} value={app.id}>
                {app.name}
              </option>
            ))}
          </select>

          <select
            value={app2}
            onChange={(e) => setApp2(e.target.value)}
            className="rounded-lg bg-slate-800/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {availableApps.map((app) => (
              <option key={app.id} value={app.id}>
                {app.name}
              </option>
            ))}
          </select>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="text-left py-2 pr-4">Metric</th>
                <th className="text-center py-2 px-2">{app1Data.name}</th>
                <th className="text-center py-2 px-2">{app2Data.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="py-3 pr-4 text-slate-400">Rating</td>
                <td className="py-3 px-2 text-center text-amber-300">
                  ⭐ {app1Data.rating.toFixed(1)}
                </td>
                <td className="py-3 px-2 text-center text-amber-300">
                  ⭐ {app2Data.rating.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3 pr-4 text-slate-400">Downloads</td>
                <td className="py-3 px-2 text-center text-slate-200">
                  {app1Data.downloads}
                </td>
                <td className="py-3 px-2 text-center text-slate-200">
                  {app2Data.downloads}
                </td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3 pr-4 text-slate-400">Trend (7D)</td>
                <td className="py-3 px-2 text-center text-emerald-400">
                  +{app1Data.trend.toFixed(1)}%
                </td>
                <td className="py-3 px-2 text-center text-emerald-400">
                  +{app2Data.trend.toFixed(1)}%
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-slate-400">Category</td>
                <td className="py-3 px-2 text-center text-slate-200">
                  {app1Data.category}
                </td>
                <td className="py-3 px-2 text-center text-slate-200">
                  {app2Data.category}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="pt-3 border-t border-slate-800">
          <p className="text-xs text-slate-400 mb-3">
            <strong className="text-cyan-400">Unlock full comparison:</strong> See
            revenue estimates, retention curves, feature analysis, and more.
          </p>
          <button className="w-full rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors">
            Sign In to Save Comparison
          </button>
        </div>
      </div>
    </Card>
  );
}

