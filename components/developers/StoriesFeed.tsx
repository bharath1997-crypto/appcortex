// components/developers/StoriesFeed.tsx
import { Card, Badge } from "@/components/ui";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "How Our App Reached 1M Users Without Paid Ads",
    developer: "Vortex Games",
    avatar: "🎮",
    summary: "Using AppCortex category data, we targeted the right niche and grew organically through strategic content marketing and community building.",
    tags: ["Growth", "Marketing", "Organic"],
    readTime: 4,
    slug: "1m-users-no-ads",
    likes: 342,
  },
  {
    id: 2,
    title: "From Indie to 10M Downloads: Our Journey",
    developer: "FitAI Labs",
    avatar: "💡",
    summary: "Starting as a two-person team, we used market intelligence to identify gaps in the health tech space and built features users actually needed.",
    tags: ["Startup", "Health", "AI"],
    readTime: 6,
    slug: "indie-to-10m",
    likes: 428,
  },
  {
    id: 3,
    title: "Pivoting from Games to Fintech: What We Learned",
    developer: "Phoenix Dev",
    avatar: "🔥",
    summary: "When our game stopped growing, we analyzed market trends and pivoted to finance. Here's how AppCortex data guided our transition.",
    tags: ["Pivot", "Fintech", "Strategy"],
    readTime: 5,
    slug: "games-to-fintech-pivot",
    likes: 289,
  },
  {
    id: 4,
    title: "Building a Profitable App in 90 Days",
    developer: "QuickBuild Studio",
    avatar: "⚡",
    summary: "Speed matters. We used rapid prototyping and market validation to go from idea to profitable app in three months.",
    tags: ["Speed", "MVP", "Monetization"],
    readTime: 3,
    slug: "profitable-in-90-days",
    likes: 512,
  },
  {
    id: 5,
    title: "How We Monetized Our Free App to $50K/Month",
    developer: "RevenueMax",
    avatar: "💰",
    summary: "Our freemium model wasn't working. Here's how we redesigned our monetization strategy using competitor analysis from AppCortex.",
    tags: ["Revenue", "Freemium", "Growth"],
    readTime: 7,
    slug: "50k-monthly-revenue",
    likes: 634,
  },
  {
    id: 6,
    title: "Scaling Across 5 Countries Simultaneously",
    developer: "GlobalApp Inc",
    avatar: "🌍",
    summary: "Regional expansion is tricky. We used market data to prioritize which countries to launch in and how to localize effectively.",
    tags: ["International", "Localization", "Scale"],
    readTime: 8,
    slug: "scaling-5-countries",
    likes: 397,
  },
];

export function StoriesFeed() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Developer Stories
        </h2>
        <Link
          href="/developers/submit"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Submit Your Story →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Link key={story.id} href={`/developers/story/${story.slug}`}>
            <Card hover className="p-5 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center text-xl">
                  {story.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400 truncate">{story.developer}</div>
                  <div className="text-xs text-slate-500">{story.readTime} min read</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-50 mb-2 line-clamp-2">
                {story.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                {story.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="cyan" className="text-[8px]">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  ❤️ {story.likes} likes
                </span>
                <span className="text-cyan-400">
                  Read More →
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-sm text-slate-400 mb-3">
          Got a story to share about your app journey?
        </p>
        <Link
          href="/developers/submit"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2.5 text-sm font-medium text-white hover:from-purple-600 hover:to-cyan-600 transition-all"
        >
          Submit Your Experience
        </Link>
      </div>
    </section>
  );
}

