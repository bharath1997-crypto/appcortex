# AppCortex Design System

A lightweight, consistent design system for the AppCortex platform.

## 🎨 Theme Tokens

All design tokens are defined in `app/globals.css`:

### Colors

```css
--app-bg: #020617           /* Main background (slate-950) */
--app-surface: #020617      /* Card/surface backgrounds */
--app-primary: #22d3ee      /* Brand cyan (cyan-400) */
--app-primary-strong: #06b6d4  /* Stronger cyan (cyan-500) */
--app-success: #22c55e      /* Success green (emerald-500) */
--app-danger: #fb7185       /* Error/danger red (rose-400) */
--app-warning: #facc15      /* Warning yellow (yellow-400) */
```

### Shadows

- **Card shadow**: `shadow-card` = `0 16px 40px rgba(15, 23, 42, 0.6)`

### Typography

Default heading styles are applied globally:

- `h1`: `text-3xl md:text-4xl font-semibold tracking-tight`
- `h2`: `text-xl md:text-2xl font-semibold tracking-tight`
- `h3`: `text-base md:text-lg font-semibold`
- `p`: `text-sm md:text-base text-slate-300`

---

## 🧱 UI Primitives

All primitives are in `components/ui/` and can be imported via barrel export:

```tsx
import { Button, Card, Section, Badge } from "@/components/ui";
```

### Button

```tsx
<Button variant="primary">Get Started</Button>
<Button variant="outline">Learn More</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="primary" fullWidth>Full Width Button</Button>
```

**Props:**
- `variant`: `"primary"` | `"outline"` | `"ghost"` (default: `"primary"`)
- `fullWidth`: `boolean` (default: `false`)
- All standard `<button>` HTML attributes

---

### Card

```tsx
<Card>
  <div className="p-4">Content goes here</div>
</Card>

<Card hover className="p-5">
  Hoverable card with enhanced shadow
</Card>
```

**Props:**
- `hover`: `boolean` - Adds hover effects (border glow + shadow)
- `className`: `string` - Additional Tailwind classes

---

### Section

```tsx
<Section 
  title="Market dashboard"
  description="Live indices and category performance data."
>
  {/* Your content */}
</Section>
```

**Props:**
- `title`: `string` (optional)
- `description`: `string` (optional)
- `className`: `string` (optional)
- `children`: `React.ReactNode`

---

### Badge

```tsx
<Badge variant="cyan">Market Trend</Badge>
<Badge variant="emerald">Category Report</Badge>
<Badge variant="amber">Investor Note</Badge>
<Badge variant="rose">Alert</Badge>
```

**Props:**
- `variant`: `"cyan"` | `"emerald"` | `"amber"` | `"rose"` (default: `"cyan"`)
- `className`: `string` (optional)

---

## 📝 Usage Examples

### Before (without design system)

```tsx
<div className="border border-slate-700 rounded-2xl bg-slate-900/60 px-4 py-3 hover:border-cyan-400 transition-colors">
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide bg-cyan-500/15 text-cyan-300 border-cyan-500/40">
    Market Trend
  </span>
  <h3 className="text-sm font-semibold text-slate-50">Title</h3>
  <p className="text-xs text-slate-300">Description text</p>
</div>
```

### After (with design system)

```tsx
<Card hover className="px-4 py-3">
  <Badge variant="cyan">Market Trend</Badge>
  <h3 className="text-sm font-semibold text-slate-50">Title</h3>
  <p className="text-xs text-slate-300">Description text</p>
</Card>
```

---

## 🚀 Refactoring Strategy

To apply this design system across your existing pages:

1. **Replace card wrappers** with `<Card>`
2. **Replace buttons** with `<Button variant="...">`
3. **Wrap sections** with `<Section title="..." description="...">`
4. **Replace inline badges** with `<Badge variant="...">`
5. **Use theme colors** like `bg-app-primary`, `text-app-primary`, etc.

You don't need to refactor all pages at once—gradually swap pieces as you work on them. The consistent tokens ensure everything will look unified.

---

## 🛠️ Utils

### `cn()` - Class Name Utility

Located in `lib/utils.ts`, this helper merges class names:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  someCondition && "conditional-class",
  className
)} />
```

---

## 🎯 Best Practices

1. **Always use theme tokens** for colors (e.g., `bg-app-primary` instead of `bg-cyan-400`)
2. **Prefer primitives** over custom one-off components
3. **Keep hover states consistent** - use `Card` with `hover` prop
4. **Use semantic variants** - `Badge variant="emerald"` for success states, etc.
5. **Maintain responsive sizing** - all components include `md:` breakpoints

