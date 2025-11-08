// app/app/[slug]/page.tsx

import { getExploreAppsData } from "@/lib/mockDataService";
import { Card, Section, Badge } from "@/components/ui";
import Link from "next/link";

interface AppDetailPageProps {
  params: { slug: string };
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const { items } = getExploreAppsData();
  const app = items.find((a) => a.slug === params.slug);

  if (!app) {
    return (
      <div className="animate-fade-up py-10">
        <h1 className="text-2xl font-semibold text-slate-50">
          App not found
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          We couldn&apos;t find an app with slug &quot;{params.slug}&quot;.
        </p>
        <Link
          href="/explore"
          className="mt-4 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to explore
        </Link>
      </div>
    );
  }

  const initials = app.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="animate-fade-up space-y-6 pb-10">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400">
        <Link href="/explore" className="hover:text-cyan-400 transition-colors">
          Explore
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{app.name}</span>
      </div>

      {/* Header */}
      <Section>
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
          {app.name}
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl">
          Detailed preview of <span className="font-semibold">{app.name}</span>{" "}
          from {app.developer}. This page will eventually show full store
          history, regional performance and AI-written summaries.
        </p>
      </Section>

      {/* App summary card */}
      <Card className="p-4 md:p-5">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          {/* Icon */}
          <div className="h-16 w-16 rounded-2xl bg-slate-800 flex items-center justify-center text-lg font-semibold text-slate-100 shadow-lg">
            {initials}
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base md:text-lg font-semibold text-slate-50">
                {app.name}
              </span>
              <span className="text-xs text-slate-400">by {app.developer}</span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="cyan">{app.category}</Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-1 text-amber-300">
                <span>⭐</span>
                <span className="font-medium">{app.rating.toFixed(1)}</span>
                <span className="text-slate-400 text-xs">rating</span>
              </span>
              <span className="text-slate-300">{app.installsLabel}</span>
              <span className="text-emerald-400 font-medium">{app.trendLabel}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Placeholder analytics sections */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4 md:p-5">
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Performance snapshot
          </h2>
          <p className="text-xs md:text-sm text-slate-300">
            This block will show charts for rankings, installs and rating over
            time, similar to a mini market terminal view.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="border border-slate-700 rounded-lg bg-slate-950/60 px-3 py-2">
              <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                Rank
              </div>
              <div className="mt-1 text-lg font-semibold text-slate-100">
                #127
              </div>
              <div className="text-[10px] text-emerald-400">↑ 12</div>
            </div>
            <div className="border border-slate-700 rounded-lg bg-slate-950/60 px-3 py-2">
              <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                Growth
              </div>
              <div className="mt-1 text-lg font-semibold text-slate-100">
                +8.2%
              </div>
              <div className="text-[10px] text-slate-400">7-day</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-5">
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            AI summary
            <Badge variant="amber" className="ml-2">
              Coming soon
            </Badge>
          </h2>
          <p className="text-xs md:text-sm text-slate-300">
            An AI agent will generate short summaries about this app&apos;s
            strengths, risks and market positioning, based on category and
            regional data.
          </p>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span className="text-slate-400">
                Category insights and competitive positioning
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span className="text-slate-400">
                Regional performance breakdown
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span className="text-slate-400">
                Monetization strategy analysis
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional info section */}
      <Section
        title="About this page"
        description="This is a preview layout for individual app profiles. In production, this will connect to live store data and show historical trends, user reviews sentiment, and AI-generated strategic insights."
      />
    </div>
  );
}

