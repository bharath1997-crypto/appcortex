// components/insights/FeaturedReports.tsx
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const reports = [
  {
    id: 1,
    title: "Q4 2025 Global App Market Report",
    description: "Comprehensive analysis of installs, revenue, and SDK trends across 124 countries.",
    icon: "📊",
    publishedAt: "Dec 1, 2025",
    readTime: "15 min read",
    slug: "q4-2025-global-report",
    isPremium: false,
  },
  {
    id: 2,
    title: "Emerging Markets: MENA App Boom",
    description: "Regional deep dive on UAE, KSA, and Egypt app growth driving 28% YoY expansion.",
    icon: "🌍",
    publishedAt: "Nov 28, 2025",
    readTime: "12 min read",
    slug: "mena-app-boom-2025",
    isPremium: false,
  },
  {
    id: 3,
    title: "2025 App Retention Benchmarks",
    description: "Data-backed performance guide for developers and investors across 15 categories.",
    icon: "📈",
    publishedAt: "Nov 25, 2025",
    readTime: "10 min read",
    slug: "retention-benchmarks-2025",
    isPremium: true,
  },
];

export function FeaturedReports() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Featured Reports
        </h2>
        <Link
          href="/insights/reports"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Reports →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <Link key={report.id} href={`/insights/${report.slug}`}>
            <Card hover className="p-5 h-full flex flex-col">
              {/* Icon & Premium Badge */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{report.icon}</span>
                {report.isPremium && (
                  <Badge variant="amber" className="text-[9px]">
                    PRO
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-50 mb-2 line-clamp-2">
                {report.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-4 flex-1 line-clamp-3">
                {report.description}
              </p>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">{report.publishedAt}</span>
                <span className="text-slate-500">{report.readTime}</span>
              </div>

              <div className="mt-3 text-xs text-cyan-400">
                Read Full Report →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

