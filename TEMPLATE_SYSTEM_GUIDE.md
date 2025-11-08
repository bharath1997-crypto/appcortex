# 🏗️ AppCortex Template System Guide

## Overview

We've created **3 reusable page templates** that can power all 65+ public pages. Instead of hand-designing each page, you configure a template with different data.

---

## 📐 Template Architecture

### **Template A: DataListingPage** 
**Use for:** Rankings, top charts, lists, tables

**Files:**
- `components/templates/DataListingPage.tsx`
- `components/templates/SummaryCard.tsx`

**Pages that use this:**
- Top Free Apps (by country/category)
- Top Paid Apps (by country/category)
- Top New Apps
- Top Grossing Apps
- Developer Rankings
- SDK Usage Rankings
- Category Rankings

**Example:**
```tsx
import { DataListingPage, SummaryCard } from "@/components/templates/DataListingPage";

export default function TopFreeAppsIndia() {
  const columns = [
    { key: "rank", label: "#" },
    { key: "name", label: "App", render: (row) => <AppCell app={row} /> },
    { key: "category", label: "Category" },
    { key: "downloads", label: "Downloads" },
  ];

  const summaryCards = [
    <SummaryCard key="1" label="Country" value="India 🇮🇳" />,
    <SummaryCard key="2" label="Apps" value="100" />,
  ];

  return (
    <DataListingPage
      title="Top Free Apps in India"
      description="Live rankings updated every 3 hours"
      columns={columns}
      rows={apps}
      summaryCards={summaryCards}
    />
  );
}
```

---

### **Template B: DetailInsightPage**
**Use for:** Individual app/category/developer/SDK pages

**Files:**
- `components/templates/DetailInsightPage.tsx`

**Pages that use this:**
- App Detail (`/app/[slug]`)
- Category Detail (`/category/[slug]`)
- Developer Profile (`/developer/[slug]`)
- SDK Detail (`/sdk/[slug]`)

**Example:**
```tsx
import { DetailInsightPage } from "@/components/templates/DetailInsightPage";

export default function AppDetailPage({ app }) {
  return (
    <DetailInsightPage
      title={app.name}
      subtitle={`By ${app.developer}`}
      badge="Top 100"
      leftColumn={
        <>
          <PerformanceChart />
          <ReviewsSection />
        </>
      }
      rightColumn={
        <>
          <AppStats />
          <SimilarApps />
        </>
      }
    />
  );
}
```

---

### **Template C: ArticlePage**
**Use for:** Blog posts, reports, insights, static content

**Files:**
- `components/templates/ArticlePage.tsx`

**Pages that use this:**
- Insight Articles (`/insights/[slug]`)
- Developer Stories (`/developers/story/[slug]`)
- Research Reports
- About, FAQ, Privacy, Terms pages

**Example:**
```tsx
import { ArticlePage } from "@/components/templates/ArticlePage";

export default function InsightArticle() {
  return (
    <ArticlePage
      title="AI Apps Surge 22% in Q4 2024"
      tag="Market Trend"
      date="Nov 7, 2024"
      author="AppCortex Team"
      readingTime="5"
    >
      <p>Market analysis shows AI-powered apps...</p>
      <h2>Key Findings</h2>
      <ul>
        <li>AI tools grew 22% quarter-over-quarter</li>
        <li>ChatGPT competitors gaining traction</li>
      </ul>
    </ArticlePage>
  );
}
```

---

## 🗂️ Proposed File Structure for 65+ Pages

```
app/
├── (public)/              # Public-facing pages
│   ├── layout.tsx         # Uses your existing TopBar + FooterBar
│   ├── page.tsx           # Home page (custom)
│   │
│   ├── market/
│   │   ├── page.tsx       # Market dashboard (custom)
│   │   └── [region]/
│   │       └── page.tsx   # Market by region (DataListingPage)
│   │
│   ├── top-charts/        # All rankings use DataListingPage
│   │   ├── free/
│   │   │   ├── global/
│   │   │   │   └── page.tsx
│   │   │   ├── usa/
│   │   │   │   └── page.tsx
│   │   │   ├── india/
│   │   │   │   └── page.tsx
│   │   │   └── [...country]/
│   │   │       └── page.tsx
│   │   ├── paid/
│   │   │   └── [country]/
│   │   │       └── page.tsx
│   │   ├── new/
│   │   │   └── [country]/
│   │   │       └── page.tsx
│   │   └── grossing/
│   │       └── [country]/
│   │           └── page.tsx
│   │
│   ├── category/
│   │   ├── page.tsx       # All categories (DataListingPage)
│   │   └── [slug]/
│   │       ├── page.tsx   # Category detail (DetailInsightPage)
│   │       └── top-apps/
│   │           └── page.tsx  # Top in category (DataListingPage)
│   │
│   ├── app/
│   │   └── [slug]/
│   │       └── page.tsx   # App detail (DetailInsightPage) ✅ Already exists!
│   │
│   ├── developer/
│   │   ├── page.tsx       # All developers (DataListingPage)
│   │   └── [slug]/
│   │       └── page.tsx   # Developer profile (DetailInsightPage)
│   │
│   ├── sdk/
│   │   ├── page.tsx       # All SDKs (DataListingPage)
│   │   └── [slug]/
│   │       └── page.tsx   # SDK detail (DetailInsightPage)
│   │
│   ├── insights/
│   │   ├── page.tsx       # Insights hub (custom) ✅ Already exists!
│   │   └── [slug]/
│   │       └── page.tsx   # Article (ArticlePage) ✅ Already exists!
│   │
│   ├── explore/
│   │   └── page.tsx       # Explore (custom) ✅ Already exists!
│   │
│   ├── developers/
│   │   └── page.tsx       # Developers hub (custom) ✅ Already exists!
│   │
│   ├── pricing/
│   │   └── page.tsx       # Pricing (custom) ✅ Already exists!
│   │
│   ├── about/
│   │   └── page.tsx       # About (ArticlePage) ✅ Already exists!
│   │
│   └── auth/
│       └── page.tsx       # Auth (custom) ✅ Already exists!
│
└── components/
    └── templates/
        ├── DataListingPage.tsx      ✅ Created
        ├── DetailInsightPage.tsx    ✅ Created
        └── ArticlePage.tsx          ✅ Created
```

---

## 📊 Mapping Your Existing 8 Pages

| Current Page | Template Used | Status |
|--------------|---------------|--------|
| **Home** (`/`) | Custom (unique layout) | ✅ Keep as is |
| **Market** (`/market`) | Custom (dashboard) | ✅ Keep as is |
| **Explore** (`/explore`) | Custom (search + grid) | ✅ Keep as is |
| **Insights** (`/insights`) | Custom (hub) | ✅ Keep as is |
| **Developers** (`/developers`) | Custom (community hub) | ✅ Keep as is |
| **Pricing** (`/pricing`) | Custom (conversion page) | ✅ Keep as is |
| **Auth** (`/auth`) | Custom (forms) | ✅ Keep as is |
| **About** (`/about`) | **ArticlePage** | 🔄 Can refactor |
| **App Detail** (`/app/[slug]`) | **DetailInsightPage** | 🔄 Can refactor |
| **Insight Detail** (`/insights/[slug]`) | **ArticlePage** | 🔄 Can refactor |

---

## 🚀 How to Scale to 65+ Pages

### **Step 1: Create Dynamic Routes**

For "Top Free Apps by Country" (30+ countries):
```tsx
// app/top-charts/free/[country]/page.tsx
import { DataListingPage, SummaryCard } from "@/components/templates/DataListingPage";

export default async function TopFreeByCountry({ params }: { params: { country: string } }) {
  // Fetch data from API
  const apps = await fetch(`/api/top-free?country=${params.country}`).then(r => r.json());
  
  const columns = [
    { key: "rank", label: "#" },
    { key: "name", label: "App" },
    { key: "category", label: "Category" },
    { key: "downloads", label: "Downloads" },
  ];

  const summaryCards = [
    <SummaryCard key="1" label="Country" value={params.country.toUpperCase()} />,
    <SummaryCard key="2" label="Apps" value={apps.length} />,
  ];

  return (
    <DataListingPage
      title={`Top Free Apps in ${params.country.toUpperCase()}`}
      description="Live rankings updated every 3 hours"
      columns={columns}
      rows={apps}
      summaryCards={summaryCards}
    />
  );
}

// This single file generates 30+ pages dynamically!
```

### **Step 2: Create API Endpoints**

```
app/api/
├── top-free/route.ts          # GET /api/top-free?country=us
├── top-paid/route.ts          # GET /api/top-paid?country=in
├── top-new/route.ts           # GET /api/top-new?country=ae
├── developers/route.ts        # GET /api/developers
└── categories/route.ts        # GET /api/categories
```

### **Step 3: Configure Each Page**

Each page is just:
1. **Import template** (`DataListingPage`, `DetailInsightPage`, or `ArticlePage`)
2. **Fetch data** from API
3. **Configure template** (title, columns, data)
4. **Done!**

---

## 🎯 Benefits of This System

✅ **Consistency**: All listing pages look the same
✅ **Maintainability**: Fix bug in template = fixed everywhere
✅ **Speed**: Create new page in 10 minutes
✅ **Scalability**: 65+ pages with 3 templates
✅ **Backend-ready**: Just swap mock data for real API calls
✅ **SEO-friendly**: Each page has unique title/description
✅ **Responsive**: Templates handle mobile automatically

---

## 📋 Next Steps

1. **✅ Templates created** (DataListingPage, DetailInsightPage, ArticlePage)
2. **TODO: Create API endpoints** for each data type
3. **TODO: Create dynamic routes** for top charts
4. **TODO: Refactor existing detail pages** to use templates (optional)
5. **TODO: Add filters/search** to DataListingPage
6. **TODO: Add pagination** to DataListingPage

---

## 💡 Example: Creating 10 New Pages in 30 Minutes

1. Create `/top-charts/free/[country]/page.tsx` with DataListingPage
2. Create API endpoint `/api/top-free?country=X`
3. Done! You now have pages for:
   - `/top-charts/free/usa`
   - `/top-charts/free/india`
   - `/top-charts/free/uae`
   - `/top-charts/free/uk`
   - ... (30+ countries)

All using the same template, just different data! 🎉

---

**Status:** ✅ Template system ready for production scaling!

