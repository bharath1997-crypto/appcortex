// components/templates/DetailInsightPage.tsx
import React from "react";

interface DetailInsightPageProps {
  title: string;
  subtitle?: string;
  badge?: string;
  headerActions?: React.ReactNode;
  leftColumn: React.ReactNode;
  rightColumn?: React.ReactNode;
  bottomSections?: React.ReactNode;
}

export function DetailInsightPage({
  title,
  subtitle,
  badge,
  headerActions,
  leftColumn,
  rightColumn,
  bottomSections,
}: DetailInsightPageProps) {
  return (
    <div className="space-y-6 pb-10 animate-fade-up">
      {/* Header */}
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
              {title}
            </h1>
            {badge && (
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {headerActions && (
          <div className="flex gap-2 justify-end">
            {headerActions}
          </div>
        )}
      </section>

      {/* Main two-column layout */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {leftColumn}
        </div>
        {rightColumn && (
          <aside className="space-y-6">
            {rightColumn}
          </aside>
        )}
      </section>

      {/* Bottom stacked sections */}
      {bottomSections && (
        <section className="space-y-6">
          {bottomSections}
        </section>
      )}
    </div>
  );
}

