// components/insights/InsightCard.tsx
import Link from "next/link";
import type { InsightItem } from "@/lib/insightsApi";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface InsightCardProps {
  insight: InsightItem;
}

export function InsightCard({ insight }: InsightCardProps) {
  const date = new Date(insight.publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const badgeVariant =
    insight.category === "Market Trend"
      ? "cyan"
      : insight.category === "Category Report"
      ? "emerald"
      : "amber";

  return (
    <Link href={`/insights/${insight.slug}`} className="block">
      <Card hover className="px-4 py-3 md:px-5 md:py-4">
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <Badge variant={badgeVariant}>{insight.category}</Badge>
          <span className="text-[11px] text-slate-400">
            {date} · {insight.readingMinutes} min read
          </span>
        </div>

        <h3 className="text-sm md:text-base font-semibold text-slate-50">
          {insight.title}
        </h3>
        <p className="mt-1.5 text-xs md:text-sm text-slate-300">
          {insight.summary}
        </p>

        <div className="mt-2 text-[11px] text-cyan-300">Read full insight →</div>
      </Card>
    </Link>
  );
}

