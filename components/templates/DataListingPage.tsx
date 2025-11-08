// components/templates/DataListingPage.tsx
import React from "react";

interface Column {
  key: string;
  label: string;
  render?: (row: any, idx: number) => React.ReactNode;
}

interface DataListingPageProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  summaryCards?: React.ReactNode[];
  columns: Column[];
  rows: any[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataListingPage({
  title,
  description,
  actions,
  filters,
  summaryCards,
  columns,
  rows,
  isLoading = false,
  emptyMessage = "No data available.",
}: DataListingPageProps) {
  return (
    <div className="space-y-6 pb-10 animate-fade-up">
      {/* Header section */}
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex gap-2 justify-end">
            {actions}
          </div>
        )}
      </section>

      {/* Summary cards row (optional) */}
      {summaryCards && summaryCards.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {summaryCards}
        </section>
      )}

      {/* Filters (optional) */}
      {filters && (
        <section className="border border-slate-800 bg-slate-900/40 rounded-xl p-4">
          {filters}
        </section>
      )}

      {/* Table */}
      <section className="border border-slate-800 bg-slate-900/40 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-900/80 border-b border-slate-800">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-left font-semibold text-slate-300 whitespace-nowrap"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-center text-slate-400"
                  >
                    Loading data…
                  </td>
                </tr>
              ) : rows && rows.length > 0 ? (
                rows.map((row, idx) => (
                  <tr
                    key={row.id || idx}
                    className="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors"
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="px-4 py-3 align-middle text-slate-200"
                      >
                        {col.render
                          ? col.render(row, idx)
                          : row[col.key] ?? "-"}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-center text-slate-400"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// Helper component for summary cards
export function SummaryCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-4">
      <div className="text-xs text-slate-400 uppercase tracking-wide">{label}</div>
      <div className="mt-2 text-xl md:text-2xl font-semibold text-slate-50">
        {value}
      </div>
    </div>
  );
}

