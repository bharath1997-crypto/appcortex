"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Cycle through: auto → dark → light → auto
  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  // Get current display mode
  const displayMode = theme === "system" ? resolvedTheme : theme;
  const isDark = displayMode === "dark";
  const isAuto = theme === "system";

  // Button styling based on current theme
  const getButtonStyle = () => {
    if (isAuto) {
      return "bg-gradient-to-br from-slate-700 to-slate-600 border-2 border-slate-500 hover:border-cyan-400";
    } else if (isDark) {
      return "bg-slate-800 border-2 border-slate-700 hover:border-indigo-500";
    } else {
      return "bg-amber-400 border-2 border-amber-500 hover:border-amber-600";
    }
  };

  // Get title text
  const getTitle = () => {
    if (isAuto) return "Auto Mode (Click for Dark)";
    if (isDark) return "Dark Mode (Click for Light)";
    return "Light Mode (Click for Auto)";
  };

  return (
    <button
      onClick={cycleTheme}
      className={`fixed bottom-6 left-6 z-50 group
        h-14 w-14 rounded-full shadow-2xl
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        ${getButtonStyle()}`}
      title={getTitle()}
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Light Mode) */}
      <svg
        className={`h-6 w-6 transition-all duration-300 ${
          !isDark && !isAuto
            ? "rotate-0 scale-100 text-white"
            : "rotate-90 scale-0 text-transparent"
        } absolute`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon (Dark Mode) */}
      <svg
        className={`h-6 w-6 transition-all duration-300 ${
          isDark && !isAuto
            ? "rotate-0 scale-100 text-slate-400"
            : "rotate-90 scale-0 text-transparent"
        } absolute`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      {/* Monitor Icon (Auto Mode) */}
      <svg
        className={`h-6 w-6 transition-all duration-300 ${
          isAuto
            ? "rotate-0 scale-100 text-cyan-300"
            : "rotate-90 scale-0 text-transparent"
        } absolute`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </button>
  );
}

