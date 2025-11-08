// components/links/ViewMoreButton.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ViewMoreButtonProps {
  category: string;
  label?: string;
  className?: string;
}

/**
 * ViewMoreButton - Consistent "View More" buttons that link to insights listing
 * 
 * Always use this component for "View More", "See All", "Explore More" buttons.
 * It ensures all listing links follow the pattern: /insights?category=[key]
 * 
 * @example
 * <ViewMoreButton category="monetization" />
 * <ViewMoreButton category="ai" label="See All AI Insights →" />
 */
export function ViewMoreButton({
  category,
  label,
  className,
}: ViewMoreButtonProps) {
  const defaultLabel = `View More ${category.charAt(0).toUpperCase() + category.slice(1)} →`;

  return (
    <Link
      href={`/insights?category=${category}`}
      className={cn(
        "inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium",
        className
      )}
    >
      {label || defaultLabel}
    </Link>
  );
}

