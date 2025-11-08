# Backend Integration Guide - AppCortex Home Page

## ✅ What's Been Implemented

Your Home page now has a **fully wired backend** for the HeroIndex section!

### Files Created:
1. ✅ `app/api/home/summary/route.ts` - Backend API endpoint
2. ✅ `lib/homeApi.ts` - Frontend helper functions
3. ✅ `components/HeroIndexServer.tsx` - Server-rendered component
4. ✅ `app/page.tsx` - Updated to use server component

---

## 🔄 How It Works

```
┌─────────────┐
│ User visits │
│     /       │
└──────┬──────┘
       │
       ▼
┌──────────────────────┐
│  HomePage Component  │
│   (app/page.tsx)     │
└──────┬───────────────┘
       │
       │ renders
       ▼
┌──────────────────────────┐
│   HeroIndexServer        │
│ (Server Component)       │
│                          │
│ await getHomeSummary()   │
└──────┬───────────────────┘
       │
       │ calls
       ▼
┌──────────────────────────┐
│   lib/homeApi.ts         │
│                          │
│ fetch("/api/home/summary")│
└──────┬───────────────────┘
       │
       │ HTTP GET
       ▼
┌──────────────────────────┐
│ API Route Handler        │
│ app/api/home/summary/    │
│       route.ts           │
│                          │
│ Returns JSON with:       │
│ - index data             │
│ - stats                  │
└──────────────────────────┘
```

---

## 📊 Current API Response Structure

### GET `/api/home/summary`

**Response:**
```json
{
  "index": {
    "name": "ACX",
    "value": 1284.22,
    "changePercent": 1.8,
    "lastUpdated": "2025-11-06T10:00:00.000Z"
  },
  "stats": {
    "appsTracked": 4800000,
    "downloadsToday": 12400000,
    "newAppsToday": 12847,
    "topCategory": "Finance"
  }
}
```

---

## 🚀 How to Test

1. **Start your dev server:**
```bash
npm run dev
```

2. **Visit the homepage:**
```
http://localhost:3000
```

3. **Test the API directly:**
```
http://localhost:3000/api/home/summary
```

You should see JSON data returned!

---

## 🔌 Extending to Other Sections

Here's how to wire up the remaining sections following the same pattern:

### 📋 Remaining Sections to Connect:

1. **ProAppListsSection** - Curated app lists
2. **MarketActionSection** - Market indices
3. **GlobalMarketsSection** - Regional markets
4. **ActivityTrackerSection** - Live activity
5. **InsightsSection** - Latest insights

---

## 📝 Example: Wiring Up ProAppListsSection

### Step 1: Create API Route

**File:** `app/api/home/pro-lists/route.ts`

```tsx
import { NextResponse } from "next/server";

export interface ProApp {
  id: string;
  name: string;
  category: string;
  rankChange: number;
  installs: string;
  rating: number;
  trend: "up" | "down" | "stable";
  icon?: string;
}

export interface ProList {
  id: string;
  label: string;
  description: string;
  apps: ProApp[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "high-potential";

  // TODO: Replace with real database query
  const mockLists: Record<string, ProList> = {
    "high-potential": {
      id: "high-potential",
      label: "High Potential",
      description: "Apps showing strong early-stage growth signals...",
      apps: [
        {
          id: "1",
          name: "FitTrack Pro",
          category: "Health & Fitness",
          rankChange: 45.2,
          installs: "100K-500K",
          rating: 4.6,
          trend: "up",
          icon: "💪",
        },
        // ... more apps
      ],
    },
    // ... other lists
  };

  const list = mockLists[type];

  if (!list) {
    return NextResponse.json(
      { error: "List not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(list, { status: 200 });
}
```

### Step 2: Add Helper Function

**File:** `lib/homeApi.ts` (add to existing file)

```tsx
export interface ProApp {
  id: string;
  name: string;
  category: string;
  rankChange: number;
  installs: string;
  rating: number;
  trend: "up" | "down" | "stable";
  icon?: string;
}

export interface ProList {
  id: string;
  label: string;
  description: string;
  apps: ProApp[];
}

export async function getProAppList(type: string): Promise<ProList> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  const res = await fetch(`${baseUrl}/api/home/pro-lists?type=${type}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch pro list: ${type}`);
  }

  return res.json();
}
```

### Step 3: Create Server Component

**File:** `components/ProAppListsSectionServer.tsx`

```tsx
import { getProAppList } from "@/lib/homeApi";

export default async function ProAppListsSectionServer() {
  // Fetch data from backend
  const highPotential = await getProAppList("high-potential");
  
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-50">Pro App Lists</h2>
      
      {/* Render the list */}
      <div className="space-y-4">
        {highPotential.apps.map((app) => (
          <div key={app.id} className="border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold text-slate-50">{app.name}</h3>
            <p className="text-sm text-slate-400">{app.category}</p>
            <p className="text-sm text-green-400">+{app.rankChange}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### Step 4: Use in Home Page

```tsx
// app/page.tsx
import ProAppListsSectionServer from "@/components/ProAppListsSectionServer";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroIndexServer />
      <ProAppListsSectionServer />
      {/* ... other sections */}
    </div>
  );
}
```

---

## 🎯 Quick Reference: API Endpoints to Implement

| Section | Endpoint | Purpose |
|---------|----------|---------|
| ✅ Hero | `/api/home/summary` | ACX index + stats |
| 🔲 Pro Lists | `/api/home/pro-lists?type=...` | Curated app lists |
| 🔲 Market Action | `/api/home/market-action` | Sector indices |
| 🔲 Global Markets | `/api/home/global-markets` | Regional snapshots |
| 🔲 Activity | `/api/home/activity` | Live activity metrics |
| 🔲 Insights | `/api/home/insights` | Latest insights/reports |

---

## 🔄 From Mock Data to Real Data

When you're ready to connect real data sources, update the API route handlers:

```tsx
// app/api/home/summary/route.ts
export async function GET() {
  // Replace this:
  const mockData = { /* ... */ };

  // With this:
  const db = await connectToDatabase();
  const index = await db.query("SELECT * FROM indices WHERE name = 'ACX'");
  const stats = await db.query("SELECT * FROM daily_stats WHERE date = TODAY()");

  const realData: HomeSummaryResponse = {
    index: {
      name: index.name,
      value: index.current_value,
      changePercent: index.change_percent,
      lastUpdated: index.updated_at.toISOString(),
    },
    stats: {
      appsTracked: stats.total_apps,
      downloadsToday: stats.downloads_today,
      newAppsToday: stats.new_apps,
      topCategory: stats.top_category,
    },
  };

  return NextResponse.json(realData);
}
```

---

## 🎨 Benefits of This Architecture

1. ✅ **Server-Side Rendering** - Fast initial page load
2. ✅ **Type Safety** - TypeScript interfaces shared between frontend/backend
3. ✅ **Easy Mocking** - Develop frontend without waiting for real data
4. ✅ **Scalable** - Add more endpoints as needed
5. ✅ **Testable** - Each endpoint can be tested independently
6. ✅ **SEO Friendly** - Content rendered on server

---

## 🐛 Troubleshooting

### Error: "Failed to fetch home summary"

**Cause:** API route not found or server not running

**Solution:**
1. Ensure dev server is running: `npm run dev`
2. Check API route file exists: `app/api/home/summary/route.ts`
3. Test API directly: `http://localhost:3000/api/home/summary`

### Error: Module not found

**Cause:** Import path incorrect

**Solution:**
```tsx
// Use @ alias for root imports
import { getHomeSummary } from "@/lib/homeApi";

// Not relative paths like:
import { getHomeSummary } from "../../lib/homeApi";
```

### Data not updating

**Cause:** Caching

**Solution:**
```tsx
// In lib/homeApi.ts, ensure:
const res = await fetch(url, {
  cache: "no-store", // Disable caching for always-fresh data
});
```

---

## 📚 Next Steps

1. **Test the Hero section** - Visit `/` and see the backend data
2. **Test the API directly** - Visit `/api/home/summary` to see JSON
3. **Implement Pro Lists** - Follow the pattern above
4. **Implement Market Action** - Same pattern
5. **Implement remaining sections** - Repeat the process

---

## 💡 Pro Tips

### Use Environment Variables

Create `.env.local`:
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL=postgresql://...
API_KEY=your-api-key
```

### Add Error Boundaries

```tsx
// app/page.tsx
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroIndexServer />
      </Suspense>
    </div>
  );
}
```

### Add Loading States

```tsx
// components/HeroSkeleton.tsx
export function HeroSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-slate-800 rounded-xl" />
    </div>
  );
}
```

---

## ✅ You're All Set!

Your Home page now has:
- ✅ Backend API infrastructure
- ✅ Server-side rendering
- ✅ Type-safe data flow
- ✅ Clear pattern to follow

**Start your dev server and see it in action!** 🚀

```bash
npm run dev
```

Visit: `http://localhost:3000`

