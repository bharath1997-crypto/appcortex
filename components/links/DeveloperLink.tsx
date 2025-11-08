// components/links/DeveloperLink.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DeveloperLinkProps {
  developer: {
    slug: string;
    name: string;
  };
  children?: React.ReactNode;
  className?: string;
  showPrefix?: boolean;
}

/**
 * DeveloperLink - Consistent linking to developer profile pages
 * 
 * Always use this component when linking to a developer.
 * It ensures all developer links follow the pattern: /developer/[slug]
 * 
 * @example
 * <DeveloperLink developer={developer} showPrefix />  // "by OpenAI"
 * <DeveloperLink developer={developer} />  // "OpenAI"
 */
export function DeveloperLink({
  developer,
  children,
  className,
  showPrefix = false,
}: DeveloperLinkProps) {
  const content = children || developer.name;
  const displayText = showPrefix ? `by ${content}` : content;

  return (
    <Link
      href={`/developer/${developer.slug}`}
      className={cn(
        "text-slate-400 hover:text-cyan-400 transition-colors",
        className
      )}
    >
      {displayText}
    </Link>
  );
}

