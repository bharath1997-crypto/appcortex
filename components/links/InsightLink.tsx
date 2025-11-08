// components/links/InsightLink.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui";

interface InsightLinkProps {
  insight: {
    slug: string;
    title: string;
    summary?: string;
  };
  children?: React.ReactNode;
  className?: string;
  asCard?: boolean;
}

/**
 * InsightLink - Consistent linking to insight article pages
 * 
 * Always use this component when linking to an insight/analysis/report.
 * It ensures all insight links follow the pattern: /insight/[slug]
 * 
 * @example
 * <InsightLink insight={insight} />
 * <InsightLink insight={insight} asCard>
 *   <h3>{insight.title}</h3>
 *   <p>{insight.summary}</p>
 * </InsightLink>
 */
export function InsightLink({
  insight,
  children,
  className,
  asCard = false,
}: InsightLinkProps) {
  const content = children || insight.title;

  if (asCard) {
    return (
      <Link href={`/insight/${insight.slug}`} className="block">
        <Card hover className={cn("p-4", className)}>
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Link
      href={`/insight/${insight.slug}`}
      className={cn(
        "text-cyan-400 hover:text-cyan-300 transition-colors",
        className
      )}
    >
      {content}
    </Link>
  );
}

