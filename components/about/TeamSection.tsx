// components/about/TeamSection.tsx
import { Section, Card } from "@/components/ui";
import Link from "next/link";

const team = [
  {
    name: "Bharath Nidumolu",
    role: "Founder & Product Architect",
    tagline: "Designing bridges between data and intelligence.",
    avatar: "👨‍💻",
  },
  {
    name: "Meghan Dieball",
    role: "Product Research",
    tagline: "Turning user behavior into strategy.",
    avatar: "👩‍🔬",
  },
  {
    name: "Rutu Shah",
    role: "Developer Relations",
    tagline: "Empowering creators to see their impact.",
    avatar: "👩‍💼",
  },
];

export function TeamSection() {
  return (
    <Section title="Meet the Team" description="The people behind AppCortex">
      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member, index) => (
          <Card key={index} hover className="p-6 text-center">
            {/* Avatar */}
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-5xl mb-4">
              {member.avatar}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-slate-50 mb-1">
              {member.name}
            </h3>

            {/* Role */}
            <div className="text-sm text-cyan-400 font-medium mb-3">
              {member.role}
            </div>

            {/* Tagline */}
            <p className="text-xs text-slate-400 italic leading-relaxed">
              "{member.tagline}"
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl border border-slate-800 bg-slate-900/40 text-center space-y-4">
        <p className="text-sm text-slate-300">
          We collaborate globally with data scientists, AI engineers, and industry researchers.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Join Our Team</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}

