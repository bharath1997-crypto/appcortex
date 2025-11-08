# FooterBar Implementation Examples

## Quick Start

### 1. Basic Usage in Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { FooterBar } from "@/components/FooterBar";

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
        <FooterBar />
      </body>
    </html>
  );
}
```

---

## Customization Examples

### Example 1: Changing the Description

To update the footer description:

```tsx
// In FooterBar.tsx, find this section:
<p className="text-xs text-slate-400 max-w-md leading-relaxed">
  Tracking the global app economy with live indices and AI insights.
</p>

// Replace with your description:
<p className="text-xs text-slate-400 max-w-md leading-relaxed">
  Real-time intelligence for the global app economy with live market indices.
</p>
```

### Example 2: Adding Custom Footer Links

To add or modify footer links:

```tsx
// In FooterBar.tsx, edit the footerLinks array:
const footerLinks: FooterLink[] = [
  { href: "/about", label: "About" },
  { href: "/investors", label: "Investors" },
  { href: "/api-docs", label: "API Docs" },
  { href: "/blog", label: "Blog" },        // Add this
  { href: "/careers", label: "Careers" },  // Add this
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];
```

### Example 3: Customizing Social Media Links

To change or add social media platforms:

```tsx
// In FooterBar.tsx, find the social links section:

{/* Add Discord */}
<Link
  href="https://discord.gg/appcortex"
  className="text-slate-500 hover:text-cyan-400 transition-colors"
  aria-label="Discord"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
  </svg>
</Link>
```

### Example 4: Compact Footer (Minimal Version)

Create a simplified footer without additional info:

```tsx
// Simplified FooterBar.tsx
export function FooterBar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          {/* Left: Copyright */}
          <p className="text-slate-500">
            © {currentYear} AppCortex. All rights reserved.
          </p>

          {/* Right: Links */}
          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/about" className="text-slate-400 hover:text-cyan-300">
              About
            </Link>
            <Link href="/privacy" className="text-slate-400 hover:text-cyan-300">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-cyan-300">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
```

### Example 5: Footer with Newsletter Signup

Add a newsletter signup form to the footer:

```tsx
"use client";

import { useState } from "react";

export function FooterBar() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Subscribe:", email);
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Newsletter Section */}
        <div className="mb-8 pb-8 border-b border-slate-800/50">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-slate-50 mb-2">
              Stay Updated
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Get market insights and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-md text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-md hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Rest of footer */}
        {/* ... existing footer content ... */}
      </div>
    </footer>
  );
}
```

---

## Real-World Usage Scenarios

### Scenario 1: Marketing Landing Page

Footer optimized for conversion:

```tsx
export function MarketingFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Four-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
                <span className="sr-only">AppCortex</span>
              </div>
              <span className="font-semibold text-slate-50">AppCortex</span>
            </div>
            <p className="text-xs text-slate-400">
              Track the global app economy with live market intelligence.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-50 mb-3">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-xs text-slate-400 hover:text-cyan-300">Features</Link></li>
              <li><Link href="/pricing" className="text-xs text-slate-400 hover:text-cyan-300">Pricing</Link></li>
              <li><Link href="/api" className="text-xs text-slate-400 hover:text-cyan-300">API</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-50 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-xs text-slate-400 hover:text-cyan-300">About</Link></li>
              <li><Link href="/careers" className="text-xs text-slate-400 hover:text-cyan-300">Careers</Link></li>
              <li><Link href="/press" className="text-xs text-slate-400 hover:text-cyan-300">Press</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-50 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-slate-400 hover:text-cyan-300">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-slate-400 hover:text-cyan-300">Terms</Link></li>
              <li><Link href="/security" className="text-xs text-slate-400 hover:text-cyan-300">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} AppCortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

### Scenario 2: Investor Relations Focus

Footer emphasizing investor content:

```tsx
export function InvestorFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Left: Brand + Investor Highlight */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-slate-50 text-sm">AppCortex</span>
              <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                Public Co.
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Tracking the global app economy with live indices and AI insights.
            </p>
            <div className="flex gap-4 text-xs text-slate-500">
              <span>NYSE: APPX</span>
              <span>•</span>
              <span className="text-green-400">↑ $45.67</span>
            </div>
          </div>

          {/* Right: Investor Links */}
          <nav className="flex flex-wrap gap-4">
            <Link href="/investors" className="text-xs font-medium text-cyan-400 hover:text-cyan-300">
              Investor Relations
            </Link>
            <Link href="/investors/reports" className="text-xs text-slate-400 hover:text-cyan-300">
              Financial Reports
            </Link>
            <Link href="/investors/governance" className="text-xs text-slate-400 hover:text-cyan-300">
              Governance
            </Link>
            <Link href="/investors/events" className="text-xs text-slate-400 hover:text-cyan-300">
              Events
            </Link>
          </nav>
        </div>

        {/* Legal + Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-800/50 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} AppCortex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

### Scenario 3: Developer-Focused Footer

Footer with developer resources:

```tsx
export function DeveloperFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Developers */}
          <div>
            <h3 className="text-sm font-semibold text-slate-50 mb-3">Developers</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-xs text-slate-400 hover:text-cyan-300">Documentation</Link></li>
              <li><Link href="/api" className="text-xs text-slate-400 hover:text-cyan-300">API Reference</Link></li>
              <li><Link href="/sdk" className="text-xs text-slate-400 hover:text-cyan-300">SDKs</Link></li>
              <li><Link href="/status" className="text-xs text-slate-400 hover:text-cyan-300">API Status</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-50 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-xs text-slate-400 hover:text-cyan-300">Blog</Link></li>
              <li><Link href="/guides" className="text-xs text-slate-400 hover:text-cyan-300">Guides</Link></li>
              <li><Link href="/examples" className="text-xs text-slate-400 hover:text-cyan-300">Examples</Link></li>
              <li><Link href="/community" className="text-xs text-slate-400 hover:text-cyan-300">Community</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold text-slate-50 mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-xs text-slate-400 hover:text-cyan-300">Help Center</Link></li>
              <li><Link href="/contact" className="text-xs text-slate-400 hover:text-cyan-300">Contact</Link></li>
              <li><Link href="/github" className="text-xs text-slate-400 hover:text-cyan-300">GitHub</Link></li>
              <li><Link href="/discord" className="text-xs text-slate-400 hover:text-cyan-300">Discord</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-800/50">
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} AppCortex. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Integration with Other Components

### With Status Indicator

```tsx
export function FooterBar() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Existing footer content */}
        
        {/* Add status indicator */}
        <div className="mt-6 pt-6 border-t border-slate-800/50">
          <div className="flex items-center justify-center gap-2 text-xs">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-500">All systems operational</span>
            <Link href="/status" className="text-cyan-400 hover:text-cyan-300 ml-2">
              View status →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### With Trust Badges

```tsx
// Add trust badges/certifications
<div className="flex items-center justify-center gap-6 mt-6">
  <img src="/badges/gdpr.svg" alt="GDPR Compliant" className="h-8 opacity-60" />
  <img src="/badges/soc2.svg" alt="SOC 2 Certified" className="h-8 opacity-60" />
  <img src="/badges/iso.svg" alt="ISO 27001" className="h-8 opacity-60" />
</div>
```

---

## Testing Examples

### Unit Test Example (Jest + React Testing Library)

```tsx
import { render, screen } from "@testing-library/react";
import { FooterBar } from "./FooterBar";

describe("FooterBar", () => {
  it("renders the brand name", () => {
    render(<FooterBar />);
    expect(screen.getByText("AppCortex")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<FooterBar />);
    expect(screen.getByText(/Tracking the global app economy/i)).toBeInTheDocument();
  });

  it("renders all footer links", () => {
    render(<FooterBar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Investors")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("displays current year in copyright", () => {
    render(<FooterBar />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<FooterBar />);
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
  });

  it("opens social links in new tab", () => {
    render(<FooterBar />);
    const twitterLink = screen.getByLabelText("Twitter");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
```

### E2E Test Example (Cypress)

```javascript
describe("FooterBar", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.scrollTo("bottom");
  });

  it("displays footer at bottom of page", () => {
    cy.get("footer").should("be.visible");
  });

  it("navigates to footer links", () => {
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });

  it("opens social links in new tab", () => {
    cy.get('a[aria-label="Twitter"]')
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer");
  });

  it("displays correct copyright year", () => {
    const currentYear = new Date().getFullYear();
    cy.contains(`© ${currentYear}`).should("be.visible");
  });

  it("is responsive on mobile", () => {
    cy.viewport("iphone-x");
    cy.get("footer").should("be.visible");
    cy.contains("About").should("be.visible");
  });
});
```

---

## Troubleshooting Common Issues

### Issue: Footer not sticking to bottom

**Problem:** Footer appears in middle of page with short content

**Solution:** Ensure proper flex layout

```tsx
// app/layout.tsx
<body className="min-h-screen flex flex-col">  {/* Add these classes */}
  <TopBar />
  <main className="flex-1">  {/* Add flex-1 */}
    {children}
  </main>
  <FooterBar />
</body>
```

### Issue: Links not responsive on mobile

**Problem:** Links overlap or don't wrap properly

**Solution:** Check responsive classes

```tsx
// Ensure flex-wrap is used
<nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
  {/* Links */}
</nav>
```

### Issue: Social icons not showing

**Problem:** SVG icons not visible

**Solution:** Check SVG fill and currentColor

```tsx
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  {/* Ensure path has proper d attribute */}
</svg>
```

---

## Performance Optimization

### Lazy Load Social Icons (Future Enhancement)

```tsx
import dynamic from "next/dynamic";

const SocialLinks = dynamic(() => import("./SocialLinks"), {
  loading: () => <div className="h-5 w-20 bg-slate-800 animate-pulse rounded" />,
});

export function FooterBar() {
  return (
    <footer>
      {/* Footer content */}
      <SocialLinks />
    </footer>
  );
}
```

---

## Accessibility Enhancements

### Enhanced ARIA Support

```tsx
<footer role="contentinfo" aria-label="Site footer">
  <nav role="navigation" aria-label="Footer navigation">
    {/* Links */}
  </nav>
  
  <div role="complementary" aria-label="Social media links">
    {/* Social icons */}
  </div>
</footer>
```

---

## Next Steps

1. **Import FooterBar** in your root layout
2. **Ensure flex layout** on body and main
3. **Customize links** as needed
4. **Update social URLs** with your actual links
5. **Test responsive behavior** on mobile
6. **Deploy and monitor**

---

## Resources

- [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [SVG Icons](https://heroicons.com/)

