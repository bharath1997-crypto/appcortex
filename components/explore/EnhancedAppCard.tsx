// components/explore/EnhancedAppCard.tsx
import type { ExploreApp } from "@/lib/appsApi";
import Link from "next/link";
import { Card, Badge } from "@/components/ui";

interface EnhancedAppCardProps {
  app: ExploreApp;
  showBadges?: boolean;
}

// Determine badges based on app properties
function getAppBadges(app: ExploreApp) {
  const badges = [];
  
  if (app.trendLabel.includes("Trending")) {
    badges.push({ label: "Trending", icon: "🔥", variant: "rose" as const });
  }
  if (app.rating >= 4.5) {
    badges.push({ label: "Top Rated", icon: "🏆", variant: "amber" as const });
  }
  if (app.category.includes("AI")) {
    badges.push({ label: "AI-Powered", icon: "💡", variant: "cyan" as const });
  }
  
  return badges;
}

export function EnhancedAppCard({ app, showBadges = true }: EnhancedAppCardProps) {
  const initials = app.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const badges = showBadges ? getAppBadges(app) : [];

  return (
    <Link href={`/app/${app.slug}`} className="block group">
      <Card hover className="p-4 h-full flex flex-col">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant} className="text-[8px]">
                {badge.icon} {badge.label}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-start gap-3 flex-1">
          {/* App Icon */}
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg flex-shrink-0">
            {initials}
          </div>

          <div className="flex-1 min-w-0">
            {/* App Name */}
            <h3 className="text-sm font-semibold text-slate-50 group-hover:text-cyan-400 transition-colors truncate">
              {app.name}
            </h3>

            {/* Developer */}
            <p className="text-xs text-slate-400 mt-0.5 truncate">
              {app.developer}
            </p>

            {/* Category Badge */}
            <div className="mt-2">
              <Badge variant="cyan" className="text-[9px]">
                {app.category}
              </Badge>
            </div>

            {/* Stats */}
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
              <span className="inline-flex items-center gap-1 text-amber-300">
                <span>⭐</span>
                <span className="font-medium">{app.rating.toFixed(1)}</span>
              </span>
              <span className="text-slate-400">{app.installsLabel}</span>
              <span className="text-emerald-400 font-medium">{app.trendLabel}</span>
            </div>
          </div>
        </div>

        {/* View Insights Button */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <span className="text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors">
            View Insights →
          </span>
        </div>
      </Card>
    </Link>
  );
}

