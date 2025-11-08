// components/developers/FeaturedDeveloper.tsx
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const featuredDev = {
  name: "Nova Studios",
  avatar: "🧑‍💻",
  country: "India",
  flag: "🇮🇳",
  apps: 5,
  downloads: "20M+",
  quote: "AppCortex helped us identify three new markets for our AI tools and grow 340% in 6 months.",
  topApp: "AI Mirror",
  category: "AI Tools",
  profileSlug: "nova-studios",
  storySlug: "nova-growth",
};

export function FeaturedDeveloper() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Featured Developer of the Week
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Spotlight on innovative creators making waves
          </p>
        </div>
        <Badge variant="amber" className="text-[9px]">
          FEATURED
        </Badge>
      </div>

      <Card className="p-6 md:p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-amber-500/30">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar & Info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center text-5xl shadow-xl">
              {featuredDev.avatar}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-50">{featuredDev.name}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                <span className="text-2xl">{featuredDev.flag}</span>
                <span>{featuredDev.country}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-slate-400">Apps:</span>{" "}
                <span className="text-slate-100 font-semibold">{featuredDev.apps}</span>
              </div>
              <div>
                <span className="text-slate-400">Total Installs:</span>{" "}
                <span className="text-slate-100 font-semibold">{featuredDev.downloads}</span>
              </div>
              <div>
                <span className="text-slate-400">Top App:</span>{" "}
                <span className="text-cyan-400 font-semibold">{featuredDev.topApp}</span>
              </div>
              <div>
                <span className="text-slate-400">Category:</span>{" "}
                <span className="text-slate-100 font-semibold">{featuredDev.category}</span>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-sm md:text-base text-slate-300 italic leading-relaxed border-l-4 border-cyan-500 pl-4">
              &ldquo;{featuredDev.quote}&rdquo;
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/developer/${featuredDev.profileSlug}`}
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors"
              >
                View Profile
              </Link>
              <Link
                href={`/developers/story/${featuredDev.storySlug}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
              >
                Read Story
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

