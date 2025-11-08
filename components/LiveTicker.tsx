import { mockTicker } from "@/lib/mockData";

export function LiveTicker() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 py-2 text-xs text-slate-300">
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <span>Apps tracked: {mockTicker.appsTracked.toLocaleString()}</span>
        <span>Developers: {mockTicker.developers.toLocaleString()}</span>
        <span>Categories: {mockTicker.categories}</span>
        <span>Regions: {mockTicker.regions}</span>
      </div>
      <div className="text-slate-400">
        Last updated: {mockTicker.lastUpdated} • Refreshes every 3 hours
      </div>
    </div>
  );
}

