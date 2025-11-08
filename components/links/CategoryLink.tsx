// components/links/CategoryLink.tsx
import Link from "next/link";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

interface CategoryLinkProps {
  category: {
    slug: string;
    name: string;
  };
  children?: React.ReactNode;
  asBadge?: boolean;
  className?: string;
}

/**
 * CategoryLink - Consistent linking to category detail pages
 * 
 * Always use this component when linking to a category.
 * It ensures all category links follow the pattern: /category/[slug]
 * 
 * @example
 * <CategoryLink category={category} />
 * <CategoryLink category={category} asBadge />
 */
export function CategoryLink({
  category,
  children,
  asBadge = false,
  className,
}: CategoryLinkProps) {
  const content = children || category.name;

  if (asBadge) {
    return (
      <Link href={`/category/${category.slug}`}>
        <Badge variant="cyan" className={cn("cursor-pointer", className)}>
          {content}
        </Badge>
      </Link>
    );
  }

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        "text-slate-200 hover:text-cyan-400 transition-colors",
        className
      )}
    >
      {content}
    </Link>
  );
}

