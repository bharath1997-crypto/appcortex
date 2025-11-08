# 🎯 AppCortex Navigation - Real-World Examples

This document shows **exactly how to implement** the navigation rules in your actual components.

---

## 📱 Example 1: Home Page "Pro App List"

### Before (inconsistent):
```tsx
// ❌ OLD WAY - Different developers might use different patterns
<div>
  <a href={`/apps/${app.id}`}>{app.name}</a>
  <span>by <a href={`/devs/${app.developer.id}`}>{app.developer.name}</a></span>
</div>
```

### After (consistent):
```tsx
// ✅ NEW WAY - Everyone uses the same helper components
import { AppLink, DeveloperLink } from "@/components/links";

<div className="flex items-center gap-2">
  <AppLink 
    app={app} 
    className="font-medium text-lg"
  />
  <DeveloperLink 
    developer={app.developer} 
    showPrefix 
    className="text-sm"
  />
</div>

// Renders: "FitTrack Pro by HealthCo Inc"
// Links: /app/fittrack-pro and /developer/healthco-inc
```

---

## 💡 Example 2: Home Page "AI Snapshot of the Day"

### Scenario:
You have 3 AI insight cards on the home page. Each card should:
1. Link to the full article when clicked
2. Have a "View More AI Insights" button at the bottom

### Implementation:
```tsx
import { InsightLink, ViewMoreButton } from "@/components/links";

export function AiSnapshotOfDay() {
  const aiInsights = [
    {
      slug: "ai-tools-surge-19-percent",
      title: "AI Tools apps surge 19% in 7 days",
      summary: "ChatGPT competitors gain traction...",
      category: "AI Insights",
    },
    {
      slug: "perplexity-overtakes-copilot",
      title: "Perplexity overtakes Microsoft Copilot",
      summary: "Search AI battle heats up...",
      category: "AI Insights",
    },
    {
      slug: "gemini-mobile-adoption",
      title: "Gemini sees 340% mobile adoption increase",
      summary: "Google's AI assistant gains momentum...",
      category: "AI Insights",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-50">
        AI Snapshot of the Day
      </h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {aiInsights.map((insight) => (
          <InsightLink 
            key={insight.slug} 
            insight={insight} 
            asCard
          >
            <div className="flex items-start gap-2">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {insight.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {insight.summary}
                </p>
              </div>
            </div>
          </InsightLink>
        ))}
      </div>

      <div className="text-center mt-6">
        <ViewMoreButton category="ai" label="View All AI Insights →" />
      </div>
    </section>
  );
}

// When user clicks a card: goes to /insight/ai-tools-surge-19-percent
// When user clicks "View All": goes to /insights?category=ai
```

---

## 📊 Example 3: Apps Tab "Top 10 by Category"

### Scenario:
Show top 10 apps in AI Tools category. Each app should:
1. Link to app detail page
2. Show category badge (also linkable)
3. Show developer (also linkable)

### Implementation:
```tsx
import { AppLink, CategoryLink, DeveloperLink } from "@/components/links";

export function TopAppsInCategory() {
  const apps = [
    {
      rank: 1,
      name: "ChatGPT",
      slug: "chatgpt",
      developer: { name: "OpenAI", slug: "openai" },
      category: { name: "AI Tools", slug: "ai-tools" },
      rating: 4.8,
      downloads: "10M+",
    },
    // ... more apps
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-50">
          Top 10 Apps in AI Tools
        </h3>
        <CategoryLink 
          category={{ name: "AI Tools", slug: "ai-tools" }}
          className="text-sm"
        >
          View Category →
        </CategoryLink>
      </div>

      <div className="space-y-2">
        {apps.map((app) => (
          <div
            key={app.slug}
            className="flex items-center gap-3 p-3 border border-slate-800 rounded-lg hover:border-cyan-400 transition-colors"
          >
            {/* Rank */}
            <span className="text-slate-400 font-mono text-xs w-6">
              #{app.rank}
            </span>

            {/* App Icon */}
            <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center">
              🤖
            </div>

            {/* App Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <AppLink 
                  app={app} 
                  className="font-medium truncate"
                />
                <CategoryLink 
                  category={app.category} 
                  asBadge 
                />
              </div>
              <DeveloperLink 
                developer={app.developer} 
                showPrefix 
                className="text-xs"
              />
            </div>

            {/* Stats */}
            <div className="text-right text-xs">
              <div className="text-amber-400">⭐ {app.rating}</div>
              <div className="text-slate-400">{app.downloads}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Links:
// - App name → /app/chatgpt
// - Category badge → /category/ai-tools
// - Developer name → /developer/openai
// - "View Category" → /category/ai-tools
```

---

## 📰 Example 4: Insights Page with Category Filter

### Scenario:
Main insights listing page with:
1. Category dropdown filter at top
2. Grid of insight cards below
3. Each card links to full article

### Implementation:
```tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { InsightLink, ViewMoreButton } from "@/components/links";
import { Badge } from "@/components/ui";

const CATEGORIES = [
  { key: "all", label: "All Insights" },
  { key: "ai", label: "AI Insights" },
  { key: "monetization", label: "Monetization" },
  { key: "market", label: "Market Trends" },
  { key: "developer-stories", label: "Developer Stories" },
  { key: "research", label: "Research" },
];

export default function InsightsPage({ insights }: { insights: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  // Filter insights by category
  const filtered =
    category === "all"
      ? insights
      : insights.filter((i) => i.categoryKey === category);

  return (
    <div className="space-y-6">
      {/* Header with Category Filter */}
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-50">
            Insights & Analysis
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl">
            Market trends, monetization analysis, developer stories, and research reports.
          </p>
        </div>

        {/* Category Dropdown */}
        <div className="flex items-center gap-3">
          <label className="text-sm text-slate-400">Filter by:</label>
          <select
            value={category}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "all") {
                router.push("/insights");
              } else {
                router.push(`/insights?category=${value}`);
              }
            }}
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Results Count */}
      <div className="text-sm text-slate-400">
        Showing {filtered.length} {category === "all" ? "" : category} insights
      </div>

      {/* Insights Grid */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((insight) => (
          <InsightLink key={insight.slug} insight={insight} asCard>
            <div className="space-y-2">
              <Badge variant="cyan">{insight.categoryLabel}</Badge>
              <h3 className="text-base font-semibold text-slate-50">
                {insight.title}
              </h3>
              <p className="text-sm text-slate-300 line-clamp-2">
                {insight.summary}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{insight.date}</span>
                <span>•</span>
                <span>{insight.readMinutes} min read</span>
              </div>
            </div>
          </InsightLink>
        ))}
      </section>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          No insights found in this category.
        </div>
      )}
    </div>
  );
}

// URL behavior:
// - /insights → Shows all insights
// - /insights?category=monetization → Shows only monetization insights
// - User changes dropdown → URL updates automatically
// - User clicks card → Goes to /insight/[slug]
```

---

## 🎨 Example 5: Monetization Section with "View More"

### Scenario:
Home or Insights page has a "Monetization Reports" section with:
1. Title
2. 3 featured reports as cards
3. "View More Monetization Analysis" button

### Implementation:
```tsx
import { InsightLink, ViewMoreButton } from "@/components/links";
import { Badge } from "@/components/ui";

export function MonetizationSection() {
  const reports = [
    {
      slug: "subscription-model-report-q4-2025",
      title: "Subscription Model Revenue Report Q4 2025",
      summary: "How top apps monetize with subscriptions...",
      categoryLabel: "Monetization",
      date: "Nov 5, 2024",
      readMinutes: 8,
    },
    {
      slug: "in-app-purchases-gaming",
      title: "In-App Purchases Dominate Gaming Revenue",
      summary: "90% of gaming revenue comes from IAPs...",
      categoryLabel: "Monetization",
      date: "Nov 3, 2024",
      readMinutes: 6,
    },
    {
      slug: "freemium-vs-paid-2025",
      title: "Freemium vs Paid: 2025 Comparison",
      summary: "Which monetization strategy wins in 2025?",
      categoryLabel: "Monetization",
      date: "Nov 1, 2024",
      readMinutes: 10,
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-50">
          💰 Monetization Reports
        </h2>
        <ViewMoreButton category="monetization" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <InsightLink key={report.slug} insight={report} asCard>
            <div className="space-y-2">
              <Badge variant="emerald">{report.categoryLabel}</Badge>
              <h3 className="text-sm font-semibold text-slate-50">
                {report.title}
              </h3>
              <p className="text-xs text-slate-400">{report.summary}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{report.date}</span>
                <span>•</span>
                <span>{report.readMinutes} min</span>
              </div>
            </div>
          </InsightLink>
        ))}
      </div>
    </section>
  );
}

// Links:
// - Each card → /insight/[slug]
// - "View More" button → /insights?category=monetization
```

---

## 🔄 Example 6: App Detail Page with Related Apps

### Scenario:
App detail page showing:
1. Main app info
2. "Similar Apps" sidebar
3. Each similar app should link to its detail page

### Implementation:
```tsx
import { AppLink, CategoryLink, DeveloperLink } from "@/components/links";
import { DetailInsightPage } from "@/components/templates/DetailInsightPage";

export default function AppDetailPage({ app, similarApps }) {
  return (
    <DetailInsightPage
      title={app.name}
      subtitle={
        <div className="flex items-center gap-2">
          <DeveloperLink developer={app.developer} showPrefix />
          <span>•</span>
          <CategoryLink category={app.category} />
        </div>
      }
      leftColumn={
        <>
          {/* Main app content */}
          <div>App charts, reviews, etc...</div>
        </>
      }
      rightColumn={
        <>
          {/* Similar Apps Sidebar */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-100">
              Similar Apps
            </h3>
            <div className="space-y-2">
              {similarApps.map((similarApp) => (
                <div
                  key={similarApp.slug}
                  className="flex items-center gap-3 p-2 border border-slate-800 rounded-lg hover:border-cyan-400 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-800">
                    {/* Icon */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <AppLink
                      app={similarApp}
                      className="text-sm font-medium truncate block"
                    />
                    <DeveloperLink
                      developer={similarApp.developer}
                      showPrefix
                      className="text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    />
  );
}

// All similar app links → /app/[slug]
// Developer links → /developer/[slug]
// Category link → /category/[slug]
```

---

## 🎯 Quick Migration Checklist

### For Existing Components:

1. **Find all app links:**
   ```bash
   # Search for patterns like:
   <Link href={`/apps/${...}`}>
   <Link href={`/app/${...}`}>
   <a href={`/application/${...}`}>
   ```
   
2. **Replace with AppLink:**
   ```tsx
   // Before
   <Link href={`/apps/${app.id}`}>{app.name}</Link>
   
   // After
   <AppLink app={{ slug: app.slug, name: app.name }} />
   ```

3. **Find all insight links:**
   ```bash
   # Search for patterns like:
   <Link href={`/insights/${...}`}>
   <Link href={`/article/${...}`}>
   ```
   
4. **Replace with InsightLink:**
   ```tsx
   // Before
   <Link href={`/article/${insight.slug}`}>{insight.title}</Link>
   
   // After
   <InsightLink insight={insight} />
   ```

5. **Find all "View More" buttons:**
   ```bash
   # Search for text like:
   "View More"
   "See All"
   "Explore More"
   ```
   
6. **Replace with ViewMoreButton:**
   ```tsx
   // Before
   <Link href="/monetization">View More →</Link>
   
   // After
   <ViewMoreButton category="monetization" />
   ```

---

## ✅ Benefits You Get

### ✅ **Consistency**
All app links use the same URL pattern across the entire site

### ✅ **Maintainability**
If you need to change the URL pattern, update one component instead of 50 files

### ✅ **Type Safety**
Helper components enforce the correct data structure

### ✅ **Developer Experience**
New team members can't create inconsistent links

### ✅ **SEO**
Search engines see one consistent URL structure

---

## 📞 Need Help?

- **Not sure which component to use?** → Check [`NAVIGATION_RULES.md`](./NAVIGATION_RULES.md)
- **Want to create a new link type?** → Add it to the rules document first
- **Found an old link pattern?** → Create an issue or update it using the checklist above

---

**Status:** ✅ Navigation system with helper components ready to use!

