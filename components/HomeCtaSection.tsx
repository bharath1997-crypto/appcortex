import Link from "next/link";

export function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
      
      <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 sm:p-12">
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-50">
            Ready to go deeper?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            See detailed indices, regional breakdowns, and category-level insights in the full market view. 
            Or explore how AppCortex is transforming app market intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/market"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-base font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>View Full Market Dashboard</span>
              <svg
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 text-slate-200 text-base font-semibold rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all hover:scale-105 active:scale-95"
            >
              <span>Learn More About AppCortex</span>
              <svg
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Additional links (optional) */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm">
            <Link
              href="/pricing"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              View pricing
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/api-docs"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              API documentation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/contact"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              Contact sales
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

