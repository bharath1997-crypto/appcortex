// components/ui/Section.tsx

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, description, children, className }: SectionProps) {
  return (
    <section className={className || "space-y-3"}>
      {title && (
        <h2 className="text-base md:text-lg font-semibold text-slate-100">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-xs md:text-sm text-slate-400 max-w-3xl">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}

