// EXAMPLE: app/top-charts/free/usa/page.tsx
// This shows how ONE of your 65 pages would look using the template system

import { DataListingPage, SummaryCard } from "@/components/templates/DataListingPage";
import Link from "next/link";
import { Badge } from "@/components/ui";

export default async function TopFreeAppsUSAPage() {
  // TODO: Replace with real API call
  // const apps = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/top-free?country=us`).then(r => r.json());
  
  // Mock data for now
  const mockApps = [
    {
      id: "1",
      rank: 1,
      name: "ChatGPT",
      developer: "OpenAI",
      category: "AI Tools",
      icon: "🤖",
      rating: 4.8,
      downloads: "10M+",
      trend: 5.2,
      isNew: false,
    },
    {
      id: "2",
      rank: 2,
      name: "Instagram",
      developer: "Meta",
      category: "Social",
      icon: "📷",
      rating: 4.6,
      downloads: "1B+",
      trend: -0.8,
      isNew: false,
    },
    {
      id: "3",
      rank: 3,
      name: "TikTok",
      developer: "ByteDance",
      category: "Social",
      icon: "🎵",
      rating: 4.7,
      downloads: "1B+",
      trend: 2.1,
      isNew: false,
    },
    {
      id: "4",
      rank: 4,
      name: "Perplexity AI",
      developer: "Perplexity",
      category: "AI Tools",
      icon: "🔍",
      rating: 4.9,
      downloads: "5M+",
      trend: 12.5,
      isNew: true,
    },
  ];

  // Define columns for the table
  const columns = [
    { 
      key: "rank", 
      label: "#",
      render: (row: typeof mockApps[0]) => (
        <span className="text-slate-400 font-mono text-xs">#{row.rank}</span>
      )
    },
    {
      key: "name",
      label: "App",
      render: (row: typeof mockApps[0]) => (
        <Link 
          href={`/app/${row.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex items-center gap-3 group"
        >
          <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg flex-shrink-0">
            {row.icon}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-50 group-hover:text-cyan-400 transition-colors truncate">
                {row.name}
              </span>
              {row.isNew && (
                <Badge variant="rose">NEW</Badge>
              )}
            </div>
            <span className="text-xs text-slate-400 truncate">{row.developer}</span>
          </div>
        </Link>
      ),
    },
    { 
      key: "category", 
      label: "Category",
      render: (row: typeof mockApps[0]) => (
        <Badge variant="cyan">{row.category}</Badge>
      )
    },
    { 
      key: "rating", 
      label: "Rating",
      render: (row: typeof mockApps[0]) => (
        <span className="text-amber-400 text-sm">⭐ {row.rating}</span>
      )
    },
    { 
      key: "downloads", 
      label: "Downloads" 
    },
    {
      key: "trend",
      label: "7-Day Trend",
      render: (row: typeof mockApps[0]) => (
        <span
          className={
            row.trend >= 0 
              ? "text-emerald-400 text-sm font-medium" 
              : "text-red-400 text-sm font-medium"
          }
        >
          {row.trend >= 0 ? "▲" : "▼"} {Math.abs(row.trend)}%
        </span>
      ),
    },
  ];

  // Summary cards at the top
  const summaryCards = [
    <SummaryCard key="1" label="Country" value="USA 🇺🇸" />,
    <SummaryCard key="2" label="List Type" value="Top Free" />,
    <SummaryCard key="3" label="Apps in list" value={mockApps.length} />,
    <SummaryCard key="4" label="Last updated" value="5 min ago" />,
  ];

  // Filters
  const filters = (
    <div className="flex flex-wrap gap-4 items-center text-sm">
      <label className="flex items-center gap-2">
        <span className="text-slate-400">Category:</span>
        <select className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500">
          <option>All Categories</option>
          <option>AI Tools</option>
          <option>Games</option>
          <option>Finance</option>
          <option>Social</option>
          <option>Productivity</option>
        </select>
      </label>
      <label className="flex items-center gap-2">
        <span className="text-slate-400">Platform:</span>
        <select className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500">
          <option>All Platforms</option>
          <option>iOS</option>
          <option>Android</option>
        </select>
      </label>
      <label className="flex items-center gap-2">
        <span className="text-slate-400">Time Range:</span>
        <select className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </label>
    </div>
  );

  // Header actions
  const actions = (
    <>
      <button className="text-sm border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 px-4 py-2 rounded-lg transition-colors">
        📊 Export CSV
      </button>
      <button className="text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 rounded-lg transition-colors">
        🔔 Set Alert
      </button>
    </>
  );

  return (
    <DataListingPage
      title="Top Free Apps in USA"
      description="Live ranking of free apps on iOS and Android in the United States. Auto-updated every 3 hours."
      actions={actions}
      summaryCards={summaryCards}
      filters={filters}
      columns={columns}
      rows={mockApps}
      emptyMessage="No apps found matching your filters."
    />
  );
}

/*
  🎯 This pattern scales to ALL your ranking pages:
  
  - /top-charts/free/india → Change country, same template
  - /top-charts/paid/uae → Change list type, same template
  - /top-charts/new/global → Change filters, same template
  - /category/games/top-apps → Change API endpoint, same template
  
  Total lines of unique code per page: ~30 (just the config)
  Total pages you can generate: 65+ 🚀
*/

