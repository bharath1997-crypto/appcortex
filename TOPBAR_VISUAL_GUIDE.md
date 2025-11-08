# TopBar Visual Guide & Layout Reference

## Desktop Layout (≥1024px)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│  [AC AppCortex]    [Home] [Market] [Categories] [Apps] [Insights]              │
│   Global App          [Developers] [About] [Pricing]              [🌐] [Sign in] │
│   Market...                                                        [Get started] │
│                                                                                  │
└────────────────────────────────────────────────────────────────────────────────┘
```

**Sections:**
- **Left**: Logo + brand name + tagline
- **Center**: Full navigation menu with 8 items
- **Right**: Language selector, sign in link, get started button

**Highlights:**
- Current page highlighted in cyan with background
- Hover effects on all interactive elements
- Plenty of whitespace for readability

---

## Tablet Layout (641px - 1023px)

```
┌────────────────────────────────────────────────────────────┐
│                                                              │
│  [AC AppCortex]    [Home] [Market] [Categories] [Apps]      │
│   Global App          [☰]              [Sign in] [Get started]│
│   Market...                                                  │
│                                                              │
└────────────────────────────────────────────────────────────┘
```

**Changes:**
- Navigation menu hides behind hamburger menu (☰)
- Sign in link visible
- Get started button always visible

---

## Mobile Layout (<640px)

### Closed Menu

```
┌──────────────────────────────────┐
│                                  │
│  [AC]  Home                [☰]   │
│        [Get started]             │
│                                  │
└──────────────────────────────────┘
```

**Features:**
- Logo without tagline (space saving)
- Hamburger menu button
- Get started button always visible

### Open Menu

```
┌──────────────────────────────────┐
│                                  │
│  [AC]  Home                [✕]   │
│        [Get started]             │
├──────────────────────────────────┤
│  • Home                          │
│  • Market                        │
│  • Categories                    │
│  • Apps                          │
│  • Insights                       │
│  • Developers                    │
│  • About                         │
│  • Pricing                       │
│  • Sign in                       │
│                                  │
└──────────────────────────────────┘
```

**Features:**
- All navigation items visible
- Sign in link visible (mobile only)
- Smooth expand/collapse animation

---

## Active State Example

```
┌────────────────────────────────────────┐
│                                        │
│  [AC AppCortex]  [Home]  [Market]     │
│   Global App      [∘ Categories ∘]    │
│   Market...       [Apps] [Insights]   │
│                              [Get...] │
│                                        │
└────────────────────────────────────────┘

Legend:
  ∘ ∘ = Active state (cyan highlight + ring)
```

**Active State Styling:**
- Background: `cyan-400/15` (light cyan)
- Text: `cyan-300` (bright cyan)
- Border: `ring-1 ring-cyan-400/30` (subtle ring)

---

## Color Scheme Reference

### Light Mode (Unused - Dark Theme Only)

```
Background:    #0a0a0a (slate-950)
Text Primary:  #f1f5f9 (slate-50)
Text Secondary: #94a3b8 (slate-400)
Accent:        #00d9ff → #6366f1 (cyan to indigo gradient)
```

### Dark Mode (Active)

```
Background:      #0f172a (slate-950)
Text Primary:    #f1f5f9 (slate-50)
Text Secondary:  #cbd5e1 (slate-300)
Accent Primary:  #22d3ee (cyan-400)
Accent Light:    #06b6d4 (cyan-500)
```

### Gradients

**Logo Background:**
```
Direction: Top-left to bottom-right
From:      #6366f1 (indigo-500)
To:        #06b6d4 (cyan-400)
```

**Get Started Button:**
```
Direction: Left to right
From:      #06b6d4 (cyan-500)
To:        #4f46e5 (indigo-600)
```

---

## Typography Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Brand Name | 14px (sm) | 600 | slate-50 |
| Tagline | 12px (xs) | 500 | slate-400 |
| Nav Item | 14px (sm) | 500 | slate-300 / cyan-300 |
| Button Text | 14px (sm) | 600 | white |

---

## Spacing Reference

### Horizontal Spacing

```
┌─── px-4 (mobile) / px-6 (tablet) / px-8 (desktop) ───┐
│                                                        │
│  gap-3 (sm) / gap-3 (md) / gap-3 (lg)                │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Vertical Spacing

```
Logo:           h-10 w-10 (40px × 40px)
Header Height:  h-16 (64px)
Padding:        py-2 (nav items) / py-2.5 (button)
Mobile Menu:    py-4 (padding) / space-y-1 (items)
```

---

## Interactive States

### Navigation Item States

**Default:**
```
Text:       slate-300
Background: transparent
Transition: all 200ms
```

**Hover:**
```
Text:       cyan-300
Background: slate-800/40
Icon:       scale-105
```

**Active (Current Page):**
```
Text:       cyan-300
Background: cyan-400/15
Ring:       1px cyan-400/30
```

**Focus (Keyboard):**
```
Outline:    Focus ring (browser default)
Background: slate-800/40
```

### Button States

**Default (Get Started):**
```
Background: linear-gradient(cyan-500 → indigo-600)
Box Shadow: none
```

**Hover:**
```
Background: linear-gradient(cyan-500 → indigo-600)
Box Shadow: 0 0 15px rgba(34, 211, 238, 0.25)
Transform:  scale(1.05)
Ring:       1px cyan-400/40
```

**Active (Clicked):**
```
Transform:  scale(0.95)
```

---

## Responsive Breakpoints

### Breakpoint Strategy

```
Mobile          Tablet          Desktop
< 640px         641 - 1023px    ≥ 1024px

┌─────────┬──────────────┬─────────────┐
│ Compact │   Balanced   │   Full      │
└─────────┴──────────────┴─────────────┘
```

### Visibility Rules

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Logo (AC) | ✓ | ✓ | ✓ |
| Tagline | ✗ (hidden) | ✓ | ✓ |
| Full Nav Menu | ✗ | ✗ | ✓ |
| Hamburger Menu | ✓ | ✓ | ✗ |
| Language Btn | ✗ | ✗ | ✓ |
| Sign in Link | ✗ | ✓ | ✓ |
| Get Started Btn | ✓ | ✓ | ✓ |

---

## Animation Reference

### Transitions Applied

```css
/* All interactive elements */
transition: all 200ms ease-in-out;

/* Color changes */
transition: color 200ms ease-in-out;

/* Background changes */
transition: background-color 200ms ease-in-out;

/* Scale on hover */
transition: transform 150ms ease-out;

/* Menu icon rotate */
transition: transform 200ms ease-out;
```

### Animation Timing

| Action | Duration | Effect |
|--------|----------|--------|
| Hover | 200ms | Color/background fade |
| Active | Instant | Direct application |
| Mobile Menu | 200ms | Rotate icon 180° |
| Button Scale | 150ms | 1 → 1.05 on hover |
| Button Click | 100ms | 1.05 → 0.95 |

---

## Accessibility Features

### Semantic Structure

```html
<header>           <!-- Main header element -->
  <div>            <!-- Container -->
    <Link>         <!-- Logo/brand -->
    <nav>          <!-- Navigation section -->
      <Link>       <!-- Nav items -->
    <div>          <!-- Auth section -->
      <button>     <!-- Language button -->
      <Link>       <!-- Sign in -->
      <Link>       <!-- Get started -->
      <button>     <!-- Mobile menu -->
```

### ARIA Labels

```tsx
<button aria-label="Language" />
<button aria-label="Toggle menu" aria-expanded={mobileMenuOpen} />
```

### Keyboard Navigation

- **Tab**: Move focus between interactive elements
- **Enter**: Click focused element
- **Escape**: Close mobile menu (future enhancement)
- **Arrow Keys**: Navigate menu items (future enhancement)

---

## Z-Index Strategy

```
┌─────────────────────────────┐
│ Mobile Menu Backdrop (41)   │ (optional future)
├─────────────────────────────┤
│ TopBar Header (z-50)        │ ← Always on top
├─────────────────────────────┤
│ Page Content (z-0)          │
└─────────────────────────────┘
```

The TopBar uses `z-50` to ensure it stays above all page content.

---

## Component Composition

```
TopBar
├── Logo Section
│   ├── Icon (AC badge)
│   ├── Brand Name
│   └── Tagline
├── Navigation Menu
│   ├── Home Link
│   ├── Market Link
│   ├── Categories Link
│   ├── Apps Link
│   ├── Insights Link
│   ├── Developers Link
│   ├── About Link
│   └── Pricing Link
├── Auth Section
│   ├── Language Button (desktop)
│   ├── Sign in Link (tablet+)
│   ├── Get Started Button (all)
│   └── Mobile Menu Button (mobile/tablet)
└── Mobile Menu (conditional)
    ├── Nav items (mobile)
    └── Sign in (mobile only)
```

---

## Quick Styling Reference

### Rounded Corners

```
Logo badge:     rounded-xl (12px)
Buttons/Links:  rounded-md (6px)
Nav items:      rounded-md (6px)
```

### Shadow & Ring Effects

```
Logo:        shadow-lg, ring-1 ring-indigo-400/20
Button:      hover:shadow-lg hover:shadow-cyan-500/25, ring-1 ring-cyan-400/20
Default:     border-b border-slate-800
```

### Opacity & Glass Effect

```
Header Background:  bg-slate-950/95 backdrop-blur-sm
Nav Hover:          bg-slate-800/40
Active State:       bg-cyan-400/15
```

---

## Example Color Palette Export

### HEX Values

```
Primary Dark:       #0f172a (slate-950)
Primary Light:      #f1f5f9 (slate-50)
Secondary Text:     #cbd5e1 (slate-300)
Muted Text:         #94a3b8 (slate-400)
Accent Bright:      #22d3ee (cyan-400)
Accent Dark:        #06b6d4 (cyan-500)
Accent Light:       #00d9ff (cyan-300)
Primary Accent:     #6366f1 (indigo-500)
```

### CSS Variables (Optional)

```css
:root {
  --topbar-bg: rgb(15, 23, 42);
  --topbar-border: rgb(30, 41, 59);
  --topbar-text: rgb(241, 245, 249);
  --topbar-text-muted: rgb(148, 163, 184);
  --topbar-accent: rgb(34, 211, 238);
  --topbar-gradient-start: rgb(99, 102, 241);
  --topbar-gradient-end: rgb(6, 182, 212);
}
```

---

## Figma/Design Tool Export

If exporting to design tools, use these specifications:

**Canvas Size (Mobile):** 375 × 1000px
**Canvas Size (Tablet):** 768 × 1000px
**Canvas Size (Desktop):** 1280 × 1000px

**Grid:** 8px baseline grid
**Column:** 12-column grid for desktop
**Gutters:** 16px (mobile), 24px (tablet), 32px (desktop)

---

## Performance Metrics

Target Performance Scores:
- **Lighthouse Performance**: > 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

The TopBar component is highly performant due to:
- Minimal client-side state (only mobile menu)
- Optimized re-renders
- CSS-based animations (no JS animations)
- Lightweight SVG icons

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025 | Initial release with responsive design |

---

## Support & Questions

For questions or issues with the TopBar component, refer to:
- TOPBAR_COMPONENT.md (Main documentation)
- components/TopBar.tsx (Source code)
- app/layout.tsx (Integration example)

