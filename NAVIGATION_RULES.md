# 🧭 AppCortex Navigation Rules - Single Source of Truth

## Overview

This document defines **exactly where every link should go** across AppCortex. Follow these rules to ensure **consistent, predictable navigation** for users.

---

## 🎯 The Three Core Pages

Every interactive element (link, card, button) in AppCortex leads to one of these three destinations:

### **1. App Detail Page** 📱
**URL Pattern:** `/app/[slug]`  
**Purpose:** Show everything about ONE specific app  
**Examples:**
- `/app/chatgpt`
- `/app/fittrack-pro`
- `/app/instagram`

### **2. Insight Article Page** 📰
**URL Pattern:** `/insight/[slug]`  
**Purpose:** Show ONE specific analysis, report, or story  
**Examples:**
- `/insight/ai-tools-surge-19-percent`
- `/insight/monetization-subscription-apps-2025`
- `/insight/indie-dev-success-story`

### **3. Insights Listing Page** 📊
**URL:** `/insights` (with optional `?category=xyz`)  
**Purpose:** Browse ALL insights with category filter  
**Examples:**
- `/insights` (all insights)
- `/insights?category=monetization`
- `/insights?category=ai`
- `/insights?category=developer-stories`

---

## 📍 Navigation Rules by Section

### **RULE 1: App Names → App Detail Page**

**Applies to:**
- Home page "Pro App Lists"
- Explore/Apps tab search results
- Top 10 by category
- Similar apps sections
- Developer app portfolios
- Any list showing app names

**Behavior:**  
✅ **Always link to:** `/app/[slug]`

**Examples:**

| Location | Element | Destination |
|----------|---------|-------------|
| Home → Pro App List | "FitTrack Pro" | `/app/fittrack-pro` |
| Apps → Top AI Tools | "ChatGPT" | `/app/chatgpt` |
| Market → Top Free USA | "Instagram" | `/app/instagram` |
| Developer Profile | "Their App XYZ" | `/app/their-app-xyz` |
| App Detail → Similar Apps | "Competitor ABC" | `/app/competitor-abc` |

**Code Pattern:**
```tsx
// ✅ CORRECT
<Link href={`/app/${app.slug}`}>
  {app.name}
</Link>

// ❌ WRONG - don't create custom app URLs
<Link href={`/apps/detail/${app.id}`}>  // NO
<Link href={`/application/${app.slug}`}>  // NO
```

---

### **RULE 2: Insight/Analysis Cards → Insight Article Page**

**Applies to:**
- Home "AI Snapshot of the Day"
- Insights page headline cards
- Monetization reports
- Category analysis cards
- Developer stories
- Research reports
- "Featured Insight" blocks

**Behavior:**  
✅ **Always link to:** `/insight/[slug]`

**Examples:**

| Location | Element | Destination |
|----------|---------|-------------|
| Home → AI Snapshot | "AI Tools surge 19% in 7 days" | `/insight/ai-tools-surge-19-percent` |
| Insights → Monetization | "Subscription Model Report Q4" | `/insight/subscription-model-report-q4` |
| Insights → Featured | "Gaming Apps Revenue Analysis" | `/insight/gaming-apps-revenue-analysis` |
| Developers → Stories | "How I Got 1M Downloads" | `/insight/how-i-got-1m-downloads` |
| Market → Analysis | "US Market Breakdown" | `/insight/us-market-breakdown` |

**Code Pattern:**
```tsx
// ✅ CORRECT
<Link href={`/insight/${insight.slug}`}>
  <Card>
    <h3>{insight.title}</h3>
    <p>{insight.summary}</p>
  </Card>
</Link>

// ❌ WRONG - don't use /article, /report, /analysis
<Link href={`/article/${insight.slug}`}>  // NO
<Link href={`/insights/${insight.slug}`}>  // NO (plural)
```

---

### **RULE 3: "View More" Buttons → Insights Listing with Category**

**Applies to:**
- Home "AI Snapshot" → "View more AI insights"
- Insights "Monetization" section → "View all monetization analysis"
- Insights "Developer Stories" → "View more stories"
- Market "Analysis" section → "View all market analysis"
- Any "See all", "View more", "Explore more" buttons for insights

**Behavior:**  
✅ **Always link to:** `/insights?category=[category-key]`

**Examples:**

| Location | Button Text | Destination |
|----------|-------------|-------------|
| Home → AI Snapshot | "View More AI Insights →" | `/insights?category=ai` |
| Insights → Monetization | "View All Monetization Analysis →" | `/insights?category=monetization` |
| Insights → Dev Stories | "Read More Developer Stories →" | `/insights?category=developer-stories` |
| Market → Analysis | "View All Market Analysis →" | `/insights?category=market` |
| About → Research | "Explore Our Research →" | `/insights?category=research` |

**Category Keys (Standardized):**
```
ai                  - AI Insights / AI Snapshot of the Day
monetization        - Monetization reports & analysis
market              - Market trends & analysis
developer-stories   - Developer success stories
research            - Research reports & academic insights
category            - Category-specific analysis
regional            - Regional market insights
```

**Code Pattern:**
```tsx
// ✅ CORRECT
<Link href="/insights?category=monetization">
  View More Monetization Analysis →
</Link>

// Also correct (programmatic)
<Link href={`/insights?category=${section.categoryKey}`}>
  View More {section.label} →
</Link>

// ❌ WRONG - don't create separate listing pages
<Link href="/monetization">  // NO
<Link href="/insights/monetization">  // NO
<Link href="/analysis/monetization">  // NO
```

---

### **RULE 4: Category Names → Category Detail (if implemented)**

**Applies to:**
- Home "Top Categories" section
- Market "Category Trends"
- Any category tag/pill

**Behavior:**  
✅ **Link to:** `/category/[slug]`

**Examples:**

| Location | Element | Destination |
|----------|---------|-------------|
| Home → Categories | "AI Tools" badge | `/category/ai-tools` |
| Market → Trends | "Games" category | `/category/games` |
| App Detail | "Finance" category tag | `/category/finance` |

**Code Pattern:**
```tsx
// ✅ CORRECT
<Link href={`/category/${category.slug}`}>
  <Badge>{category.name}</Badge>
</Link>
```

---

### **RULE 5: Developer Names → Developer Profile (if implemented)**

**Applies to:**
- App detail "by Developer XYZ"
- Developer rankings
- Developer stories author

**Behavior:**  
✅ **Link to:** `/developer/[slug]`

**Examples:**

| Location | Element | Destination |
|----------|---------|-------------|
| App Detail | "by OpenAI" | `/developer/openai` |
| Developers → Leaderboard | "#1 Epic Games" | `/developer/epic-games` |
| Insight Article | "Author: John Smith" | `/developer/john-smith` |

**Code Pattern:**
```tsx
// ✅ CORRECT
<Link href={`/developer/${developer.slug}`}>
  by {developer.name}
</Link>
```

---

## 🔗 Helper Components (Use These!)

To enforce these rules, **always use these helper components** instead of raw `<Link>` tags:

### **AppLink** - For linking to apps
```tsx
// components/links/AppLink.tsx
import Link from "next/link";

export function AppLink({ 
  app, 
  children, 
  className 
}: { 
  app: { slug: string; name: string }; 
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link 
      href={`/app/${app.slug}`}
      className={className || "text-slate-50 hover:text-cyan-400 transition-colors"}
    >
      {children || app.name}
    </Link>
  );
}

// Usage:
<AppLink app={app} />
<AppLink app={app} className="font-bold">Custom Text</AppLink>
```

---

### **InsightLink** - For linking to insights
```tsx
// components/links/InsightLink.tsx
import Link from "next/link";
import { Card } from "@/components/ui";

export function InsightLink({ 
  insight, 
  children,
  asCard = false 
}: { 
  insight: { slug: string; title: string; summary?: string }; 
  children?: React.ReactNode;
  asCard?: boolean;
}) {
  const content = children || insight.title;
  
  if (asCard) {
    return (
      <Link href={`/insight/${insight.slug}`} className="block">
        <Card hover className="p-4">
          {content}
        </Card>
      </Link>
    );
  }
  
  return (
    <Link 
      href={`/insight/${insight.slug}`}
      className="text-cyan-400 hover:text-cyan-300 transition-colors"
    >
      {content}
    </Link>
  );
}

// Usage:
<InsightLink insight={insight} />
<InsightLink insight={insight} asCard>
  <h3>{insight.title}</h3>
  <p>{insight.summary}</p>
</InsightLink>
```

---

### **ViewMoreButton** - For "View More" buttons
```tsx
// components/links/ViewMoreButton.tsx
import Link from "next/link";

export function ViewMoreButton({ 
  category, 
  label 
}: { 
  category: string; 
  label?: string;
}) {
  return (
    <Link 
      href={`/insights?category=${category}`}
      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
    >
      {label || `View More ${category} →`}
    </Link>
  );
}

// Usage:
<ViewMoreButton category="monetization" />
<ViewMoreButton category="ai" label="See All AI Insights →" />
```

---

## 📋 Quick Reference Cheat Sheet

| User Clicks... | Goes To... | URL Pattern |
|---------------|------------|-------------|
| **App name** (anywhere) | App Detail | `/app/[slug]` |
| **Insight card** | Insight Article | `/insight/[slug]` |
| **"View More Analysis"** | Insights Listing | `/insights?category=xyz` |
| **Category name** | Category Detail | `/category/[slug]` |
| **Developer name** | Developer Profile | `/developer/[slug]` |
| **SDK name** | SDK Detail | `/sdk/[slug]` |

---

## ✅ Navigation Checklist

Before adding any new link/button/card, ask:

- [ ] **What am I linking to?**
  - Single app? → Use `/app/[slug]`
  - Single insight? → Use `/insight/[slug]`
  - List of insights? → Use `/insights?category=xyz`

- [ ] **Did I use the helper component?**
  - [ ] `<AppLink>` for apps
  - [ ] `<InsightLink>` for insights
  - [ ] `<ViewMoreButton>` for "view more" buttons

- [ ] **Is my URL consistent with the rules?**
  - [ ] No custom URL patterns
  - [ ] No plural `/insights/[slug]`
  - [ ] Correct category key for listing pages

---

## 🚫 Common Mistakes to Avoid

### ❌ Wrong:
```tsx
// Multiple URL patterns for the same thing
<Link href={`/apps/${app.id}`}>
<Link href={`/application/${app.slug}`}>
<Link href={`/app-detail/${app.slug}`}>

// Plural vs singular confusion
<Link href={`/insights/${insight.slug}`}>  // Should be /insight/
<Link href={`/insight`}>  // Should be /insights for listing

// Custom listing pages instead of using category filter
<Link href="/monetization">
<Link href="/insights/monetization">
```

### ✅ Correct:
```tsx
// One consistent pattern for apps
<Link href={`/app/${app.slug}`}>

// One pattern for insight articles (singular)
<Link href={`/insight/${insight.slug}`}>

// One listing page with category filter
<Link href="/insights?category=monetization">
```

---

## 🎯 Benefits of Following These Rules

✅ **User Confidence:** Users learn the URL patterns and can predict where links go  
✅ **SEO Consistency:** Search engines understand your site structure  
✅ **Code Maintainability:** One place to update if URLs change  
✅ **Team Alignment:** Everyone knows the navigation logic  
✅ **No Dead Links:** Standardized URLs prevent broken links  

---

## 📞 Questions?

**Q: What if I need a new page type?**  
A: Add it to this document first! Define the URL pattern, update the cheat sheet, and create a helper component.

**Q: Can I create a custom URL for a special feature?**  
A: Only if it's truly unique. Most features should use the three core page types: `/app/`, `/insight/`, `/insights`.

**Q: What about external links (documentation, partners)?**  
A: Those are fine! Just make sure internal navigation uses these rules.

---

**Status:** ✅ Navigation rules defined and ready to implement across AppCortex!

