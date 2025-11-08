import { getHomeSummaryData, getRisingAppsData } from "@/lib/mockDataService";
import Link from "next/link";

export function LiveMetricsCards() {
  const { stats } = getHomeSummaryData();
  const risingApps = getRisingAppsData();
  const risingAppsCount = risingApps.length;

  const metrics = [
    {
      title: "Total Apps Tracked",
      value: stats.appsTracked.toLocaleString(),
      subtext: "across Google Play, App Store & more",
      footer: "Live updated",
      icon: "📱",
      color: "cyan",
    },
    {
      title: "Downloads Today",
      value: stats.downloadsToday.toLocaleString(),
      subtext: "All tracked apps",
      footer: "+2.4% vs yesterday",
      icon: "📥",
      color: "emerald",
      change: "+2.4%",
    },
    {
      title: "New Apps Added Today",
      value: stats.newAppsToday.toLocaleString(),
      subtext: "All major app stores",
      footer: "+8.1% vs last 7-day average",
      icon: "✨",
      color: "amber",
      change: "+8.1%",
    },
    {
      title: "Rising Apps Today",
      value: risingAppsCount.toString(),
      subtext: "Apps with strong upward movement",
      footer: null,
      icon: "🚀",
      color: "purple",
      hasButton: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all hover:shadow-lg"
          >
            {/* Icon */}
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl" role="img" aria-label={metric.title}>
                {metric.icon}
              </span>
              {metric.change && (
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  metric.change.startsWith("+")
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                    : "bg-rose-500/10 text-rose-700 dark:text-rose-400"
                }`}>
                  {metric.change}
                </span>
              )}
            </div>

            {/* Value */}
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {metric.value}
            </div>

            {/* Title */}
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
              {metric.title}
            </div>

            {/* Subtext */}
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              {metric.subtext}
            </p>

            {/* Footer */}
            {metric.footer && (
              <div className="text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-3">
                {metric.footer}
              </div>
            )}

            {/* Button for Rising Apps */}
            {metric.hasButton && (
              <Link
                href="#rising-apps"
                className="inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 border-t border-slate-200 dark:border-slate-800 pt-3 mt-3"
              >
                View list
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

