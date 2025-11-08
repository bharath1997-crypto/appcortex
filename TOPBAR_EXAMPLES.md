# TopBar Implementation Examples

## Quick Start

### 1. Basic Usage in Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AppCortex – Live App Market Intelligence",
  description: "Global app ecosystem analytics and insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <TopBar />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## Migration Examples

### From Header to TopBar

**Before (Using Header component):**
```tsx
import { Header } from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

**After (Using TopBar component):**
```tsx
import { TopBar } from "@/components/TopBar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TopBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

---

## Customization Examples

### Example 1: Adding Custom Navigation Items

To add or modify navigation items, edit the `navItems` array:

```tsx
// In TopBar.tsx
const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/market", label: "Market" },
  { href: "/explore", label: "Categories" },
  { href: "/app", label: "Apps" },
  { href: "/insights", label: "Insights" },
  { href: "/developers", label: "Developers" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  // Add new item:
  { href: "/blog", label: "Blog" },
  // Or modify existing:
  // { href: "/marketplace", label: "Marketplace" },
];
```

### Example 2: Changing Brand/Logo

To customize the logo section:

```tsx
// Replace this section in TopBar.tsx:
<Link 
  href="/" 
  className="flex items-center gap-3 flex-shrink-0 group hover:opacity-80 transition-opacity"
>
  {/* Logo with custom styling */}
  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-sm text-white shadow-lg ring-1 ring-indigo-400/20 group-hover:ring-indigo-400/40 transition-all">
    {/* Change this text to your logo */}
    AC
  </div>
  <div className="hidden sm:block">
    <div className="font-semibold tracking-tight text-slate-50 text-sm">
      AppCortex {/* Change brand name */}
    </div>
    <div className="text-xs text-slate-400 font-medium">
      Global App Market Intelligence {/* Change tagline */}
    </div>
  </div>
</Link>
```

### Example 3: Custom Logo Image

To use an image instead of text logo:

```tsx
// Replace the AC badge with an image
<Link href="/" className="flex items-center gap-3 flex-shrink-0">
  <img 
    src="/logo.png" 
    alt="AppCortex" 
    className="h-10 w-10 object-contain"
  />
  <div className="hidden sm:block">
    <div className="font-semibold tracking-tight text-slate-50 text-sm">
      AppCortex
    </div>
    <div className="text-xs text-slate-400 font-medium">
      Global App Market Intelligence
    </div>
  </div>
</Link>
```

### Example 4: Changing Colors

To customize the color scheme:

```tsx
// Change logo gradient
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 ...">

// Change active state color
className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
  active
    ? "text-purple-300 bg-purple-400/15 ring-1 ring-purple-400/30"  // Purple instead of cyan
    : "text-slate-300 hover:text-purple-300 hover:bg-slate-800/40"
}`}

// Change button gradient
className="... bg-gradient-to-r from-purple-500 to-pink-600 ..."
```

### Example 5: Adding Custom Styling Hook

To dynamically change styles based on context:

```tsx
"use client";

import { useContext } from "react";

// Create a context for theme
export function TopBar() {
  // Example: get theme from context
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <header className={`sticky top-0 z-50 border-b ${
      isDarkMode 
        ? "bg-slate-950/95 border-slate-800" 
        : "bg-white border-slate-200"
    } ...`}>
      {/* Rest of component */}
    </header>
  );
}
```

---

## Real-World Usage Scenarios

### Scenario 1: SaaS Dashboard Layout

You might want to show different TopBar in authenticated vs. public pages:

```tsx
// app/layout.tsx - Public pages
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

export default function PublicLayout({ children }) {
  return (
    <html>
      <body>
        <TopBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx - Dashboard
import { DashboardNav } from "@/components/DashboardNav";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <DashboardNav /> {/* Different navbar for authenticated users */}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Scenario 2: Multi-Language Support (Future)

```tsx
// app/[lang]/layout.tsx
import { TopBar } from "@/components/TopBar";

const translations = {
  en: {
    home: "Home",
    market: "Market",
    // ...
  },
  es: {
    home: "Inicio",
    market: "Mercado",
    // ...
  },
};

export default function LocalizedLayout({ 
  children, 
  params 
}: {
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <TopBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Scenario 3: Sticky vs. Scrollable Navigation

```tsx
// Sticky (current implementation)
<header className="sticky top-0 z-50 ...">

// Fixed (alternative)
<header className="fixed top-0 left-0 right-0 z-50 ...">

// Custom scroll-based behavior
"use client";
import { useState, useEffect } from "react";

export function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${
      isScrolled ? "shadow-lg" : ""
    } ...`}>
      {/* Component */}
    </header>
  );
}
```

---

## Integration with Other Components

### With LiveTicker

```tsx
// If you want to add LiveTicker to TopBar
import { LiveTicker } from "./LiveTicker";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 ...">
      {/* Add LiveTicker below header */}
      <div className="border-b border-slate-800">
        <LiveTicker />
      </div>

      {/* Rest of TopBar */}
      <div className="max-w-7xl mx-auto ...">
        {/* Navigation, logo, etc. */}
      </div>
    </header>
  );
}
```

### With Search Bar

```tsx
// Add search functionality to TopBar
export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 ...">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        {/* Nav */}
        
        <div className="flex items-center gap-3">
          {/* Search button */}
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:bg-slate-800/40 rounded-md transition"
          >
            🔍
          </button>
          
          {/* Auth buttons */}
          {/* ... */}
        </div>
      </div>

      {/* Search bar (conditionally rendered) */}
      {searchOpen && (
        <div className="border-t border-slate-800 px-4 py-3">
          <input 
            type="text" 
            placeholder="Search apps..."
            className="w-full bg-slate-800/40 text-slate-50 px-4 py-2 rounded-lg"
          />
        </div>
      )}
    </header>
  );
}
```

### With Announcement Banner

```tsx
// Add temporary announcement banner
export function TopBar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      {showAnnouncement && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-sm text-amber-100 flex justify-between items-center">
          <span>New: App Intelligence API now available!</span>
          <button 
            onClick={() => setShowAnnouncement(false)}
            className="text-amber-300 hover:text-amber-200"
          >
            ✕
          </button>
        </div>
      )}

      <header className="sticky top-0 z-50 ...">
        {/* TopBar content */}
      </header>
    </>
  );
}
```

---

## Accessibility Enhancements

### Example: Enhanced Keyboard Navigation

```tsx
"use client";

import { useEffect, useRef } from "react";

export function TopBar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Close mobile menu if open
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 ...">
      <nav ref={navRef} role="navigation" aria-label="Main navigation">
        {/* Navigation items */}
      </nav>
    </header>
  );
}
```

### Example: Screen Reader Announcements

```tsx
<header 
  className="sticky top-0 z-50 ..."
  role="banner"
  aria-label="Site header"
>
  <Link 
    href="/" 
    aria-label="AppCortex - Global App Market Intelligence - Home"
    className="flex items-center gap-3"
  >
    {/* Logo */}
  </Link>

  <nav 
    role="navigation" 
    aria-label="Main navigation menu"
    className="hidden lg:flex items-center gap-1"
  >
    {navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        aria-current={isActive(item.href) ? "page" : undefined}
        className="..."
      >
        {item.label}
      </Link>
    ))}
  </nav>
</header>
```

---

## Testing Examples

### Unit Test Example (Jest + React Testing Library)

```tsx
import { render, screen } from "@testing-library/react";
import { TopBar } from "./TopBar";

describe("TopBar", () => {
  it("renders the brand name", () => {
    render(<TopBar />);
    expect(screen.getByText("AppCortex")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<TopBar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Market")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  it("renders auth buttons", () => {
    render(<TopBar />);
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Get started")).toBeInTheDocument();
  });

  it("highlights active page", () => {
    render(<TopBar />);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("text-cyan-300");
  });
});
```

### E2E Test Example (Cypress)

```javascript
describe("TopBar Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to different pages", () => {
    cy.get("a:contains('Market')").click();
    cy.url().should("include", "/market");
    cy.get("a:contains('Market')").should("have.class", "text-cyan-300");
  });

  it("toggles mobile menu", () => {
    cy.viewport("iphone-x");
    cy.get("button[aria-label='Toggle menu']").click();
    cy.get("nav").should("be.visible");
  });

  it("navigates to sign in page", () => {
    cy.get("a:contains('Sign in')").click();
    cy.url().should("include", "/auth/login");
  });

  it("navigates to signup page", () => {
    cy.get("a:contains('Get started')").click();
    cy.url().should("include", "/auth/signup");
  });
});
```

---

## Performance Optimization

### Example: Memoization (Future Enhancement)

```tsx
"use client";

import { memo } from "react";

// Memoize nav items to prevent unnecessary re-renders
const NavMenu = memo(function NavMenu({ 
  items, 
  pathname 
}: { 
  items: NavItem[]; 
  pathname: string;
}) {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
            pathname.startsWith(item.href) || pathname === item.href
              ? "text-cyan-300 bg-cyan-400/15"
              : "text-slate-300 hover:text-cyan-300"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
});

export function TopBar() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 ...">
      <NavMenu items={navItems} pathname={pathname} />
    </header>
  );
}
```

---

## Troubleshooting Common Issues

### Issue: Mobile menu doesn't close after click

**Solution:**
```tsx
// In TopBar.tsx, make sure to close menu when link is clicked
{mobileMenuOpen && (
  <nav className="lg:hidden ...">
    {navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}  // Add this line
        className="..."
      >
        {item.label}
      </Link>
    ))}
  </nav>
)}
```

### Issue: Tagline not visible on mobile

**Solution:** This is intentional for mobile optimization. To show it:
```tsx
// Change "hidden sm:block" to "block" or adjust breakpoint
<div className="block">  {/* Changed from "hidden sm:block" */}
  <div className="font-semibold text-slate-50 text-sm">AppCortex</div>
  <div className="text-xs text-slate-400 font-medium">
    Global App Market Intelligence
  </div>
</div>
```

### Issue: Active state not working

**Solution:** Ensure your route paths match exactly:
```tsx
// Check that routes in navItems match your actual page routes
const navItems: NavItem[] = [
  { href: "/", label: "Home" },              // Matches /
  { href: "/market", label: "Market" },      // Matches /market/*
  { href: "/explore", label: "Categories" }, // Matches /explore/*
  // etc.
];
```

---

## Next Steps

1. **Import TopBar** in your root layout
2. **Customize colors** to match your brand
3. **Update navigation items** if needed
4. **Test responsive behavior** on mobile/tablet
5. **Check accessibility** with screen readers
6. **Deploy and monitor** performance

---

## Resources

- [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [Next.js usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

