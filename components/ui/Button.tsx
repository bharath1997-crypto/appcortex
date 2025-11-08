// components/ui/Button.tsx
import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth,
  className,
  children,
  asChild,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";

  const styles: Record<Variant, string> = {
    primary:
      "bg-app-primary text-slate-900 hover:bg-app-primary-strong focus:ring-app-primary",
    outline:
      "border border-slate-600 text-slate-200 hover:border-app-primary hover:text-app-primary",
    ghost:
      "text-slate-300 hover:text-app-primary hover:bg-slate-800/60",
  };

  const classes = cn(
    base,
    styles[variant],
    fullWidth && "w-full",
    className
  );

  // If asChild is true, apply styles to the child element instead of wrapping in button
  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as any;
    return React.cloneElement(children as any, {
      className: cn(childProps.className, classes),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

