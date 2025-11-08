// lib/utils.ts

/**
 * Simple utility to merge class names
 * Alternative to clsx without extra dependencies
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

