// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiveTicker } from "./LiveTicker";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/market", label: "Market" },
  { href: "/explore", label: "Categories" },
  { href: "/app", label: "Apps" },
  { href: "/insights", label: "Insights" },
  { href: "/developers", label: "Developers" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const pathname = usePathname();

  // Helper function to check if a route is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30">
      {/* Public mode ticker (always visible) */}
      <div className="border-b border-slate-800">
        <LiveTicker />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + tagline */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-sm text-white shadow-lg">
            AC
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold tracking-tight text-slate-50">AppCortex</div>
            <div className="text-xs text-slate-400">
              Global App Market Intelligence
            </div>
          </div>
        </Link>

        {/* Main nav (public mode pages) */}
        <nav className="hidden lg:flex items-center gap-1 text-sm flex-1 justify-center mx-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-all ${
                  active
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden md:inline-flex text-sm text-slate-300 hover:text-cyan-300 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex items-center text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-4 py-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
