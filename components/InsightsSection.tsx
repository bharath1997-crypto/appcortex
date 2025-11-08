"use client";

import Link from "next/link";

interface Insight {
  id: string;
  title: string;
  summary: string;
  tag: string;
  tagColor: "cyan" | "amber" | "green" | "purple" | "red";
  date: string;
  readTime: string;
  author?: string;
}

export function InsightsSection() {
  // Mock data - replace with real API data
  const insights: Insight[] = [
    {
      id: "1",
      title: "AI Tools Apps Surge 22% Week-on-Week",
      summary:
        "Productivity and creative AI apps are driving a sharp rise in downloads across the US and India. ChatGPT-style assistants lead the category with 3.2M new installs this week.",
      tag: "Market Trend",
      tagColor: "cyan",
      date: "2 hours ago",
      readTime: "3 min read",
      author: "AppCortex Analytics",
    },
    {
      id: "2",
      title: "Finance Apps Show Resilience Despite Market Volatility",
      summary:
        "Banking and investment apps maintain steady user retention rates at 68%, outperforming e-commerce by 12 percentage points. Premium subscription conversions up 5.4% month-over-month.",
      tag: "Category Report",
      tagColor: "amber",
      date: "5 hours ago",
      readTime: "4 min read",
      author: "Market Research Team",
    },
    {
      id: "3",
      title: "India Emerges as #1 Market for Education App Growth",
      summary:
        "Education apps in India saw 3.45% index growth today, led by test prep and language learning platforms. Student engagement metrics up 34% year-over-year with strong rural penetration.",
      tag: "Regional Focus",
      tagColor: "green",
      date: "1 day ago",
      readTime: "5 min read",
      author: "Global Markets Desk",
    },
  ];

  const getTagColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "amber":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "green":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "purple":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "red":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-slate-800/50 text-slate-400 border-slate-700";
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-50 mb-2">Latest Insights</h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            AI-powered analysis and market reports from the AppCortex research team.
          </p>
        </div>
        <Link
          href="/insights"
          className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          View all insights →
        </Link>
      </div>

      {/* Insights Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <Link
            key={insight.id}
            href={`/insights/${insight.id}`}
            className="group bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all hover:shadow-lg hover:shadow-cyan-500/5"
          >
            {/* Tag and Date */}
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded border ${getTagColorClasses(
                  insight.tagColor
                )}`}
              >
                {insight.tag}
              </span>
              <span className="text-xs text-slate-500">{insight.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
              {insight.title}
            </h3>

            {/* Summary */}
            <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
              {insight.summary}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <svg
                  className="h-3.5 w-3.5"
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
                <span>{insight.readTime}</span>
              </div>
              {insight.author && (
                <div className="text-xs text-slate-500">{insight.author}</div>
              )}
            </div>

            {/* Read more indicator */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all">
              <span>Read more</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Insight Banner (Optional) */}
      <div className="bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent uppercase tracking-wider">
                ⚡ Featured Analysis
              </span>
            </div>
            <h3 className="text-lg font-semibold text-slate-50 mb-2">
              Q4 2024 App Economy Report Now Available
            </h3>
            <p className="text-sm text-slate-300">
              Comprehensive analysis of app market trends, consumer behavior shifts, and
              category performance across 150+ countries.
            </p>
          </div>
          <Link
            href="/reports/q4-2024"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
          >
            Download Report
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Categories Filter (Optional Enhancement) */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500">Filter by:</span>
        {[
          "All Insights",
          "Market Trends",
          "Category Reports",
          "Regional Focus",
          "AI Analysis",
        ].map((category) => (
          <button
            key={category}
            className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
              category === "All Insights"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-300 border border-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Newsletter Signup (Optional) */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-slate-50 mb-1">
              Get insights delivered to your inbox
            </h3>
            <p className="text-sm text-slate-400">
              Weekly market analysis and AI-powered reports from AppCortex.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

