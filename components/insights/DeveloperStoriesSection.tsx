// components/insights/DeveloperStoriesSection.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "Scaling an Indie AI App from 0→1M Installs",
    developer: "Nova Studios",
    avatar: "🧑‍💻",
    quote: "AppCortex data helped us find our first market and optimize our launch strategy.",
    readTime: "8 min read",
    slug: "nova-studios-0-to-1m",
  },
  {
    id: 2,
    title: "From Games to Fintech: A Successful Pivot Story",
    developer: "Vortex Games",
    avatar: "🎮",
    quote: "User feedback and market intelligence showed us the next big opportunity in finance.",
    readTime: "10 min read",
    slug: "vortex-pivot-to-fintech",
  },
  {
    id: 3,
    title: "Building Trust in Health Tech: Our Journey",
    developer: "FitAI Labs",
    avatar: "💡",
    quote: "Understanding regional health app trends was critical to our international expansion.",
    readTime: "6 min read",
    slug: "fitai-health-tech-journey",
  },
];

export function DeveloperStoriesSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Developer Stories
        </h2>
        <Link
          href="/developers/stories"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Stories →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <Link key={story.id} href={`/developers/story/${story.slug}`}>
            <Card hover className="p-5 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
                  {story.avatar}
                </div>
                <div>
                  <div className="text-xs text-slate-400">{story.developer}</div>
                  <div className="text-xs text-slate-500">{story.readTime}</div>
                </div>
              </div>

              <h3 className="text-base font-semibold text-slate-50 mb-3 line-clamp-2">
                {story.title}
              </h3>

              <blockquote className="text-xs text-slate-400 italic leading-relaxed mb-4 flex-1 line-clamp-3">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              <div className="pt-3 border-t border-slate-800 text-xs text-cyan-400">
                Read Full Story →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

