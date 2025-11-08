"use client";

import { useEffect, useState } from "react";

interface ActivityMetric {
  id: string;
  label: string;
  value: string;
  change?: string;
  icon: string;
  color: "green" | "cyan" | "amber" | "red" | "slate";
  isWarning?: boolean;
}

interface TickerItem {
  id: string;
  text: string;
  type: "download" | "crash" | "update" | "release" | "info";
}

export function ActivityTrackerSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  // Mock data - replace with real API data
  const metrics: ActivityMetric[] = [
    {
      id: "total-apps",
      label: "Apps in Database",
      value: "4.8M",
      icon: "📱",
      color: "slate",
    },
    {
      id: "downloads",
      label: "Downloads Today",
      value: "12.4M",
      change: "+8.2%",
      icon: "📥",
      color: "green",
    },
    {
      id: "releases",
      label: "New Releases Today",
      value: "23,552",
      change: "+12.1%",
      icon: "✨",
      color: "cyan",
    },
    {
      id: "updates",
      label: "Updates Today",
      value: "156,789",
      change: "+5.4%",
      icon: "🔄",
      color: "amber",
    },
    {
      id: "crashes",
      label: "Crashes Today",
      value: "83,441",
      change: "+18.7%",
      icon: "⚠️",
      color: "red",
      isWarning: true,
    },
  ];

  // Ticker items that scroll
  const tickerItems: TickerItem[] = [
    {
      id: "1",
      text: "12.4M app downloads detected today",
      type: "download",
    },
    {
      id: "2",
      text: "83,441 apps crashed in the last 24 hours",
      type: "crash",
    },
    {
      id: "3",
      text: "23,552 apps released to production today",
      type: "release",
    },
    {
      id: "4",
      text: "156,789 apps updated to new versions today",
      type: "update",
    },
    {
      id: "5",
      text: "Gaming category sees 34.5% spike in downloads",
      type: "info",
    },
    {
      id: "6",
      text: "Finance apps report 28% lower crash rates this week",
      type: "info",
    },
    {
      id: "7",
      text: "4.8M apps actively monitored across all platforms",
      type: "info",
    },
    {
      id: "8",
      text: "India leads in new app releases with 8,234 today",
      type: "info",
    },
  ];

  // AI-generated activity summary
  const activitySummary = `Today's app ecosystem shows heightened activity with 12.4M downloads (+8.2%) and 23,552 new releases (+12.1%). However, crash rates have spiked to 83,441 incidents (+18.7%), warranting close monitoring across high-traffic apps.`;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500/10 border-green-500/20 text-green-400";
      case "cyan":
        return "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      case "amber":
        return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      case "red":
        return "bg-red-500/10 border-red-500/20 text-red-400";
      default:
        return "bg-slate-800/50 border-slate-700 text-slate-400";
    }
  };

  const getTickerColor = (type: string) => {
    switch (type) {
      case "crash":
        return "text-red-400";
      case "download":
        return "text-green-400";
      case "update":
        return "text-amber-400";
      case "release":
        return "text-cyan-400";
      default:
        return "text-slate-300";
    }
  };

  useEffect(() => {
    setCurrentTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    );

    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-6">
      {/* Scrolling Ticker */}
      <div className="relative overflow-hidden bg-slate-900/50 border-y border-slate-800 py-3">
        {/* Live indicator */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 bg-slate-950/90 pr-4">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
            LIVE
          </span>
        </div>

        {/* Scrolling content */}
        <div className="flex animate-scroll">
          {/* Duplicate items for seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-2 px-8 whitespace-nowrap"
            >
              <span className="text-slate-600">•</span>
              <span className={`text-sm font-medium ${getTickerColor(item.type)}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none" />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-50 mb-2">Today's App Activity</h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            A live pulse of how the app ecosystem is behaving right now.
          </p>
        </div>
        {currentTime && (
          <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg">
            <svg
              className="h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-mono text-slate-300">{currentTime}</span>
          </div>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`border rounded-xl p-5 transition-all hover:scale-105 ${getColorClasses(
              metric.color
            )} ${metric.isWarning ? "ring-2 ring-red-500/30 animate-pulse-slow" : ""}`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl" role="img" aria-label={metric.label}>
                {metric.icon}
              </span>
              {metric.change && (
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    metric.color === "red"
                      ? "bg-red-500/20 text-red-300"
                      : metric.color === "green"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-slate-800/50 text-slate-300"
                  }`}
                >
                  {metric.change}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold mb-1">{metric.value}</div>
            <div className="text-xs font-medium opacity-80">{metric.label}</div>
            {metric.isWarning && (
              <div className="mt-2 pt-2 border-t border-red-500/20">
                <span className="text-xs font-semibold text-red-300">⚠ Elevated</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Activity Summary */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm font-semibold text-slate-50">Activity Summary</h3>
              <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                AI Analysis
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{activitySummary}</p>
          </div>
        </div>
      </div>

      {/* Detailed Stats Table */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 bg-slate-900/50 border-b border-slate-800">
          <h3 className="text-sm font-semibold text-slate-50">Activity Breakdown</h3>
        </div>
        <div className="divide-y divide-slate-800">
          {/* Sample breakdown items */}
          <div className="px-6 py-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-slate-300">iOS App Store downloads</span>
            </div>
            <span className="text-sm font-semibold text-slate-50">7.2M</span>
          </div>
          <div className="px-6 py-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-slate-300">Google Play downloads</span>
            </div>
            <span className="text-sm font-semibold text-slate-50">5.2M</span>
          </div>
          <div className="px-6 py-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-slate-300">Critical crashes (iOS)</span>
            </div>
            <span className="text-sm font-semibold text-red-400">48,234</span>
          </div>
          <div className="px-6 py-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-slate-300">Critical crashes (Android)</span>
            </div>
            <span className="text-sm font-semibold text-red-400">35,207</span>
          </div>
          <div className="px-6 py-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm text-slate-300">Apps awaiting review</span>
            </div>
            <span className="text-sm font-semibold text-slate-50">12,445</span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-xs text-slate-500">
          Activity data refreshes every 5 minutes • All times in UTC
        </p>
      </div>

      {/* CSS for ticker animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

