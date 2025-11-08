// components/developers/CommunityDiscussions.tsx
import { Card } from "@/components/ui";
import Link from "next/link";

const discussions = [
  {
    id: 1,
    title: "What's your favorite SDK for scaling?",
    author: "CodeMaster",
    avatar: "👨‍💻",
    replies: 24,
    likes: 42,
    timeAgo: "2h ago",
    slug: "favorite-sdk-scaling",
  },
  {
    id: 2,
    title: "Share your best app launch hack",
    author: "LaunchPro",
    avatar: "🚀",
    replies: 18,
    likes: 35,
    timeAgo: "5h ago",
    slug: "app-launch-hack",
  },
  {
    id: 3,
    title: "How do you handle app store rejections?",
    author: "DevLife",
    avatar: "💡",
    replies: 31,
    likes: 58,
    timeAgo: "1d ago",
    slug: "handle-rejections",
  },
  {
    id: 4,
    title: "Best monetization strategy for productivity apps?",
    author: "RevenueGuru",
    avatar: "💰",
    replies: 27,
    likes: 46,
    timeAgo: "2d ago",
    slug: "monetization-productivity",
  },
];

export function CommunityDiscussions() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Community Discussions
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Join conversations with fellow developers
          </p>
        </div>
        <Link
          href="/developers/forum"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View All Discussions →
        </Link>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {discussions.map((discussion) => (
          <Link key={discussion.id} href={`/developers/forum/${discussion.slug}`}>
            <Card hover className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center text-xl flex-shrink-0">
                  {discussion.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-50 mb-1 line-clamp-1">
                    {discussion.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>{discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-500">
                      💬 {discussion.replies} replies
                    </span>
                    <span className="text-slate-500">
                      ❤️ {discussion.likes} likes
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-sm text-slate-400 mb-3">
          Join the conversation and connect with developers
        </p>
        <Link
          href="/developers/forum"
          className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
        >
          Join Developer Forum (Login Required)
        </Link>
      </div>
    </section>
  );
}

