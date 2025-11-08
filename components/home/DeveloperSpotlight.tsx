// components/home/DeveloperSpotlight.tsx
"use client";

import { useState, useEffect } from "react";
import { Section, Card, Badge } from "@/components/ui";
import Link from "next/link";

const featuredDevelopers = [
  {
    id: "nova-studios",
    name: "Nova Studios",
    slug: "nova-studios",
    type: "Featured Developer",
    apps: 5,
    totalInstalls: "20M+",
    badge: "🏆",
    description: "Award-winning mobile game studio behind 5 top-charting titles.",
  },
  {
    id: "codebloom",
    name: "CodeBloom",
    slug: "codebloom",
    type: "Rising Star",
    apps: 3,
    totalInstalls: "2.5M+",
    badge: "⭐",
    description: "Fast-growing productivity tools developer with +12% downloads this month.",
  },
  {
    id: "zentech",
    name: "ZenTech Labs",
    slug: "zentech",
    type: "Innovation Leader",
    apps: 8,
    totalInstalls: "35M+",
    badge: "🚀",
    description: "Pioneer in AI-powered wellness and health tracking applications.",
  },
];

export function DeveloperSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredDevelopers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentDev = featuredDevelopers[currentIndex];

  return (
    <Section title="Developer Spotlight" description="Featuring top creators in the app ecosystem">
      <Card className="p-6 md:p-8 bg-gradient-to-br from-indigo-500/5 via-slate-900/50 to-purple-500/5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Developer Icon */}
          <div className="flex-shrink-0">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl shadow-lg">
              {currentDev.badge}
            </div>
          </div>

          {/* Developer Info */}
          <div className="flex-1 space-y-3">
            <div>
              <Badge variant="amber" className="mb-2">
                {currentDev.type}
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-slate-50">
                {currentDev.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2">{currentDev.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Apps:</span>
                <span className="font-semibold text-slate-100">{currentDev.apps}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Total Installs:</span>
                <span className="font-semibold text-emerald-400">{currentDev.totalInstalls}</span>
              </div>
            </div>

            <Link
              href={`/developers/${currentDev.slug}`}
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Read Their Story
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {featuredDevelopers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-slate-600"
              }`}
              aria-label={`Show developer ${index + 1}`}
            />
          ))}
        </div>
      </Card>
    </Section>
  );
}

