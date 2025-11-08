// components/ui/Badge.tsx
import { cn } from "@/lib/utils";

type BadgeVariant = "cyan" | "emerald" | "amber" | "rose";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "cyan", className }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide";

  const styles: Record<BadgeVariant, string> = {
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/40",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/40",
    rose: "bg-rose-500/10 text-rose-300 border-rose-500/40",
  };

  return <span className={cn(base, styles[variant], className)}>{children}</span>;
}

