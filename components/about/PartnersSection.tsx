// components/about/PartnersSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Section, Card } from "@/components/ui";
import Link from "next/link";

const partners = [
  { name: "Google Play", icon: "📱" },
  { name: "Apple App Store", icon: "🍎" },
  { name: "AWS", icon: "☁️" },
  { name: "Deakin Research Lab", icon: "🎓" },
  { name: "IndieDev Hub", icon: "🚀" },
  { name: "Microsoft AI Studio", icon: "🧠" },
  { name: "GitHub", icon: "💻" },
  { name: "Firebase", icon: "🔥" },
];

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visiblePartners = partners.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <Section title="Partners & Collaborators" description="Building trust through ecosystem partnerships">
      <Card className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {visiblePartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-800/40 transition-colors"
            >
              <div className="text-5xl">{partner.icon}</div>
              <div className="text-xs text-slate-400 text-center font-medium">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-cyan-500" : "w-2 bg-slate-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-sm text-slate-300 text-center mb-4">
          We partner with app ecosystems, universities, and analytics pioneers to make data more transparent and actionable.
        </p>

        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Become a Partner</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Card>
    </Section>
  );
}

