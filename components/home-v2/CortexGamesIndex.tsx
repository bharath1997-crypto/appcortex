import { getGamesIndexData } from "@/lib/mockDataService";

export function CortexGamesIndex() {
  const gamesData = getGamesIndexData();
  const isUp = gamesData.changePercent >= 0;

  const lastUpdated = new Date(gamesData.lastUpdated).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          🎮 Cortex Index: Games Segment
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          A focused index measuring the global performance of gaming apps.
        </p>
      </div>

      {/* Main Index Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800/50 rounded-2xl p-6 sm:p-8 mb-6">
        <div className="grid lg:grid-cols-[auto,1fr] gap-6 items-center">
          {/* Left: Index Value */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎮</span>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Game Cortex Index
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  Updated every 2 hours • {lastUpdated} UTC
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <div className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-slate-50">
                {gamesData.indexValue}
              </div>
              <div
                className={`flex items-center gap-1 text-lg font-semibold ${
                  isUp ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                }`}
              >
                <span>{isUp ? "↑" : "↓"}</span>
                <span>
                  {isUp ? "+" : ""}
                  {gamesData.changePercent}%
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">
                  vs yesterday
                </span>
              </div>
            </div>
          </div>

          {/* Right: Mini Sparkline */}
          <div className="flex items-end justify-end gap-1 h-20">
            {[45, 52, 48, 55, 60, 58, 65, 70, 75, 80, 85, 88].map((height, i) => (
              <div
                key={i}
                className="w-2 rounded-t bg-gradient-to-t from-purple-500 to-pink-500 transition-all hover:from-purple-600 hover:to-pink-600"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {gamesData.metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-lg group"
          >
            {/* Value */}
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {metric.value}
            </div>

            {/* Title */}
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-2">
              {metric.title}
            </div>

            {/* Description */}
            <div className="text-xs text-slate-500 dark:text-slate-500 mb-2">
              {metric.description}
            </div>

            {/* Change Badge */}
            {metric.change !== "—" && (
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                {metric.change}
              </div>
            )}
            {metric.change === "—" && (
              <div className="text-xs text-slate-400 dark:text-slate-600">
                Based on daily trends
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide mb-1">
              Gaming AI Insight
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {gamesData.aiInsight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

