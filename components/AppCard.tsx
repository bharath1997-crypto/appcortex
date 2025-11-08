import Link from "next/link";
import type { AppSummary } from "@/lib/mockData";

interface AppCardProps {
  app: AppSummary;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Link
      href={`/app/${app.id}`}
      className="group border border-slate-800 rounded-xl p-4 flex gap-3 hover:border-cyan-400/70 hover:bg-slate-900/60 transition-colors"
    >
      <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-semibold">
        {app.iconText}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="truncate font-medium text-slate-50 group-hover:text-cyan-300">
            {app.name}
          </div>
          <div className="text-xs text-slate-400 whitespace-nowrap">
            {app.category}
          </div>
        </div>
        <div className="mt-1 text-xs text-slate-400 truncate">
          {app.developer}
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-300">
          <span>⭐ {app.rating.toFixed(1)}</span>
          <span>•</span>
          <span>{app.downloadsLabel} installs</span>
          <span>•</span>
          <span
            className={
              app.trend === "up"
                ? "text-emerald-400"
                : app.trend === "down"
                ? "text-rose-400"
                : "text-slate-400"
            }
          >
            {app.trend === "up"
              ? "Trending ↑"
              : app.trend === "down"
              ? "Dropping ↓"
              : "Stable →"}
          </span>
        </div>
      </div>
    </Link>
  );
}
