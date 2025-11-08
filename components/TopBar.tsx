"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/market", label: "Market" },
  { href: "/explore", label: "Apps" },
  { href: "/insights", label: "Insights" },
  { href: "/developers", label: "Developers" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export function TopBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, systemTheme } = useTheme();
  
  // Determine current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = currentTheme === "light" ? "/logo-dark.png" : "/logo-light.png";

  // Helper function to check if a route is active
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md shadow-md transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-frame)',
        borderBottom: '2px solid var(--border-light)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Tagline */}
          <Link 
            href="/" 
            className="flex items-center gap-3 flex-shrink-0 group hover:opacity-80 transition-opacity"
          >
            <div className="h-10 w-10 relative flex items-center justify-center">
              {/* Logo image - switches based on theme */}
              <Image 
                src={logoSrc}
                alt="AppCortex Logo" 
                width={40}
                height={40}
                className="object-contain transition-opacity"
                priority
                key={currentTheme}
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold tracking-tight text-sm" style={{ color: 'var(--text-primary)' }}>
                AppCortex
              </div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                Global App Market Intelligence
              </div>
            </div>
          </Link>

          {/* Center: Navigation Menu (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-cyan-400/15 ring-1 ring-cyan-400/30"
                      : "hover:bg-slate-800/10"
                  }`}
                  style={{
                    color: active ? 'var(--accent)' : 'var(--text-secondary)'
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Auth Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language selector (optional) */}
            <button
              className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              aria-label="Language"
              title="Language selector"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2.605a2 2 0 01-.540 1.349L19.834 10M3 5a2 2 0 002 2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2.605a2 2 0 01-.540 1.349L19.834 10M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5m-5 0v14"
                />
              </svg>
            </button>

            {/* Sign in link (desktop) */}
            <Link
              href="/auth"
              className="hidden md:inline-flex text-sm font-medium transition-colors px-3 py-2 rounded-md hover:bg-slate-800/10"
              style={{ color: 'var(--text-secondary)' }}
            >
              Sign in
            </Link>

            {/* Get started button */}
            <Link
              href="/auth"
              className="inline-flex items-center text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-4 py-2.5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 ring-1 ring-cyan-400/20 hover:ring-cyan-400/40"
            >
              Get started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`h-6 w-6 transition-transform ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-200 dark:border-slate-800 py-4 px-2 space-y-1 mb-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    active
                      ? "text-cyan-600 dark:text-cyan-300 bg-cyan-400/15 ring-1 ring-cyan-400/30"
                      : "text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Mobile Sign in link */}
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-all"
            >
              Sign in
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

