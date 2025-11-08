// components/explore/AppCard.tsx
import type { ExploreApp } from "@/lib/appsApi";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

interface AppCardProps {
  app: ExploreApp;
}

export function AppCard({ app }: AppCardProps) {
  const initials = app.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link href={`/app/${app.slug}`} className="block">
      <Card hover className="flex flex-col justify-between px-4 py-3">
        <div className="flex items-start gap-3">
          {/* Icon placeholder */}
          <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-xs font-semibold text-slate-200">
            {initials}
          </div>

          <div className="flex-1">
            <div className="flex justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-slate-50">
                  {app.name}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {app.developer}
                </div>
              </div>
              <div className="text-[11px] text-slate-400">
                {app.category}
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
              <span className="inline-flex items-center gap-1 text-amber-300">
                <span>⭐</span>
                <span>{app.rating.toFixed(1)}</span>
              </span>
              <span className="text-slate-300">{app.installsLabel}</span>
              <span className="text-emerald-400">{app.trendLabel}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

