# Design System Examples

Real before/after examples showing how to use the AppCortex design system.

---

## Example 1: Insight Card (Already Refactored ✅)

### Before

```tsx
<Link
  href={`/insights/${insight.slug}`}
  className="block border border-slate-700 rounded-2xl bg-slate-900/60 px-4 py-3 md:px-5 md:py-4 hover:border-cyan-400 transition-colors"
>
  <div className="flex items-center justify-between gap-3 mb-1.5">
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide bg-cyan-500/15 text-cyan-300 border-cyan-500/40">
      {insight.category}
    </span>
    <span className="text-[11px] text-slate-400">
      {date} · {insight.readingMinutes} min read
    </span>
  </div>
  <h3 className="text-sm md:text-base font-semibold text-slate-50">
    {insight.title}
  </h3>
  <p className="mt-1.5 text-xs md:text-sm text-slate-300">
    {insight.summary}
  </p>
</Link>
```

**Issues:**
- 200+ characters of repetitive class names
- Hard to maintain badge styling
- Card logic duplicated across components

### After

```tsx
import { Card, Badge } from "@/components/ui";

<Link href={`/insights/${insight.slug}`} className="block">
  <Card hover className="px-4 py-3 md:px-5 md:py-4">
    <div className="flex items-center justify-between gap-3 mb-1.5">
      <Badge variant={badgeVariant}>{insight.category}</Badge>
      <span className="text-[11px] text-slate-400">
        {date} · {insight.readingMinutes} min read
      </span>
    </div>
    <h3 className="text-sm md:text-base font-semibold text-slate-50">
      {insight.title}
    </h3>
    <p className="mt-1.5 text-xs md:text-sm text-slate-300">
      {insight.summary}
    </p>
  </Card>
</Link>
```

**Benefits:**
- 60% less code
- Semantic, reusable components
- Consistent hover effects
- Easy to change styling globally

---

## Example 2: Call-to-Action Buttons

### Before

```tsx
<a
  href="/auth/signup"
  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-slate-900 font-medium hover:bg-cyan-400 transition-colors"
>
  Get started free
</a>
<a
  href="/contact"
  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
>
  Talk to sales
</a>
```

### After

```tsx
import { Button } from "@/components/ui";

<Button variant="primary" as="a" href="/auth/signup">
  Get started free
</Button>
<Button variant="outline" as="a" href="/contact">
  Talk to sales
</Button>
```

---

## Example 3: Section Headers

### Before

```tsx
<section className="space-y-3">
  <h2 className="text-base md:text-lg font-semibold text-slate-100">
    Market dashboard
  </h2>
  <p className="text-xs md:text-sm text-slate-400 max-w-3xl">
    Live indices and regional performance data for the app economy.
  </p>
  {/* Content */}
</section>
```

### After

```tsx
import { Section } from "@/components/ui";

<Section
  title="Market dashboard"
  description="Live indices and regional performance data for the app economy."
>
  {/* Content */}
</Section>
```

---

## Example 4: Developer Story Cards

### How to refactor

```tsx
// Before
<div className="border border-slate-700 rounded-xl bg-slate-900/60 p-4 hover:border-cyan-400 transition-colors">
  <div className="text-xs text-cyan-300 uppercase mb-1">
    {story.category}
  </div>
  <h3 className="text-sm font-semibold text-slate-50">{story.title}</h3>
  <p className="text-xs text-slate-300 mt-1.5">{story.summary}</p>
</div>

// After
import { Card, Badge } from "@/components/ui";

<Card hover className="p-4">
  <Badge variant="cyan" className="mb-1">{story.category}</Badge>
  <h3 className="text-sm font-semibold text-slate-50">{story.title}</h3>
  <p className="text-xs text-slate-300 mt-1.5">{story.summary}</p>
</Card>
```

---

## Example 5: Tool Cards (Developers Page)

### How to refactor

```tsx
// Before
<div className="border border-slate-700 rounded-xl bg-slate-900/60 p-4 hover:border-emerald-400 transition-colors">
  <div className="flex items-center justify-between">
    <h3 className="text-sm font-semibold text-slate-50">{tool.name}</h3>
    <span className="text-[10px] uppercase tracking-wide text-emerald-400">
      {tool.status === "available" ? "Live" : "Coming soon"}
    </span>
  </div>
  <p className="text-xs text-slate-300 mt-1.5">{tool.description}</p>
</div>

// After
import { Card, Badge } from "@/components/ui";

<Card hover className="p-4">
  <div className="flex items-center justify-between">
    <h3 className="text-sm font-semibold text-slate-50">{tool.name}</h3>
    <Badge variant={tool.status === "available" ? "emerald" : "amber"}>
      {tool.status === "available" ? "Live" : "Coming soon"}
    </Badge>
  </div>
  <p className="text-xs text-slate-300 mt-1.5">{tool.description}</p>
</Card>
```

---

## Quick Refactoring Checklist

When updating a page to use the design system:

- [ ] Replace `<div className="border border-slate-... rounded-... bg-slate-...">` with `<Card>`
- [ ] Add `hover` prop to clickable cards
- [ ] Replace inline badge styles with `<Badge variant="...">`
- [ ] Wrap sections with `<Section title="..." description="...">`
- [ ] Replace button/link CTAs with `<Button variant="...">`
- [ ] Use theme colors: `bg-app-primary`, `text-app-primary`, etc.
- [ ] Remove duplicate responsive classes (primitives handle them)

---

## Color Usage Guide

### When to use each Badge variant:

- **cyan**: Market trends, data insights, primary categories
- **emerald**: Success states, "Live" status, growth metrics, available features
- **amber**: Warnings, "Coming soon" status, investor notes, premium features
- **rose**: Errors, alerts, critical metrics (like crashes)

### When to use each Button variant:

- **primary**: Main CTA, "Get Started", "Sign Up", "Upgrade"
- **outline**: Secondary actions, "Learn More", "Contact", "View Details"
- **ghost**: Tertiary actions, "Cancel", navigation items, subtle interactions

