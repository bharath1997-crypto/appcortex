// components/ui/Card.tsx
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover }: CardProps) {
  return (
    <div
      className={cn(
        "border border-slate-800 rounded-2xl bg-slate-900/60 shadow-sm",
        hover && "hover:border-cyan-400 hover:shadow-card transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

