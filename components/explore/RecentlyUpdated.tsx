// components/explore/RecentlyUpdated.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const recentUpdates = [
  { app: "TikTok", version: "v32.1", time: "2h ago", category: "Social" },
  { app: "Instagram", version: "v347.0", time: "3h ago", category: "Social" },
  { app: "Candy Crush", version: "v1.221", time: "5h ago", category: "Games" },
  { app: "WhatsApp", version: "v2.24.4", time: "6h ago", category: "Communication" },
  { app: "Spotify", version: "v8.8.96", time: "8h ago", category: "Music" },
];

export function RecentlyUpdated() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-slate-50">
          Recently Updated Apps
        </h3>
        <span className="text-xs text-slate-400">
          Auto-updates every 2h
        </span>
      </div>

      <div className="space-y-3">
        {recentUpdates.map((update, index) => (
          <Link
            key={index}
            href={`/app/${update.app.toLowerCase()}`}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/40 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                {update.app[0]}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                  {update.app}
                </div>
                <div className="text-xs text-slate-400">
                  {update.version} · {update.category}
                </div>
              </div>
            </div>
            <span className="text-xs text-slate-500">{update.time}</span>
          </Link>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-center">
        <Link
          href="/apps/updates"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Recently Updated →
        </Link>
      </div>
    </Card>
  );
}

