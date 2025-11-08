// components/links/AppLink.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AppLinkProps {
  app: {
    slug: string;
    name: string;
  };
  children?: React.ReactNode;
  className?: string;
}

/**
 * AppLink - Consistent linking to app detail pages
 * 
 * Always use this component when linking to an app.
 * It ensures all app links follow the pattern: /app/[slug]
 * 
 * @example
 * <AppLink app={app} />
 * <AppLink app={app} className="font-bold">See Details</AppLink>
 */
export function AppLink({ app, children, className }: AppLinkProps) {
  return (
    <Link
      href={`/app/${app.slug}`}
      className={cn(
        "text-slate-50 hover:text-cyan-400 transition-colors",
        className
      )}
    >
      {children || app.name}
    </Link>
  );
}

